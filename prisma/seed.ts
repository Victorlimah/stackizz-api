import { CreateAnswer } from "./../src/interfaces/createData";
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

  const createQuestionsT1M1: CreateQuestion[] = [
    {
      name: "Qual o nome do elemento HTML que representa um parágrafo?",
      topicId: 1,
    },
    {
      name: "Qual o nome do elemento HTML que representa um link?",
      topicId: 1,
    },
    {
      name: "Como deve ser declarado um título da página?",
      topicId: 1,
    },
    {
      name: "Como devemos chamar um script css?",
      topicId: 1,
    },
    {
      name: "Qual a forma correta de se criar uma lista?",
      topicId: 1,
    },
    {
      name: "Qual tag abaixo pertence a um menu de navegação?",
      topicId: 1,
    },
    {
      name: "Qual atributo abaixo não pertence a tag <a>?",
      topicId: 1,
    },
    {
      name: "Qual a forma correta de se criar uma imagem?",
      topicId: 1,
    },
    {
      name: "Qual tag listada abaixo não é suportada no HTML 5?",
      topicId: 1,
    },
    {
      name: "Qual atributo devemos utilizar para inserir propriedades CSS?",
      topicId: 1,
    },
  ];

  const CreateAnswersT1M1: CreateAnswer[] = [
    // Question 1
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
    // Question 2
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
    },
    // Question 3
    {
      text: `<title title="titulo">`,
      correct: false,
      questionId: 3,
    },
    {
      text: `<html title="Título aqui"></html>>`,
      correct: false,
      questionId: 3,
    },
    {
      text: `<title>Título aqui</title>`,
      correct: true,
      questionId: 3,
    },
    {
      text: `<title src="Título aqui" />`,
      correct: false,
      questionId: 3,
    },
    // Question 4
    {
      text: `<a href="link css"></a>`,
      correct: false,
      questionId: 4,
    },
    {
      text: `<link rel="stylesheet" href="link css>`,
      correct: true,
      questionId: 4,
    },
    {
      text: `<script href="link css">`,
      correct: false,
      questionId: 4,
    },
    {
      text: `<style href="link css"/>`,
      correct: false,
      questionId: 4,
    },
    // Question 5
    {
      text: `
      <list>
        <item></item>
      </list>`,
      correct: false,
      questionId: 5,
    },
    {
      text: `
      <ul>
        <li></li>
      </ul>`,
      correct: true,
      questionId: 5,
    },
    {
      text: `
      <ol>
        <item></item>
      </ol>`,
      correct: false,
      questionId: 5,
    },
    {
      text: `
      <li>
        <item></item>
      </li>`,
      correct: false,
      questionId: 5,
    },
    // Question 6
    {
      text: "header",
      correct: false,
      questionId: 6,
    },
    {
      text: "menu",
      correct: false,
      questionId: 6,
    },
    {
      text: "nav",
      correct: true,
      questionId: 6,
    },
    {
      text: "itens",
      correct: false,
      questionId: 6,
    },
    // Question 7
    {
      text: `target=""`,
      correct: false,
      questionId: 7,
    },
    {
      text: `rel=""`,
      correct: false,
      questionId: 7,
    },
    {
      text: `href=""`,
      correct: false,
      questionId: 7,
    },
    {
      text: `src=""`,
      correct: true,
      questionId: 7,
    },
    // Question 8
    {
      text: `<img src="link imagem">`,
      correct: true,
      questionId: 8,
    },
    {
      text: `<figure src="link imagem"></figure>`,
      correct: false,
      questionId: 8,
    },
    {
      text: `<img>link imagem</img>`,
      correct: false,
      questionId: 8,
    },
    {
      text: `<image src="imagem.jpg" />`,
      correct: false,
      questionId: 8,
    },
    // Question 9
    {
      text: `<table>`,
      correct: false,
      questionId: 9,
    },
    {
      text: `<iframe>`,
      correct: false,
      questionId: 9,
    },
    {
      text: `<font>`,
      correct: false,
      questionId: 9,
    },
    {
      text: `<header>`,
      correct: false,
      questionId: 9,
    },
    // Question 10
    {
      text: `style=""`,
      correct: true,
      questionId: 10,
    },
    {
      text: `css-style=""`,
      correct: true,
      questionId: 10,
    },
    {
      text: `css=""`,
      correct: true,
      questionId: 10,
    },
    {
      text: `styled-component=""`,
      correct: true,
      questionId: 10,
    },
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
