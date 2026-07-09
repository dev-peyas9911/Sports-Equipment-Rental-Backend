import { prisma } from "../../lib/prisma";

const getAllUsersFromDB = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
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

export const adminService = {
  getAllUsersFromDB,
};
