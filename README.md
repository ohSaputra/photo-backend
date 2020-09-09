
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

<div class='wrapper'>
    <div class='pad1'>
        <h1>All files</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">78.81% </span>
                <span class="quiet">Statements</span>
                <span class='fraction'>212/269</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">61.54% </span>
                <span class="quiet">Branches</span>
                <span class='fraction'>48/78</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">66% </span>
                <span class="quiet">Functions</span>
                <span class='fraction'>33/50</span>
            </div>
        
            
            <div class='fl pad1y space-right2'>
                <span class="strong">78.74% </span>
                <span class="quiet">Lines</span>
                <span class='fraction'>200/254</span>
            </div>
        
            
        </div>
        <p class="quiet">
            Press <em>n</em> or <em>j</em> to go to the next uncovered block, <em>b</em>, <em>p</em> or <em>k</em> for the previous block.
        </p>
    </div>
    <div class='status-line medium'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="pic" data-type="number" data-fmt="html" data-html="true" class="pic"></th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="branches" data-type="number" data-fmt="pct" class="pct">Branches</th>
   <th data-col="branches_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file low" data-value="app"><a href="app/index.html">app</a></td>
	<td data-value="14.29" class="pic low">
	<div class="chart"><div class="cover-fill" style="width: 14%"></div><div class="cover-empty" style="width: 86%"></div></div>
	</td>
	<td data-value="14.29" class="pct low">14.29%</td>
	<td data-value="21" class="abs low">3/21</td>
	<td data-value="75" class="pct medium">75%</td>
	<td data-value="12" class="abs medium">9/12</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="7" class="abs low">0/7</td>
	<td data-value="14.29" class="pct low">14.29%</td>
	<td data-value="21" class="abs low">3/21</td>
	</tr>

<tr>
	<td class="file high" data-value="app/controllers/photos"><a href="app/controllers/photos/index.html">app/controllers/photos</a></td>
	<td data-value="85" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 85%"></div><div class="cover-empty" style="width: 15%"></div></div>
	</td>
	<td data-value="85" class="pct high">85%</td>
	<td data-value="80" class="abs high">68/80</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="6" class="abs medium">3/6</td>
	<td data-value="76.92" class="pct medium">76.92%</td>
	<td data-value="13" class="abs medium">10/13</td>
	<td data-value="86.3" class="pct high">86.3%</td>
	<td data-value="73" class="abs high">63/73</td>
	</tr>

<tr>
	<td class="file high" data-value="app/errors"><a href="app/errors/index.html">app/errors</a></td>
	<td data-value="82.35" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 82%"></div><div class="cover-empty" style="width: 18%"></div></div>
	</td>
	<td data-value="82.35" class="pct high">82.35%</td>
	<td data-value="17" class="abs high">14/17</td>
	<td data-value="43.75" class="pct low">43.75%</td>
	<td data-value="16" class="abs low">7/16</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="3" class="abs medium">2/3</td>
	<td data-value="82.35" class="pct high">82.35%</td>
	<td data-value="17" class="abs high">14/17</td>
	</tr>

<tr>
	<td class="file medium" data-value="app/middlewares"><a href="app/middlewares/index.html">app/middlewares</a></td>
	<td data-value="60.98" class="pic medium">
	<div class="chart"><div class="cover-fill" style="width: 60%"></div><div class="cover-empty" style="width: 40%"></div></div>
	</td>
	<td data-value="60.98" class="pct medium">60.98%</td>
	<td data-value="41" class="abs medium">25/41</td>
	<td data-value="66.67" class="pct medium">66.67%</td>
	<td data-value="36" class="abs medium">24/36</td>
	<td data-value="63.64" class="pct medium">63.64%</td>
	<td data-value="11" class="abs medium">7/11</td>
	<td data-value="59.46" class="pct medium">59.46%</td>
	<td data-value="37" class="abs medium">22/37</td>
	</tr>

<tr>
	<td class="file high" data-value="app/models"><a href="app/models/index.html">app/models</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="10" class="abs high">10/10</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="8" class="abs high">8/8</td>
	</tr>

<tr>
	<td class="file high" data-value="app/services"><a href="app/services/index.html">app/services</a></td>
	<td data-value="87.18" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 87%"></div><div class="cover-empty" style="width: 13%"></div></div>
	</td>
	<td data-value="87.18" class="pct high">87.18%</td>
	<td data-value="39" class="abs high">34/39</td>
	<td data-value="75" class="pct medium">75%</td>
	<td data-value="4" class="abs medium">3/4</td>
	<td data-value="90.91" class="pct high">90.91%</td>
	<td data-value="11" class="abs high">10/11</td>
	<td data-value="87.18" class="pct high">87.18%</td>
	<td data-value="39" class="abs high">34/39</td>
	</tr>

<tr>
	<td class="file high" data-value="app/start"><a href="app/start/index.html">app/start</a></td>
	<td data-value="92.11" class="pic high">
	<div class="chart"><div class="cover-fill" style="width: 92%"></div><div class="cover-empty" style="width: 8%"></div></div>
	</td>
	<td data-value="92.11" class="pct high">92.11%</td>
	<td data-value="38" class="abs high">35/38</td>
	<td data-value="50" class="pct medium">50%</td>
	<td data-value="4" class="abs medium">2/4</td>
	<td data-value="75" class="pct medium">75%</td>
	<td data-value="4" class="abs medium">3/4</td>
	<td data-value="91.89" class="pct high">91.89%</td>
	<td data-value="37" class="abs high">34/37</td>
	</tr>

<tr>
	<td class="file high" data-value="app/start/route"><a href="app/start/route/index.html">app/start/route</a></td>
	<td data-value="100" class="pic high">
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="23" class="abs high">23/23</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="1" class="abs high">1/1</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="22" class="abs high">22/22</td>
	</tr>

</tbody>
</table>
</div>