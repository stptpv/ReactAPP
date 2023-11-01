// apollo.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:8000/auth/login', // Замените на ваш GraphQL-сервер
  cache: new InMemoryCache(),
});


