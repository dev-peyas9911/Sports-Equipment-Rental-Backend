import { PaymentStatus, RentalStatus } from "../../../generated/prisma/enums";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import { stripe } from "../../lib/stripe";
import { ICreatePaymentPayload } from "./payment.interface";
import crypto from "crypto";

const createPaymentIntoDB = async (
  customerId: string,
  payload: ICreatePaymentPayload,
) => {
  const { rentalOrderId } = payload;

  const rentalOrder = await prisma.rentalOrder.findFirst({
    where: {
      id: rentalOrderId,
      customerId,
    },
    include: {
      gearItem: true,
      payment: true,
    },
  });

  if (!rentalOrder) {
    throw new Error("Rental order not found.");
  }

  // Check rental status
  if (rentalOrder.status === RentalStatus.PAID) {
    throw new Error("This rental order has already been paid.");
  }

  // Check payment exists
  if (
    rentalOrder.payment &&
    rentalOrder.payment.status === PaymentStatus.COMPLETED
  ) {
    throw new Error("Payment already completed.");
  }

  const amount = Number(rentalOrder.totalAmount);

  if (amount <= 0) {
    throw new Error("Invalid payment amount.");
  }

  // Generate internal transaction id
  const transactionId = crypto.randomUUID();

  // Create Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    mode: "payment",

    payment_method_types: ["card"],

    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",

          unit_amount: Math.round(amount * 100),

          product_data: {
            name: rentalOrder.gearItem.name,
            description: `Rental Order #${rentalOrder.id}`,
          },
        },
      },
    ],

    metadata: {
      rentalOrderId: rentalOrder.id,
      transactionId,
      customerId,
    },

    success_url: `${config.app_url}/payment/success?session_id={CHECKOUT_SESSION_ID}`,

    cancel_url: `${config.app_url}/payment/cancel`,
  });

  // If payment row already exists (pending/failed)
  if (rentalOrder.payment) {
    await prisma.payment.update({
      where: {
        rentalOrderId,
      },
      data: {
        transactionId,
        amount,
        status: PaymentStatus.PENDING,
        stripeSessionId: session.id,
        paidAt: null,
      },
    });
  } else {
    await prisma.payment.create({
      data: {
        rentalOrderId,
        transactionId,
        amount,
        status: PaymentStatus.PENDING,
        stripeSessionId: session.id,
      },
    });
  }

  return {
    checkoutUrl: session.url,
    sessionId: session.id,
    transactionId,
  };
};

// webhook
const confirmPaymentIntoDB = async (event: any) => {
  if (event.type !== "checkout.session.completed") {
    return;
  }

  const session = event.data.object;

  const transactionId = session.metadata.transactionId;

  const rentalOrderId = session.metadata.rentalOrderId;

  await prisma.$transaction(async (tx) => {
    await tx.payment.update({
      where: {
        transactionId,
      },
      data: {
        status: PaymentStatus.COMPLETED,
        paidAt: new Date(),
      },
    });

    await tx.rentalOrder.update({
      where: {
        id: rentalOrderId,
      },
      data: {
        status: RentalStatus.PAID,
      },
    });
  });

  return true;
};

const getPaymentsFromDB = async (customerId: string) => {
  const payments = await prisma.payment.findMany({
    where: {
      rentalOrder: {
        customerId,
      },
    },
    include: {
      rentalOrder: {
        include: {
          gearItem: {
            select: {
              id: true,
              name: true,
              // image: true,
            },
          },
        },
      },
    },
    orderBy: {
      paidAt: "desc",
    },
  });

  return payments;
};

const getSinglePaymentFromDB = async (
  customerId: string,
  paymentId: string,
) => {
  const payment = await prisma.payment.findFirst({
    where: {
      id: paymentId,
      rentalOrder: {
        customerId,
      },
    },
    include: {
      rentalOrder: {
        include: {
          gearItem: {
            select: {
              id: true,
              name: true,
              // image: true,
              // dailyRate: true,
            },
          },
        },
      },
    },
  });

  if (!payment) {
    throw new Error("Payment not found.");
  }

  return payment;
};



export const paymentService = {
  createPaymentIntoDB,
  confirmPaymentIntoDB,
  getPaymentsFromDB,
  getSinglePaymentFromDB,
};
