import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../schema';
import resolvers from '../resolvers';

const app = express();

app.get ('/', (_req, res) => {
    res.send('GraphQL is amazing! and lots of fun');

});

const root = resolvers;

app.use('/graphql', graphqlHTTP ({
    schema:  schema,
    rootValue: root,
    graphiql: true
}));

app.listen(8080, () => console.log('Running server on Port localhost:8080/graphql'));