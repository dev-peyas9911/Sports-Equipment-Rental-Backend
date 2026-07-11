import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await adminService.getAllUsersFromDB();

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "All users are retrived successfully",
      data: { result },
    });
  },
);

const updateUserStatus = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.id;

    const payload = req.body;

    const result = await adminService.updateUserStatusIntoDB(userId as string, payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "User status updated successfully",
      data: { result },
    });
  },
);

const getAllGear = catchAsync(async(req:Request, res:Response, next: NextFunction) => {
  const result = await adminService.getAllGearFromDB();

  sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "All Gears are retrived successfully",
      data: { result },
    });
});

const getAllRentalOrder = catchAsync(async(req:Request, res:Response, next: NextFunction) => {
  const result = await adminService.getAllRentalOrderFromDB();

  sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "All Rental orders are retrived successfully",
      data: { result },
    });
});

export const adminController = {
  getAllUsers,
  updateUserStatus,
  getAllGear,
  getAllRentalOrder
};
