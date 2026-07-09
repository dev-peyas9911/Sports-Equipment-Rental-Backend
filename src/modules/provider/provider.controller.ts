import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { providerService } from "./provider.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const providerId = req.user?.id;

    const result = await providerService.createGearIntoDB(
      providerId as string,
      payload,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Gear created successfully",
      data: { result },
    });
  },
);

const updateGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body;

    const providerId = req.user?.id;

    const gearId = req.params.id;

    const result = await providerService.updateGearIntoDB(
      providerId as string,
      gearId as string,
      payload,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Gear Updated successfully",
      data: { result },
    });
  },
);

const deleteGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {

    const providerId = req.user?.id;

    const gearId = req.params.id;

    const result = await providerService.deleteGearIntoDB(
      providerId as string,
      gearId as string,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Gear deleted successfully",
      data: { result },
    });
  },
);

export const providerController = {
  createGear,
  updateGear,
  deleteGear
};
