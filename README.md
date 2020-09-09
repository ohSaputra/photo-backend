
<!-- Dependency Status -->
<a href="https://david-dm.org/ohsaputra/photo-backend">
  <img src="https://david-dm.org/ohsaputra/photo-backend.svg" alt="Dependency Status" />
</a>
<!-- devDependency Status -->
<a href="https://david-dm.org/ohsaputra/photo-backend?type=dev">
  <img src="https://david-dm.org/ohsaputra/photo-backend/dev-status.svg" alt="devDependency Status" />
</a>

# Photo Album Assignment
This repo is a backend assignment test from investax.

A few things to note in the project:

* **[Typescript](https://github.com/microsoft/TypeScript)** - Typescript is the first citizen in this project.
* **[eslint-config-standard-with-typescript](https://github.com/microsoft/TypeScript)** - The code linting created by [Standard.js](https://github.com/standard) for TypeScript that is based on [eslint-config-standard](https://github.com/standard/eslint-config-standard) and has TypeScript specific rules from [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin).
* **[TypeORM](https://github.com/typeorm/typeorm)** - A Simplified Database Query with ORM.
* **Joi** - For declarative payload validation.
* **[Winston Logger](#logging)** - Uses winston as the logger for the application.
* **Jest** - Using Jest for running test cases.
* **[supertest](https://github.com/visionmedia/supertest)** - E2E API Testing.
* **[swagger](http://swagger.io/)** - API documentation using OpenAPI 3.0 Spec

## ❯ Getting Started

### Step 1: Set up the Development Environment

You need to set up your development environment before you can do anything.

Install [Node.js and NPM](https://nodejs.org/en/download/)

- on OSX use [homebrew](http://brew.sh) `brew install node`
- on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`

Install yarn globally

```bash
yarn global add yarn
```

### Step 2: Create new Project

Fork, Clone or download this project. Configure your package.json for your new project.

Then copy the `.env.default` file and rename it to `.env`.

Then setup your application environment.

```bash
yarn install
```

> This installs all dependencies with yarn

### Step 3: Serve your App

Go to the project dir and start your app with this yarn script.

```bash
yarn start
```

Running the above commands results in 
* **API Server** running at `http://localhost:8888`
* **Swagger UI** at `http://localhost:8888/dev/api-docs`

> This starts a local server using `nodemon`, which will watch for any file changes and will restart the server according to these changes.
> The server address will be displayed to you as `http://localhost:8888`.

### Directory Structure

```
+-- __test
|   +-- errors
|   |   |   +-- ApplicationError.test.ts
|   +-- middleware
|   |   |   +-- request-middleware.test.ts
|   +-- app.test.ts
+-- app
|   +-- controllers
|   |   +-- book
|   |   |   +-- add.ts
|   |   |   +-- all.ts
|   |   |   +-- index.ts
|   |   |   +-- search.ts
|   +-- errors
|   |   +-- index.ts
|   +-- middleware
|   |   +-- request-middleware.ts
|   +-- models
|   |   +-- Book.ts
|   +-- app.ts
|   +-- mongo-connection.ts
|   +-- routes.ts
|   +-- server.ts
+-- lib
|   +-- cors.ts
|   +-- logger.ts
|   +-- typeorm.ts
+-- scripts
|   +-- dev.sh
+-- .env
+-- .env.default
+-- .eslintignore
+-- .eslintrc.json
+-- .gitignore
+-- docker-compose.yml
+-- Dockerfile
+-- jest.config.js
+-- nodemon.json
+-- openapi.json
+-- yarn.lock
+-- package.json
+-- README.md
+-- tsconfig.json
```

### Install

- Install all dependencies with `yarn install`

### Linting

- Run code quality analysis using `yarn lint`. This runs tslint.
- There is also a vscode task for this called `lint`.

### Tests

- Run the unit tests using `yarn test` (There is also a vscode task for this called `test`).

### Coverage

------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |   78.81 |    61.54 |      66 |   78.74 |
 app                    |   14.29 |       75 |       0 |   14.29 |
  env.ts                |     100 |       75 |     100 |     100 | 12-18
  server.ts             |       0 |      100 |       0 |       0 | 2-26
 app/controllers/photos |      85 |       50 |   76.92 |    86.3 |
  add.ts                |   41.18 |        0 |       0 |   43.75 | 12-33
  index.ts              |     100 |      100 |     100 |     100 |
  list.ts               |     100 |      100 |     100 |     100 |
  remove.ts             |     100 |      100 |     100 |     100 |
  removeMany.ts         |     100 |      100 |     100 |     100 |
  show.ts               |   86.67 |       75 |   66.67 |   92.31 | 18
 app/errors             |   82.35 |    43.75 |   66.67 |   82.35 |
  application-error.ts  |     100 |      100 |     100 |     100 |
  bad-request.ts        |     100 |       75 |     100 |     100 | 5
  handler.ts            |      50 |        0 |       0 |      50 | 6-10
 app/middlewares        |   60.98 |    66.67 |   63.64 |   59.46 |
  request.ts            |   89.47 |       80 |     100 |   88.89 | 11,42
  string.ts             |     100 |      100 |     100 |     100 |
  upload.ts             |   22.22 |        0 |       0 |   23.53 | 9-13,18-35
 app/models             |     100 |      100 |     100 |     100 |
  photos.entity.ts      |     100 |      100 |     100 |     100 |
 app/services           |   87.18 |       75 |   90.91 |   87.18 |
  database-service.ts   |   77.78 |      100 |      75 |   77.78 | 25-28
  photo-service.ts      |   95.24 |       75 |     100 |   95.24 | 77
 app/start              |   92.11 |       50 |      75 |   91.89 |
  index.ts              |   94.12 |       50 |     100 |   94.12 | 22
  populateData.ts       |   86.67 |       50 |      75 |   85.71 | 23,33
  routes.ts             |     100 |      100 |     100 |     100 |
 app/start/route        |     100 |      100 |     100 |     100 |
  health.ts             |     100 |      100 |     100 |     100 |
  photo.ts              |     100 |      100 |     100 |     100 |
  swagger.ts            |     100 |      100 |     100 |     100 |
------------------------|---------|----------|---------|---------|-------------------