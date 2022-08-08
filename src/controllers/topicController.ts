import { Request, Response } from "express";

import * as service from "./../services/topicService.js";

export async function getAll(req: Request, res: Response) {
  const id = req.params.id;
  const topics = await service.getAll(+id);
  res.send(topics);
}
