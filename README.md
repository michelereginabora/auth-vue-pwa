# AuthVue 

Este é um projeto Vue.js usando Vite como bundler, suporte a JSX, Vue Router para navegação, Pinia para gerenciamento de estado, e recursos de Progressive Web App (PWA). 

### Objetivo do Projeto

O projeto AuthVue tem como objetivo inicial desenvolver uma tela de login. Este é o ponto de partida que pode evoluir para um projeto mais amplo no futuro, abrangendo funcionalidades adicionais e componentes de interface para uma aplicação maior.

</br>

## Tecnologias Utilizadas

- **Vite**: Bundler rápido para projetos Vue.js.
- **JSX**: Suporte para escrever componentes Vue com JSX.
- **Vue Router**: Gerenciamento de rotas para navegação na aplicação.
- **Pinia**: Biblioteca de gerenciamento de estado para Vue.js.
- **PWA**: Recursos para transformar o aplicativo em uma Progressive Web App.

## Testes

- **Vitest**: Framework para testes unitários.
- **Playwright**: Ferramenta para automação de testes e testes end-to-end.

### Instalação das Dependências do Playwright

Antes de executar os testes com Playwright, instale suas dependências:

```bash
npx playwright install
```

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
├── public/          # Arquivos públicos (ícones, manifestos, etc.)
├── src/             # Código-fonte da aplicação Vue.js
│   ├── components/  # Componentes Vue reutilizáveis
│   ├── views/       # Componentes de visualização (páginas)
│   ├── App.vue      # Componente principal Vue
│   └── main.js      # Ponto de entrada da aplicação
├── vite.config.js   # Configuração do Vite
├── .eslintrc.js     # Configuração do ESLint
├── .prettierrc      # Configuração do Prettier
└── README.md        # Este arquivo
```

## Como Rodar o Projeto

Certifique-se de ter Node.js e npm instalados. Para rodar o projeto:

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

## Como Rodar os Testes

Para executar os testes unitários com Vitest:

```bash
npm run test:unit
```

Para executar os testes end-to-end com Playwright:

```bash
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
