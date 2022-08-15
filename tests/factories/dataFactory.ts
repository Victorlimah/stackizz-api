import { faker } from "@faker-js/faker";

import { Module } from "@prisma/client";

export function moduleFactory(quantity: number = 1): Module[] {
  const modules: Module[] = [];
  for (let i = 0; i < quantity; i++) {
    modules.push({
      id: parseInt(faker.random.alphaNumeric(10)),
      name: faker.random.words(2),
      
    });
  }
  return modules;
}
