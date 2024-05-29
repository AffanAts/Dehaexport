import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {jwtDecode} from 'jwt-decode';

const httpLink = createHttpLink({
  uri: 'https://dehaexport.hasura.app/v1/graphql'
});

const authLink = setContext((_, { headers }) => {
  let token = localStorage.getItem('token');

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        token = null;
      }
    } catch (e) {
      console.error('Error decoding token:', e);
      localStorage.removeItem('token');
      token = null;
    }
  }

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
