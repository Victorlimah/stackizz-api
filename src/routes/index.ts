import { Router } from "express";

import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import topicRouter from "./topicRouter.js";
import moduleRouter from "./moduleRouter.js";
import questionRouter from "./questionRouter.js";

const router = Router();

router.use(userRouter);
router.use("/auth", authRouter);
router.use("/topic", topicRouter);
router.use("/modules", moduleRouter);
router.use("/questions", questionRouter);

export default router;
