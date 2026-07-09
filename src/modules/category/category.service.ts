import { prisma } from "../../lib/prisma";
import { ICategoryPayload } from "./category.interface";
import httpStatus from "http-status";

const createCategoryIntoDB = async (payload: ICategoryPayload) => {
  const { name, description, image } = payload;

  const isExist = await prisma.category.findUnique({
    where: {
      name,
    },
  });

  if (isExist) {
    throw new Error("Category already exists.");
  }

  const createCategory = await prisma.category.create({
    data: {
      name,
      description,
      image,
    },
  });

  const category = await prisma.category.findUnique({
    where: {
      id: createCategory.id,
    },
  });

  return category;
};

const getAllCategoriesFromDB = async () => {
  const result = await prisma.category.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return result;
};

export const categoryService = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
};
