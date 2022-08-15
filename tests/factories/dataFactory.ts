import { faker } from "@faker-js/faker";

import { Module } from "@prisma/client";
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
  for (let id = 0; id < quantity; id++) {
    modules.push({
      id,
      name: faker.random.words(2),
      
    });
  }
  return modules;
}
