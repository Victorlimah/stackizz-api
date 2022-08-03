import { Router } from "express";

import * as schema from "./../schemas/authSchemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";

import * as controller from "../controllers/authController.js";

const authRouter = Router();

authRouter.post(
  "/signup",
  validateSchema(schema.registerSchema),
  controller.signup
);

authRouter.post(
  "/signin",
  validateSchema(schema.loginSchema),
  controller.signin
);

export default authRouter;
