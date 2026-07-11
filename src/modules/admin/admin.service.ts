import { UserStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      phone: true,
      address: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const updateUserStatusIntoDB = async (userId: string, payload: { status: UserStatus }) => {
    const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      status: payload.status,
    },
  });

  return result;
};

const getAllGearFromDB = async () => {
  const result = await prisma.gearItem.findMany({
    select: {
      id: true,
      providerId: true,
      categoryId: true,
      name: true,
      brand: true,
      description: true,
      pricePerDay: true,
      stock: true,
      availableStock: true,
      condition: true,
      images: true,
      specifications: true,
      isAvailable: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};

const getAllRentalOrderFromDB = async () => {
  const result = await prisma.rentalOrder.findMany({
    select: {
      id: true,
      customerId: true,
      gearItemId: true,
      quantity: true,
      startDate: true,
      endDate: true,
      totalDays: true,
      pricePerDay: true,
      totalAmount: true,
      status: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return result;
};


export const adminService = {
  getAllUsersFromDB,
  updateUserStatusIntoDB,
  getAllGearFromDB,
  getAllRentalOrderFromDB
};
