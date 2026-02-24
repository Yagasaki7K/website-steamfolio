<p align="center">
   <img src="https://github.com/Yagasaki7K/website-steamfolio/assets/23272064/508c8d81-7cf7-44d6-8246-4297923ecee4" width="800"/>
</p>

<p align="center">
   <a href="https://www.linkedin.com/in/andersonmarlon/">
      <img alt="AndersonMarlon" src="https://img.shields.io/badge/-AndersonMarlon-1fb5f1?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Yagasaki7K/website-steamfolio?color=1fb5f1">

  <a href="https://github.com/Yagasaki7K/website-steamfolio/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Yagasaki7K/website-steamfolio?color=1fb5f1">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-1fb5f1">
  <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/Yagasaki7K/website-steamfolio?color=1fb5f1" />
  <a href="https://twitter.com/yagasaki7k">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Contact%20me%20at%20@Yagasaki7K" alt="Contact me at @Yagasaki7K" />
  </a>
</p>

<div align="center">
  <sub>Steamfolio. Built with 💙 by
    <a href="https://github.com/Yagasaki7K">Anderson "Yagasaki" Marlon</a> and
    <a href="https://github.com/Yagasaki7K/website-steamfolio/graphs/contributors">
      contributors
    </a>
  </sub>
</div>

## Language navigation

