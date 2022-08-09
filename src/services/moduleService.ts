import * as repository from "./../repositories/moduleRepository.js";

import { notFoundError } from "../utils/errorUtils.js";

export async function getAll() {
  const modules = await repository.getAll();
  if (!modules.length) throw notFoundError("No modules found");

  return modules;
}
