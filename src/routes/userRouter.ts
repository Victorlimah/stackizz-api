import { Router } from "express";

import * as controller from "../controllers/userController.js";

const userRouter = Router();

userRouter.post("/user/score", controller.updateScore);
userRouter.post("/ranking", controller.getRanking);
userRouter.get("/history", controller.getHistory);

export default userRouter;
