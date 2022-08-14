import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT.js";
import * as controller from "../controllers/moduleController.js";

const moduleRouter = Router();

moduleRouter.use(validateJWT);
moduleRouter.get("/", controller.getAll);

export default moduleRouter;
