import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import './styles/index.scss'

const client = new ApolloClient({
  link: new HttpLink({uri:'http://localhost:3000/graphql'}),
  cache: new InMemoryCache(),
  credentials: 'same-origin', 
  reduxRootKey: 'apollo'
})

const App = ()=>(
  <ApolloProvider client={client}>
    <Routes/>
  </ApolloProvider>
)

ReactDOM.render(<App/>,document.getElementById('app'));
