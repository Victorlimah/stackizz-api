import { Router } from "express";

import * as controller from "../controllers/topicController.js";

const topicRouter = Router();

topicRouter.get("/:id", controller.getAll);

export default topicRouter;
