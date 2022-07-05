import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './graphql';

const app = express();
const port = 8080;

const server = new ApolloServer({ schema });
server.applyMiddleware({ app, path: '/api' });

app.listen(port);

console.log(`[App]: http://localhost:${port}`);
