import express, { Router } from "express";
import { paymentController } from "./payment.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post("/create", auth(Role.CUSTOMER), paymentController.createPayment);

// router.post(
//   "/confirm",
//   express.raw({
//     type: "application/json",
//   }),
//   paymentController.confirmPayment,
// );

router.get("/", auth(Role.CUSTOMER), paymentController.getPayments);

router.get("/:id", auth(Role.CUSTOMER), paymentController.getSinglePayment);

export const paymentRoutes = router;
