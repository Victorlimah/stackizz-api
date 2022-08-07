import { Request, Response } from "express";

import * as service from "./../services/moduleService.js";

export async function getAll(_req: Request, res: Response) {
  const modules = await service.getAll();
  res.send(modules);
}
