import { Router } from "express";
import { userController } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../../generated/prisma/enums";

const router = Router();

router.put("/update-my-profile",auth(Role.CUSTOMER, Role.PROVIDER, Role.ADMIN), userController.updateMyProfile);

export const userRoutes = router;