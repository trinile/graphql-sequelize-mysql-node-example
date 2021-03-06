import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import bodyParser from 'body-parser';

//database and schema
// import { Schema } from './data/schema';
import sequelize from './data/models/models';
import config from './data/config';

const GRAPHQL_PORT = config.PORT;

let graphQLServer;

if (graphQLServer) {
  graphQLServer.close();
}

const app = express();

app.use(bodyParser.json()) //parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'application/graphql' }));

// app.use('/graphql', graphQLHTTP({
//   graphiql: true,
//   pretty: true,
//   schema: Schema,
//   formatError: error => ({
//     message: error.message,
//   })
// }));

app.get('*', (req, res) => {
  res.json({
    message: 'graphql server at /graphql endpoint',
  });
});

graphQLServer = app.listen(GRAPHQL_PORT, err => {
  if (err) {
    return err;
  }
  console.log(`GraphQL server running on http://localhost:${GRAPHQL_PORT}/graphql`)
});
