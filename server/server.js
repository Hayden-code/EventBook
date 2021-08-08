const express = require("express");
const path = require("path");
const { ApolloServer } = require("apollo-server-express");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
// const authMiddleWare = require("./utils/auth");

const PORT = process.env.PORT || 3000;

// context: authMiddleWare,

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  const app = express();
  server.applyMiddleware({
    app,
    path: "/",
  });
  await new Promise((resolve) => app.listen({ port: PORT }, resolve));
  console.log(`API server running on port ${PORT}!`);
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

db.once("open", () => {
  startApolloServer(typeDefs, resolvers);
});
