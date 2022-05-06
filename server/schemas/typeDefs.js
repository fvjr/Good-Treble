const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password String
  }

 type Auth {
   token: ID!
   user: User
 } 

  type Query {
    users: [User]
    user(name: String): User
  }

  type Mutation {
    addUser(name: String!,
      email: String!, password: String!): Auth
      login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;
