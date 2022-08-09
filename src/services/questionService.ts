import * as repository from "./../repositories/questionRepository.js";

export async function getAll(id: number) {
  return await repository.getAll(id);
}
