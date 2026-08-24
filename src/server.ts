import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.ts";       // 👈 Import du schéma
import { resolvers } from "./resolvers";   // 👈 Import des résolveurs

const server = new ApolloServer({
  typeDefs,
  resolvers
});

async function start() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });
  console.log(`🚀 Serveur prêt sur : ${url}`);
}

start();