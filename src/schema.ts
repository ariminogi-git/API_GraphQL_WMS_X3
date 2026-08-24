import { produitTypeDefs} from './schemas/schemaProduit';
import { userTypeDefs } from './schemas/schemaUser';

// GraphQL rassemble automatiquement tous les types présents dans le tableau !
export const typeDefs = [produitTypeDefs, userTypeDefs];