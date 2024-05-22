// server.js

const { ApolloServer, gql } = require('apollo-server');

// Definisi skema GraphQL
const typeDefs = gql`
  type Query {
    hello: String
    user(id: ID!): User
  }

  type User {
    id: ID!
    username: String!
    email: String!
  }
`;

// Data pengguna simulasi
const users = [
  { id: '1', username: 'user1', email: 'user1@example.com' },
  { id: '2', username: 'user2', email: 'user2@example.com' },
];

// Resolver untuk setiap field dalam skema
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    user: (_, { id }) => users.find(user => user.id === id),
  },
};

// Buat server GraphQL
const server = new ApolloServer({ typeDefs, resolvers });

// Jalankan server
server.listen().then(({ url }) => {
  console.log(`Server GraphQL berjalan di ${url}`);
});
