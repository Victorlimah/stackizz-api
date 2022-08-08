import * as repository from "./../repositories/topicRepository.js";

export async function getAll(id: number) {
  return await repository.getAll(id);
}
