import { Prisma } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";
import { IRentalOrderPayload } from "./rental.interface";

const createRentalOrderIntoDB = async (
  customerId: string,
  payload: IRentalOrderPayload,
) => {
  const { gearItemId, quantity, startDate, endDate } = payload;

  const gear = await prisma.gearItem.findFirstOrThrow({
    where: {
      id: gearItemId,
    },
  });

  if (gear.availableStock < quantity) {
    throw new Error("Insufficient gear stock.");
  }

  const totalDays = Math.ceil(
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
      (1000 * 60 * 60 * 24),
  );

  if (totalDays <= 0) {
    throw new Error("End date must be after start date.");
  }

  const totalAmount = Number(gear.pricePerDay) * quantity * totalDays;

  const result = await prisma.$transaction(async (tx) => {
    const order = await tx.rentalOrder.create({
      data: {
        customerId,
        gearItemId,
        quantity,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        totalDays,
        pricePerDay: gear.pricePerDay,
        totalAmount: new Prisma.Decimal(totalAmount),
      },
      include: {
        customer: true,
        gearItem: true,
      },
    });

    await tx.gearItem.update({
      where: {
        id: gearItemId,
      },
      data: {
        availableStock: {
          decrement: quantity,
        },
      },
    });

    return order;
  });

  return result;
};

export const rentalService = {
  createRentalOrderIntoDB,
};
