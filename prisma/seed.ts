import { CreateAnswer } from './../src/interfaces/createData';
import { PrismaClient } from "@prisma/client";
import {
  CreateUser,
  CreateTopic,
  CreateModule,
  CreateQuestion,
} from "../src/interfaces/createData.js";

import * as passUtils from "../src/utils/passUtils.js";

const prisma = new PrismaClient();

async function main() {
  const createUser: CreateUser = {
    name: "Role Admin",
    email: "admin@admin.com",
    password: passUtils.encryptPassword("admin123"),
  };

  const createModule: CreateModule[] = [
    {
      name: "Front-end com interfaces estáticas (HTML/CSS)",
    },
    {
      name: "Front-end com interfaces dinâmicas (JS)",
    },
    {
      name: "Single Page Applications (SPA - React)",
    },
    {
      name: "Restfull API's e Back-end com Node.js",
    },
    {
      name: "Banco de Dados não relacional (MongoDB)",
    },
    {
      name: "Banco de Dados relacional (PostgreSQL)",
    },
  ];

  const createTopicsM1: CreateTopic[] = [
    {
      name: "Estrutura - HTML",
      moduleId: 1,
    },
    {
      name: "Tags e atributos - HTML",
      moduleId: 1,
    },
    {
      name: "Seletores - CSS",
      moduleId: 1,
    },
    {
      name: "Estilos - CSS",
      moduleId: 1,
    },
    {
      name: "Flexbox - CSS",
      moduleId: 1,
    },
  ];

  const createQuestionsT1M1:  CreateQuestion[] = [
    {
      name: "Qual o nome do elemento HTML que representa um parágrafo?",
      topicId: 1,
    },
    {
      name: "Qual o nome do elemento HTML que representa um link?",
      topicId: 1,
    },
  ]

  const CreateAnswersT1M1: CreateAnswer[] = [
    {
      text: "p",
      correct: true,
      questionId: 1,
    },
    {
      text: "a",
      correct: false,
      questionId: 1,
    },
    {
      text: "div",
      correct: false,
      questionId: 1,
    },
    {
      text: "span",
      correct: false,
      questionId: 1,
    },
    {
      text: "h1",
      correct: false,
      questionId: 2,
    },
    {
      text: "link",
      correct: false,
      questionId: 2,
    },
    {
      text: "a",
      correct: true,
      questionId: 2,
    },
    {
      text: "img",
      correct: false,
      questionId: 2,
    }
  ];

  await prisma.$queryRaw`TRUNCATE TABLE users, modules, topics RESTART IDENTITY CASCADE;`;

  await prisma.user.create({ data: createUser });
  await prisma.module.createMany({ data: createModule });

  await prisma.topic.createMany({ data: createTopicsM1 });

  await prisma.question.createMany({ data: createQuestionsT1M1 });
  await prisma.answer.createMany({ data: CreateAnswersT1M1 });
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
