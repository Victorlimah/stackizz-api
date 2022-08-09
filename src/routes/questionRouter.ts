import { Router } from "express";

import * as controller from "../controllers/questionController.js";

const questionRouter = Router();

questionRouter.get("/:id", controller.getAll);
questionRouter.post("/check/:id", controller.check);

export default questionRouter;
