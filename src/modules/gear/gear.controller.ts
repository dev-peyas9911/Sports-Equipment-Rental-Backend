import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { gearService } from "./gear.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllGear = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await gearService.getAllGearFromDB(query);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "All gear-items are retrived successfully",
      data: result.data,
      meta: result.meta
    });
  },
);

const getSingleGear = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const gearId = req.params.id;

    const result = await gearService.getSingleGearFromDB(gearId as string);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Gear-item is retrived successfully",
      data: {result}
    });
})

export const gearController = {
  getAllGear,
  getSingleGear
};
