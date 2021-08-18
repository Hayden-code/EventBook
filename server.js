const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
const authMiddleWare = require("./utils/auth");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,

    context: authMiddleWare,
  });

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   context: authMiddleWare,
  // });
  await server.start();
  const app = express();
  app.use(
    express.urlencoded({
      extended: false,
    })
  );
  app.use(express.json());
  server.applyMiddleware({
    app,
    path: "/graphql",
  });
  // ... other app.use middleware
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
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
