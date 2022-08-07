import * as repository from "./../repositories/moduleRepository.js";

export async function getAll() {
  return await repository.getAll();
}
