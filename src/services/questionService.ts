import * as repository from "./../repositories/questionRepository.js";

export async function getAll(id: number) {
  return await repository.getAll(id);
}

export async function check(answerId: number) {
  const result =  await repository.check(answerId);
  return result.correct;
  
}