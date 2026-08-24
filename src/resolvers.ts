import { resolversUser } from './resolvers/resolversUser'; // Ou le chemin vers votre fichier Utilisateur
import { resolversProduit } from './resolvers/resolversProduit'; // Ou le chemin vers votre fichier Produit

export const resolvers = {
  Query: {
    ...resolversUser.Query,
    ...resolversProduit.Query
  }
};