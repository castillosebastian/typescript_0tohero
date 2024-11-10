# Setting Up the Project with Node Debugger Using ts-node

This guide summarizes how to set up your TypeScript project to run and debug code using the Node.js debugger with **ts-node**. This setup allows you to execute and debug TypeScript files directly without precompiling them to JavaScript.

---

## Table of Contents

- [Setting Up the Project with Node Debugger Using ts-node](#setting-up-the-project-with-node-debugger-using-ts-node)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Project Initialization](#project-initialization)
  - [Install Dependencies](#install-dependencies)
  - [Configure TypeScript](#configure-typescript)
  - [Create Source Directory](#create-source-directory)
  - [Write TypeScript Code](#write-typescript-code)
  - [Set Up Debugging in Visual Studio Code](#set-up-debugging-in-visual-studio-code)
  - [Running and Debugging the Code](#running-and-debugging-the-code)
  - [Additional Scripts in package.json](#additional-scripts-in-packagejson)
  - [Example: Sum of Two Numbers](#example-sum-of-two-numbers)
  - [Conclusion](#conclusion)

---

## Prerequisites

- **Node.js** installed (version 12.x or higher recommended)
- **npm** (comes with Node.js)
- **Visual Studio Code** installed
- Basic knowledge of TypeScript and command-line operations

---

## Project Initialization

1. **Create a New Project Directory**

   ```bash
   mkdir my-typescript-project
   cd my-typescript-project
   ```

2. **Initialize npm**

   ```bash
   npm init -y
   ```

---

## Install Dependencies

Install TypeScript and ts-node as development dependencies:

```bash
npm install --save-dev typescript ts-node
```

---

## Configure TypeScript

Initialize the TypeScript configuration file:

```bash
npx tsc --init
```

Update `tsconfig.json` with the following settings:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

---

## Create Source Directory

Create a `src` directory to hold your TypeScript source files:

```bash
mkdir src
```

---

## Write TypeScript Code

Create a sample TypeScript file `src/index.ts`:

```typescript
// src/index.ts
function sayHello(name: string): void {
  console.log(`Hello, ${name}!`);
}

sayHello('World');
```

---

## Set Up Debugging in Visual Studio Code

1. **Open the Project in VS Code**

   ```bash
   code .
   ```

2. **Create a Debug Configuration**

   - Open the **Run and Debug** view (`Ctrl+Shift+D` or `Cmd+Shift+D`).
   - Click on **"create a launch.json file"**.
   - Select **"Node.js"** as the environment.

3. **Update `launch.json`**

   Replace the contents of `.vscode/launch.json` with:

   ```json
   {
     "version": "0.2.0",
     "configurations": [
       {
         "type": "node",
         "request": "launch",
         "name": "Debug with ts-node",
         "runtimeArgs": ["-r", "ts-node/register"],
         "args": ["${workspaceFolder}/src/index.ts"],
         "cwd": "${workspaceFolder}",
         "protocol": "inspector",
         "sourceMaps": true,
         "skipFiles": ["<node_internals>/**"]
       }
     ]
   }
   ```

   **Explanation:**

   - **`runtimeArgs`**: Loads `ts-node/register` to enable TypeScript execution.
   - **`args`**: Specifies the entry point of your application.
   - **`skipFiles`**: Skips Node.js internal files during debugging.

---

## Running and Debugging the Code

1. **Set Breakpoints**

   - Open `src/index.ts`.
   - Click in the gutter next to the line numbers to set breakpoints.

2. **Start Debugging**

   - In the **Run and Debug** view, select **"Debug with ts-node"**.
   - Press **F5** or click the green **Start Debugging** button.

3. **Debugging Controls**

   - **Continue (F5)**: Resume program execution.
   - **Step Over (F10)**: Move to the next line of code.
   - **Step Into (F11)**: Enter into a function call.
   - **Step Out (Shift+F11)**: Exit the current function.

4. **Inspect Variables**

   - Use the **Variables** pane to inspect current variables.
   - Hover over variables in the editor to see their values.

---

## Additional Scripts in package.json

Add convenient scripts to your `package.json`:

```json
{
  "scripts": {
    "start": "ts-node src/index.ts",
    "debug": "node --inspect -r ts-node/register src/index.ts"
  }
}
```

- **`npm start`**: Runs the application.
- **`npm run debug`**: Starts the application with the Node.js debugger attached.

---

## Example: Sum of Two Numbers

Create a new file `src/sum.ts`:

```typescript
// src/sum.ts
function sum(a: number, b: number): number {
  return a + b;
}

const num1 = 10;
const num2 = 15;
const result = sum(num1, num2);

console.log(`The sum of ${num1} and ${num2} is ${result}.`);
```

**Update `launch.json` to debug `sum.ts`:**

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Sum Script",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${workspaceFolder}/src/sum.ts"],
      "cwd": "${workspaceFolder}",
      "protocol": "inspector",
      "sourceMaps": true,
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

**Run and Debug:**

- **Run**: `npx ts-node src/sum.ts` or `npm start` (after adjusting the script).
- **Debug**: Select **"Debug Sum Script"** in VS Code and press **F5**.

---

## Conclusion

By following these steps, you've set up your TypeScript project to run and debug code efficiently using **ts-node** and the Node.js debugger in Visual Studio Code. This setup streamlines development by eliminating the need for manual compilation and allowing you to work directly with TypeScript code.


