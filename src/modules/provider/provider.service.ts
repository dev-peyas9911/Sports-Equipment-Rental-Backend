import { prisma } from "../../lib/prisma";
import { IGearPayload } from "./provider.interface";

const createGearIntoDB = async (providerId: string, payload: IGearPayload) => {
  await prisma.category.findUniqueOrThrow({
    where: {
      id: payload.categoryId,
    },
  });

  const gear = await prisma.gearItem.create({
    data: {
      ...payload,
      providerId,
      availableStock: payload.stock,
      isAvailable: true,
    },
  });

  return gear;
};

const updateGearIntoDB = async (
  providerId: string,
  gearId: string,
  payload: Partial<IGearPayload>,
) => {
  const existingGear = await prisma.gearItem.findUniqueOrThrow({
    where: {
      id: gearId,
    },
  });

  if (existingGear.providerId !== providerId) {
    throw new Error("You are not allowed to update this gear.");
  }

  if (payload.categoryId) {
    await prisma.category.findUniqueOrThrow({
      where: {
        id: payload.categoryId,
      },
    });
  }

  if (payload.stock !== undefined) {
    payload.availableStock = payload.stock;
  }

  const updatedGear = await prisma.gearItem.update({
    where: {
      id: gearId,
    },
    data: payload,
  });

  return updatedGear;
};

const deleteGearIntoDB = async (providerId: string, gearId: string) => {
  const existingGear = await prisma.gearItem.findUniqueOrThrow({
    where: {
      id: gearId,
    },
  });

  if (existingGear.providerId !== providerId) {
    throw new Error("You are not authorized to delete this gear.");
  }

  const deletedGear = await prisma.gearItem.delete({
    where: {
      id: gearId,
    },
  });

  return deletedGear;
};

export const providerService = {
  createGearIntoDB,
  updateGearIntoDB,
  deleteGearIntoDB,
};
