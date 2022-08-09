import * as repository from "./../repositories/questionRepository.js";

import { notFoundError } from "./../utils/errorUtils.js";

export async function getAll(id: number) {
  const questions = await repository.getAll(id);
  if (!questions.length) throw notFoundError("No questions found");

  return questions;
}

export async function check(answerId: number) {
  const result =  await repository.check(answerId);
  if (!result) throw notFoundError("No answer found");

  return { correct: result };
}
