# create a new nextjs app
pnpm create next-app . --ts

# setup graphql server with graphql-server-micro
pnpm add graphql micro apollo-server-micro

# setup typegraphql to generate the schema

pnpm add graphql class-validator type-graphql reflect-metadata

# modify the tsconfig.json for the type-graphql

https://typegraphql.com/docs/installation.html

We must ensure that it is imported at the top of our entry file (before we use/import type-graphql or our resolvers):

import "reflect-metadata";

TypeScript configuration

It's important to set these options in the tsconfig.json file of our project:

{
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true
}

TypeGraphQL is designed to work with Node.js LTS (10.3+, 12+) and the latest stable releases. It uses features from ES2018 so we should set our tsconfig.json file appropriately:

{
  "target": "es2018" // or newer if your node.js version supports this
}

Due to using the graphql-subscription dependency that relies on an AsyncIterator, we may also have to provide the esnext.asynciterable to the lib option:

{
  "lib": ["es2018", "esnext.asynciterable"]
}

