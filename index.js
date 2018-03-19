import path from 'path';
import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';

import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

import models from './server/models';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './server/schemas')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './server/resolvers')));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const IP = process.env.IP || HOST;
const HOSTPORT = '27017';

const app = express();

app.use(cors({
  origin:["http://localhost:3000"]
}))

app.use(express.static('./client/dist/public'));

app.use('/graphql', graphqlHTTP({
  schema,
  context:{
    models
  }
}));

app.get('/',(req,res)=>{res.sendFile(path.resolve(__dirname, './client/dist/index.html'))});

mongoose.connect(`mongodb://${IP}:${HOSTPORT}/twitter-clone`,()=>console.log('Connected to MongoDB'));
app.listen(PORT, ()=>console.log(`server running on port ${PORT}...` ));
