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

const getOrder = catchAsync(async(req:Request,res:Response,next:NextFunction) => {
  const providerId = req.user?.id;

  const result = await providerService.getOrderFromDB(providerId as string);

  sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "All orders retrived successfully",
      data: { result },
    });
});

const updateOrderStatus = catchAsync(async(req:Request,res:Response,next:NextFunction) => {
  const providerId = req.user?.id;
  const orderId = req.params.id;
  const payload = req.body;

  const result = await providerService.updateOrderStatusIntoDB(providerId as string, orderId as string, payload);

  sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Updated order status successfully",
      data: { result },
    });
});

export const providerController = {
  createGear,
  updateGear,
  deleteGear,
  getOrder,
  updateOrderStatus
};
