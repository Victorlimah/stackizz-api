import { Request, Response } from "express";

import * as service from "./../services/questionService.js";

export async function getAll(req: Request, res: Response) {
  const id = req.params.id;
  const questions = await service.getAll(+id);
  res.send(questions);
}

export async function check(req: Request, res: Response) {
  const id = req.params.id;
  const result = await service.check(+id);
  res.send({ correct: result });
}