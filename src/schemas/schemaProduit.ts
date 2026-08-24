// src/schemas/schemaProduit.ts
export const produitTypeDefs = `#graphql
  type Product {
    Code: Int!
    Desi: String!
    PrixU: Float!
    DLV: String!
    Etat: String!
  }

  type Query {
    products: [Product]
  }
`;