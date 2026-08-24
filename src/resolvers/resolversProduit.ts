import path from 'path';
import * as XLSX from 'xlsx';

// 1. Charger le fichier Excel 📖
const excelFilePath = path.join(process.cwd(), 'produits.xlsx');
const workbook = XLSX.readFile(excelFilePath);

// 2. Sélectionner la première feuille de calcul 📄
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 3. Convertir la feuille en tableau d'objets JavaScript 🔄
const rawData: any[] = XLSX.utils.sheet_to_json(worksheet);

// 4. Formater les données pour correspondre aux types du schéma GraphQL
export const products = rawData.map((row) => ({
  Code: parseInt(row.Code, 10),
  Desi: String(row.Desi),
  PrixU: parseFloat(row.PrixU),
  DLV: String(row.DLV),
  Etat: String(row.Etat!)
}));

export const resolversProduit = {
  Query: {
    products: () => products
  }
};