const { GraphQLServer, PubSub } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
  useNewUrlParser: true
});

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schemas", "schema.graphql"),
  resolvers,
  context: { pubsub }
});

server.start({ debug: true });
