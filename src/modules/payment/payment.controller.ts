import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { paymentService } from "./payment.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { stripe } from "../../lib/stripe";
import config from "../../config";

const createPayment = catchAsync(async(req:Request, res:Response, next: NextFunction) => {
    const customerId = req.user?.id;
    const payload = req.body;

    const result = await paymentService.createPaymentIntoDB(
      customerId as string,
      payload
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Checkout session created.",
      data: { result },
    });

});

const confirmPayment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("Webhook recieved");
    const signature = req.headers["stripe-signature"] as string;

    if (!signature) {
      throw new Error("Stripe signature is missing.");
    }

    const event = stripe.webhooks.constructEvent(
      req.body,
      signature,
      config.stripe_webhook_secret
    );

    await paymentService.confirmPaymentIntoDB(event);

    res.status(httpStatus.OK).json({
      received: true,
    });
  }
);

export const paymentController = {
    createPayment,
    confirmPayment
}