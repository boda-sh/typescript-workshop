# Get Started with TypeScript

Presentation materials for lunch & learn TypeScript workshop on 4th July 2019

## Prerequisites

Editor: Visual Studio Code

Install TypeScript globally through `npm`

```sh
npm i -g typescript
```

Test TypeScript version by

```sh
tsc --version
```

In examples where we need to run the TypeScript files

```sh
# first, we compile one file from TypeScript to JavaScript
tsc example.ts

# second, run the compiled files
node example.js
```

## Examples

**Hello World**

Simple Greeter function written in JavaScript and TypeScript

**Without TypeScript**

What if your project can't adopt TypeScript?

You can still do static type checking in VS Code with `JSDoc`

**Code Completions**

Another advantage of having type checking is that it's easier for your editor to
assist you with code completions

**Faster Debug**

Type errors gives us the advantage of spotting error faster

**Document API**

TypeScript also helps with documenting external code such as APIs
