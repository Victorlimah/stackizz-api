import { Request, Response } from "express";

import * as service from "./../services/userService.js";

export async function updateScore(req: Request, res: Response) {
  const userId = res.locals.user.id;
  const { topicId, score } = req.body;
  const result = await service.updateScore(+userId, +score, +topicId);
  res.send(result);
}

export async function getRanking(_req: Request, res: Response) {
  const result = await service.getRanking();
  res.send(result);
}

export async function getHistory(_req: Request, res: Response) {
  const userId = res.locals.user.id;
  const result = await service.getHistory(+userId);
  res.send(result);
}

export async function seed(_req: Request, res: Response) {
  await service.seed();
  res.sendStatus(200);
}