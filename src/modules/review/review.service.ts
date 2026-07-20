import { RentalStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import { ICreateReviewPayload } from "./review.interface";

const createReviewIntoDB = async (
  customerId: string,
  payload: ICreateReviewPayload,
) => {
  const { rentalOrderId, rating, comment } = payload;

  if (rating < 1 || rating > 5) {
    throw new Error("Rating must be between 1 and 5.");
  }

  const rental = await prisma.rentalOrder.findFirst({
    where: {
      id: rentalOrderId,
      customerId,
    },
    include: {
      review: true,
    },
  });

  if (!rental) {
    throw new Error("Rental order not found.");
  }

  if (rental.status !== RentalStatus.RETURNED) {
    throw new Error("You can review only after returning the gear.");
  }

  if (rental.review) {
    throw new Error("Review already submitted.");
  }

  const review = await prisma.review.create({
    data: {
      customerId,
      gearItemId: rental.gearItemId,
      rentalOrderId,
      rating,
      comment,
    },
    include: {
      customer: {
        select: {
          id: true,
          name: true,
        //   profilePhoto: true,
        },
      },
      gearItem: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return review;
};

export const reviewService = {
  createReviewIntoDB,
};
