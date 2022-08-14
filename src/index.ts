import express, { json } from "express";
import "express-async-errors";

import cors from "cors";
import dotenv from "dotenv";

import publicRoutes from "./routes/publicRoutes.js";
import privateRoutes from "./routes/privateRoutes.js";

import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();
dotenv.config();

app.use(json());
app.use(cors());

app.use(publicRoutes);
app.use(privateRoutes);

app.use(errorHandler);

export default app;