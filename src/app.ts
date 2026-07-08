import express, { Application, Request, Response, urlencoded } from "express";
import cors from "cors";
import config from "./config";
import cookieParser from "cookie-parser";

const app: Application = express();

// Middlewares
app.use(
  cors({
    origin: config.app_url,
    credentials: true,
  }),
);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

// API
app.get("/", (req: Request, res: Response) => {
    res.send("This is Server");
})


export default app;
