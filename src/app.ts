import express, { Application } from "express";
import cors from "cors";
import config from "./config";

const app: Application = express();

app.use(cors({
    origin: config.app_url,
    credentials: true
}))

export default app;