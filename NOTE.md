# create a new nextjs app
pnpm create next-app . --ts

# setup graphql server with graphql-server-micro
pnpm add graphql micro apollo-server-micro

# setup typegraphql to generate the schema

pnpm add graphql class-validator type-graphql reflect-metadata

# add packages for graphql code generator
pnpm add @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request @graphql-codegen/typescript-react-query -D

pnpm add graphql-request@"^3.4.0 graphql-tag@^2.0.0 -D

# add packages for graphql request
pnpm add react-query graphql-request 

# add Mantine fully featured react components
pnpm add @mantine/core @mantine/next @mantine/form @mantine/hooks

# add icon library

pnpm add tabler-icons-react 
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

# create a graphql configuration file 
touch .graphqlrc.json

# create a layout and wrap the component inside it in the _app.tsx file