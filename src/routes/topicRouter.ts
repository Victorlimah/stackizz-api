import { Router } from "express";

import { validateJWT } from "../middlewares/validateJWT.js";
import * as controller from "../controllers/topicController.js";

const topicRouter = Router();

topicRouter.use(validateJWT);
topicRouter.get("/:id", controller.getAll);

export default topicRouter;
