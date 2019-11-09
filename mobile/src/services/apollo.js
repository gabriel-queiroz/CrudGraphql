import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = new HttpLink({
  uri: 'http://10.0.1.7:4000'
});

const client = new ApolloClient({
  link: httpLink,
  onError: e => {
    console.log(e);
  },
  cache: new InMemoryCache()
});

export default client;
