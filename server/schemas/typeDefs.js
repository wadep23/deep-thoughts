// import graphql tagged template function
const { gql } = require("apollo-server-express");

// create typedefs
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

module.exports = typeDefs;
