import { Router } from "express";

import authRouter from "./authRouter.js";
import moduleRouter from "./moduleRouter.js";
import topicRouter from "./topicRouter.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/modules", moduleRouter);
router.use("/topic", topicRouter);

export default router;
