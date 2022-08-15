import { faker } from "@faker-js/faker";

import { Module, Topic, Question } from "@prisma/client";
import { CreateUser } from "../../src/interfaces/createData.js";

export function userFactory(): CreateUser{
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

export function moduleFactory(quantity: number = 1): Module[] {
  const modules: Module[] = [];
  for (let id = 1; id <= quantity; id++) {
    modules.push({
      id,
      name: faker.random.words(2),
      
    });
  }
  return modules;
}

export function topicsFactory(quantity: number = 1): Topic[] {
  const topics: Topic[] = [];
  for (let id = 1; id <= quantity; id++) {
    topics.push({
      id,
      name: faker.random.words(2),
      moduleId: 1,
    });
  }
  return topics;
}

export function questionsFactory(quantity: number = 1): Question[] {
  const questions: Question[] = [];
  for (let id = 1; id <= quantity; id++) {
    questions.push({
      id,
      name: faker.random.words(2),
      topicId: 1,
    });
  }
  return questions;
}
