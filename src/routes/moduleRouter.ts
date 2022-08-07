import { Router } from "express";

import * as controller from "../controllers/moduleController.js";

const moduleRouter = Router();

moduleRouter.get("/", controller.getAll);

export default moduleRouter;
