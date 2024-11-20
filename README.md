# Project Setup For Typescript, Express, Mongoose and Node

1. npm init -y
2. npm i express dotenv cors  
3. npm install mongoose --save
4. `npm i -D typescript @types/express @types/node` `@types/cors`
5. `npm i ts-node-dev --save-dev`
6. tsc -init
7. create “src” folder, then create two files, app.ts and server.ts
8. edit package.json and add "build": "tsc", in scripts

```
src
 -app
  -config
    -index.ts
app.ts
server.ts
```

app.ts file (not final version)

```tsx
import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

console.log(process.cwd());
```

server.ts file (not final version)

```tsx
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
```

We need to write `process.env.PORT` and `process.env.DATABASE_URL` in the code. To avoid repeating this, we can add the necessary configurations inside the `config` file in `index.ts`.

```tsx
import dotenv from "dotenv";
import path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
};
```

Now we can write the server.ts like this (final version)

```tsx
import app from "./app";
import config from "./app/config";
import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

```

Now we can write the app.ts like this (final version)

```tsx
import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

```

### Our basic setup has done. Now we will configure Eslint and Prettier

add 2 lines into the tsconfig.ts

```
{
  "include": ["src"], // which files to compile
  "exclude": ["node_modules"], // which files to skip,
  "compilerOptions": {...}
}
```

**First, install the following dependencies to your `devDependencies`:**

**`npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev`**

**Let’s create a configuration file using the CLI. Run the following command in the terminal:**
**`npx eslint --init`**

**Then follow this link**

[https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg](https://dev.to/shafayat/-express-typescript-eslint-prettiersetup-5fhg)

We can also add scripts for eslint in the **package.json** file.

```
"scripts": {
    "lint": "eslint src/**/*.ts",
    "lint:fix": "eslint src/**/*.ts --fix"
  },
```

 **Add Prettier to our project**
**`npm install --save-dev prettier`**

**you will need to create a file called `.prettierrc.json`**

```
// .prettierrc.json
{
  "semi": false, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes
  "arrowParens": "avoid", // Include parenthesis around a sole arrow function parameter
}
```

**The best solution here is to use the [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) plugin to disable all ESLint rules that are irrelevant to code formatting, as Prettier is already good at it:**
**`npm install --save-dev eslint-config-prettier`**

### Final stage:

Install ts-node-dev (we have done it at the first step)

**Now add two lines into the package.json script options:**

```json

    "start:prod": "node ./dist/server.js",
    "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
```

## Done
