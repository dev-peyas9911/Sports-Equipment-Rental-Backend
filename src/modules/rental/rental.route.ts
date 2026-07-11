import { Router } from "express";
import { rentalController } from "./rental.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.post("/", auth(Role.CUSTOMER), rentalController.createRentalOrder);

router.get("/", auth(Role.CUSTOMER), rentalController.getRentalOrders);

router.get("/:id", auth(Role.CUSTOMER), rentalController.getRentalOrderDetails);

export const rentalRoutes = router;