- [English](#english)
- [Português do Brasil](#portugues-do-brasil)

---

# English

## Table of contents

- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [API integrations](#api-integrations)
- [Configuration](#configuration)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Customization guide](#customization-guide)
- [Contributing](#contributing)
- [License](#license)

## Overview

Steamfolio is a personal profile landing page inspired by the Steam UI. It fetches GitHub data, displays stats and badges, and optionally consumes a blog RSS feed to show recent articles. The project is built with React, Vite, and styled-components, and is intended to be simple to fork and customize.

## Demo

- https://steamfolio.vercel.app/

## Features

- GitHub profile and repository stats.
- Visual badges and a Steam-like layout.
- Optional RSS feed integration for blog posts.
- Easily configurable profile data and assets.

## Tech stack

- React
- TypeScript
- Vite
- styled-components
- Bun (optional), npm, or Yarn for package management

## Project structure

```
src/
├── App.tsx                # Main application logic and data fetching
├── steamDetails.tsx       # Layout component for the Steam-like UI
├── utils/
│   └── getLevelByGPQ.ts   # Helper to render a badge based on commit count
└── styles/                # Global styles and component styling
```

## API integrations

### GitHub API

The app uses the GitHub REST API to read profile data, repositories, and commit totals. Requests are authenticated using a personal access token (PAT) to increase rate limits.

Endpoints in use:

- `GET https://api.github.com/users/{username}`
- `GET https://api.github.com/users/{username}/repos?sort=updated`
- `GET https://api.github.com/search/commits?q=author:{username} is:merge`

Required header:

```
Authorization: Bearer <token>
```

### RSS feed

The app fetches an RSS feed URL and parses it in the browser with `DOMParser`. The default URL in the project points to the author’s blog, and you can replace it with your own feed.

## Configuration

Create a `.env` file in the project root:

```
VITE_GITHUB_API_KEY=your_github_token
```

Notes:

- The token only needs read access.
- If you do not provide a token, the API may rate-limit you quickly, especially during development.

## Getting started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Install and run

Using npm:

```
npm install
npm run dev
```

Using Yarn:

```
yarn

yarn dev
```

Using Bun:

```
bun install
bun run dev
```

The Vite dev server will run on `http://localhost:5173` by default.

## Available scripts

- `dev`: start the Vite development server
- `preview`: preview a production build
- `lint`: run ESLint
- `vercel`: run `tsc` and `vite build`
- `clean`: remove `node_modules` and reinstall dependencies with Bun

## Customization guide

Most of the content is configured in `src/App.tsx`. Typical updates:

- `userGitHub`: GitHub username used for API calls and links.
- `subnick`, `infoSubTitle`, `badgeTitle`, `badgeEXP`: text labels shown in the UI.
- `avatarBorder`, `fixedAvatar`, `badgeIcon`, `awardIconLink`, `perfilIconLink`: image and link assets.
- `flag`, `birthday`, `sinceExperience`: used for badges and profile info.
- RSS feed URL: replace the URL inside the `fetchArticles` function to point to your blog.

When adjusting assets, verify that images are available and meet your desired size and format.

## Contributing

1. Fork the repository.
2. Create a branch for your change:
    ```
    git checkout -b feature/my-change
    ```
3. Make your updates and ensure the project builds and lint passes.
4. Commit your work with a clear message:
    ```
    git commit -m "Describe your change"
    ```
5. Push your branch and open a pull request.

When opening a pull request, include:

- A summary of what changed.
- Screenshots for visual updates.
- Any relevant testing details.

## License

MIT. See `LICENCE`.

---

# Português do Brasil

## Sumário

- [Visão geral](#visao-geral)
- [Demo](#demo-1)
- [Funcionalidades](#funcionalidades)
- [Stack tecnológica](#stack-tecnologica)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Integrações de API](#integracoes-de-api)
- [Configuração](#configuracao)
- [Como rodar](#como-rodar)
- [Scripts disponíveis](#scripts-disponiveis)
- [Guia de personalização](#guia-de-personalizacao)
- [Como contribuir](#como-contribuir)
- [Licença](#licenca)

## Visão geral

Steamfolio é uma landing page de perfil pessoal inspirada na interface da Steam. Ela busca dados do GitHub, exibe estatisticas e badges, e opcionalmente consome um feed RSS para mostrar artigos recentes. O projeto usa React, Vite e styled-components e foi pensado para ser facil de clonar e personalizar.

## Demo

- https://steamfolio.vercel.app/

## Funcionalidades

- Estatisticas de perfil e repositórios do GitHub.
- Badges visuais e layout no estilo Steam.
- Integração opcional com RSS para posts do blog.
- Dados de perfil e assets configuráveis.

## Stack tecnológica

- React
- TypeScript
- Vite
- styled-components
- Bun (opcional), npm ou Yarn para gerenciamento de pacotes

## Estrutura do projeto

```
src/
├── App.tsx                # Logica principal e chamadas de API
├── steamDetails.tsx       # Layout principal da interface
├── utils/
│   └── getLevelByGPQ.ts   # Helper para renderizar badge por commits
└── styles/                # Estilos globais e componentes
```

## Integrações de API

### GitHub API

A aplicação usa a API REST do GitHub para dados de perfil, repositórios e total de commits. As requisições sao autenticadas com um token pessoal (PAT) para aumentar o limite de requisições.

Endpoints usados:

- `GET https://api.github.com/users/{username}`
- `GET https://api.github.com/users/{username}/repos?sort=updated`
- `GET https://api.github.com/search/commits?q=author:{username} is:merge`

Header obrigatorio:

```
Authorization: Bearer <token>
```

### RSS feed

A aplicação busca uma URL de RSS e faz o parse no navegador com `DOMParser`. A URL padrão aponta para o blog do autor, mas você pode substituir pela sua propria fonte.

## Configuração

Crie um arquivo `.env` na raiz do projeto:

```
VITE_GITHUB_API_KEY=seu_github_token
```

Observacoes:

- O token precisa apenas de acesso de leitura.
- Sem token, a API pode limitar requisições rapidamente durante o desenvolvimento.

## Como rodar

### Pré-requisitos

- Node.js 18+ ou Bun
- Git

### Instalar e executar

Usando npm:

```
npm install
npm run dev
```

Usando Yarn:

```
yarn

yarn dev
```

Usando Bun:

```
bun install
bun run dev
```

O servidor do Vite roda em `http://localhost:5173` por padrão.

## Scripts disponíveis

- `dev`: inicia o servidor de desenvolvimento do Vite
- `preview`: visualiza o build de produção
- `lint`: executa o ESLint
- `vercel`: roda `tsc` e `vite build`
- `clean`: remove `node_modules` e reinstala dependências com Bun

## Guia de personalização

A maior parte do conteúdo fica em `src/App.tsx`. Mudanças comuns:

- `userGitHub`: usuário do GitHub usado nas chamadas e links.
- `subnick`, `infoSubTitle`, `badgeTitle`, `badgeEXP`: textos exibidos na interface.
- `avatarBorder`, `fixedAvatar`, `badgeIcon`, `awardIconLink`, `perfilIconLink`: imagens e links.
- `flag`, `birthday`, `sinceExperience`: usados para badges e informacoes do perfil.
- URL do RSS: altere dentro da funcao `fetchArticles` para o seu blog.

Ao trocar assets, confirme se as imagens estao acessiveis e com o tamanho adequado.

## Como contribuir

1. Faca um fork do repositório.
2. Crie uma branch para sua alteração:
    ```
    git checkout -b feature/minha-mudanca
    ```
3. Faça as alterações e garanta que o projeto compila e o lint passa.
4. Commit suas mudanças:
    ```
    git commit -m "Descreva sua alteracao"
    ```
5. Envie sua branch e abra um pull request.

Ao abrir o pull request, inclua:

- Um resumo do que mudou.
- Screenshots para mudanças visuais.
- Informações de testes relevantes.

## Licença

MIT. Veja `LICENCE`.
