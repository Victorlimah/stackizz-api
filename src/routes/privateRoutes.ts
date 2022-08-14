import { Router } from "express";

import userRouter from "./userRouter.js";
import topicRouter from "./topicRouter.js";
import moduleRouter from "./moduleRouter.js";
import questionRouter from "./questionRouter.js";

import { validateJWT } from "../middlewares/validateJWT.js";

const privateRoutes = Router();

privateRoutes.use(validateJWT);
privateRoutes.use(userRouter);
privateRoutes.use("/topic", topicRouter);
privateRoutes.use("/modules", moduleRouter);
privateRoutes.use("/questions", questionRouter);

export default privateRoutes;
