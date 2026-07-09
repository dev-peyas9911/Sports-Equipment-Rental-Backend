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
}

export const adminService = {
  getAllUsersFromDB,
  updateUserStatusIntoDB
};
