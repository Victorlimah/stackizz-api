import * as repository from "./../repositories/topicRepository.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function getAll(id: number) {
  const topic = await repository.getAll(id);
  if (!topic) throw notFoundError("No topic found");

  return topic;
}
