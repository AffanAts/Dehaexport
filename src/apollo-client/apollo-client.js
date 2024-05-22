import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://dehaexport.hasura.app/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = 'Q2dkJ401j1PmbjPcqedy4uwc2hgwzTMaUZ4zgWJqbUfvwcnzWaswS4rISFy50T68';
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': token
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
