import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentalService } from "./rental.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createRentalOrder = catchAsync(async(req:Request, res:Response, next: NextFunction) => {
    const customerId = req.user?.id;
    const payload = req.body;

    const result = await rentalService.createRentalOrderIntoDB(customerId as string, payload);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.CREATED,
      message: "Rental order created successfully",
      data: { result },
    });
});

const getRentalOrders = catchAsync(async(req:Request, res:Response, next: NextFunction) => {
    const customerId = req.user?.id;

    const result = await rentalService.getRentalOrdersFromDB(customerId as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Rental orders retrived successfully",
      data: { result },
    });
});

const getRentalOrderDetails = catchAsync(async(req:Request, res: Response, next: NextFunction) => {
  
  const customerId = req.user?.id;
  const orderId = req.params.id;

  const result = await rentalService.getRentalOrderDetailsFromDB(customerId as string, orderId as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Order details retrived successfully",
      data: { result },
    });

})

export const rentalController = {
    createRentalOrder,
    getRentalOrders,
    getRentalOrderDetails
}