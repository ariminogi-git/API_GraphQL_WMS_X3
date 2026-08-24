export const userTypeDefs = `#graphql
  type User {
    id: ID!
    nom: String!
    email: String!
  }

  type Query {
    users: [User]
  }
`;