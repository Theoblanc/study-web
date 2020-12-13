// 모듈 임포트 절대경로 설정
import path from "path";
import modulePath from "app-module-path";
modulePath.addPath(path.join(__dirname, "../"));

// 모듈 임포트
import express from "express";
import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { createConnection } from "typeorm";
import { typeDefs, resolvers, context } from "src/libraries/configApollo";
import { applyMiddleware } from "graphql-middleware";
import connectionOptions from "src/libraries/configTypeorm";
import http from "http";

const HOST = process.env.BACKEND_HOST;
const PORT = process.env.BACKEND_PORT;

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  context: async ({ req, connection }) => {
    console.log("connection", connection);
  },
  schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers })),
});

server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

createConnection(connectionOptions)
  .then((value) => {
    console.log("success", value);
  })
  .catch((error) => {
    console.log(error);
  });

httpServer.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://${HOST}:${PORT}${server.graphqlPath}`);
  console.log(
    `🚀 Subscriptions ready at ws://${HOST}:${PORT}${server.subscriptionsPath}`
  );
});
