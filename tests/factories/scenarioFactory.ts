import { prisma } from "../../src/data/db.js";

import supertest from "supertest";
import app from "../../src/index.js";

import * as dataFactory from "./dataFactory.js";

const agent = supertest.agent(app);

export async function deleteAllData() {
  await prisma.$queryRaw`
  TRUNCATE TABLE
    users, histories,
    modules, topics,
    questions, answers
  RESTART IDENTITY CASCADE`;
}

export async function adminAccountAndReturnToken() {
    const user = dataFactory.userFactory();
    await agent.post("/auth/signup").send(user);
    
    const login = await agent.post("/auth/signin").send({
      email: user.email,
      password: user.password,
    });
    
    return login.body.token;
}

export async function treeModules() {
  const modules = dataFactory.moduleFactory(3);
  await prisma.module.createMany({ data: modules });
}

export async function treeModulesAndTreeTopics(){
  await treeModules();

  const topics = dataFactory.topicsFactory(3);
  await prisma.topic.createMany({ data: topics });
}

export async function treeModulesAndTreeTopicsAndTreeQuestions(){
  await treeModulesAndTreeTopics();

  const questions = dataFactory.questionsFactory(3);
  await prisma.question.createMany({ data: questions });
}