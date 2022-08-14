import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT.js";
import * as controller from "../controllers/userController.js";

const userRouter = Router();

userRouter.use(validateJWT);
userRouter.post("/user/score", controller.updateScore);
userRouter.post("/ranking", controller.getRanking);

export default userRouter;
