import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT.js";
import * as controller from "../controllers/questionController.js";

const questionRouter = Router();

questionRouter.use(validateJWT);
questionRouter.get("/:id", controller.getAll);
questionRouter.post("/check/:id", controller.check);

export default questionRouter;
