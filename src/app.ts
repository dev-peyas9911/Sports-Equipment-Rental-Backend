import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";
import { authRoutes } from "./modules/auth/auth.route";
import { userRoutes } from "./modules/user/user.route";
import { categoryRoutes } from "./modules/category/category.route";
import { providerRoutes } from "./modules/provider/provider.route";
import { gearRoutes } from "./modules/gear/gear.route";
import { adminRoutes } from "./modules/admin/admin.route";
import { rentalRoutes } from "./modules/rental/rental.route";
import { paymentRoutes } from "./modules/payment/payment.route";
import { paymentController } from "./modules/payment/payment.controller";
import { reviewRoutes } from "./modules/review/review.route";

const app: Application = express();

// Middlewares
app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);

// app.use("/api/payments/confirm", express.raw({ type: 'application/json' }));
// Stripe Webhook (Raw Body)
app.post(
  "/api/payments/confirm",
  express.raw({ type: "application/json" }),
  paymentController.confirmPayment,
);

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// API
app.get("/", (req: Request, res: Response) => {
  res.send("This is Server");
});

app.use("/api/auth", authRoutes);

app.use("/api/user", userRoutes);

app.use("/api/category", categoryRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/provider", providerRoutes);

app.use("/api/gear", gearRoutes);

app.use("/api/admin", adminRoutes);

app.use("/api/rentals", rentalRoutes);

app.use("/api/payments", paymentRoutes);

app.use("/api/reviews", reviewRoutes);

export default app;
