import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://dehaexport.hasura.app/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      headers: {
        ...headers,
        'Authorization': `Bearer ${token}`,
      }
    };
  } else {
    return {
      headers: {
        ...headers,
        'x-hasura-role': 'anonymous',
      }
    };
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
