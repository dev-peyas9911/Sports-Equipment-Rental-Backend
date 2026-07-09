import { GearItemWhereInput } from "../../../generated/prisma/models";
import { prisma } from "../../lib/prisma";
import { IGearQuery } from "./gear.interface";

const getAllGearFromDB = async (query: IGearQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;
  const sortBy = query.sortBy ? query.sortBy : "createdAt";
  const sortOrder = query.sortOrder ? query.sortOrder : "desc";

  const andConditions: GearItemWhereInput[] = [];

  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          name: {
            contains: query.searchTerm,
            mode: "insensitive",
          },
        },
        {
          brand: {
            contains: query.searchTerm,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query.searchTerm,
            mode: "insensitive",
          },
        },
      ],
    });
  }

  if (query.name) {
    andConditions.push({
      name: query.name,
    });
  }

  if (query.brand) {
    andConditions.push({
      brand: query.brand,
    });
  }

  if (query.description) {
    andConditions.push({
      description: query.description,
    });
  }

  const gears = await prisma.gearItem.findMany({
    where: {
      AND: andConditions,
    },
    take: limit,
    skip: skip,

    orderBy: {
      // sortBy : sortOrder
      [sortBy]: sortOrder,
    },
  });

  const totalGearCount = await prisma.gearItem.count({
    where: {
      AND: andConditions,
    },
  });

  return {
    data: gears,
    meta: {
      page: page,
      limit: limit,
      total: totalGearCount,
      totalPages: Math.ceil(totalGearCount / limit),
    },
  };
};

const getSingleGearFromDB = async (gearId: string) => {
  const result = await prisma.gearItem.findFirstOrThrow({
    where: {
      id: gearId,
    },
    include: {
      provider: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return result;
};

export const gearService = {
  getAllGearFromDB,
  getSingleGearFromDB,
};
