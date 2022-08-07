import { Router } from "express";

import authRouter from "./authRouter.js";
import moduleRouter from "./moduleRouter.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/modules", moduleRouter);

export default router;
