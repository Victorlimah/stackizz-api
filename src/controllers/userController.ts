import { Request, Response } from "express";

import * as service from "./../services/userService.js";

export async function updateScore(req: Request, res: Response) {
  const { userId, score } = req.body;
  const result = await service.updateScore(userId, score);
  res.send(result);
}