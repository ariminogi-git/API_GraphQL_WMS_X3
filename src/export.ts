import fs from 'fs';

async function exportQueryToJson() {
  // 1. Envoyer la requête HTTP à votre serveur GraphQL
  const response = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          products {
            Code
            Desi
            PrixU
            DLV
            Etat
          }
        }
      `
    })
  });

  // 2. Récupérer les données au format JSON
  const result = await response.json();

  // 3. Écrire le résultat dans un fichier JSON
  fs.writeFileSync('export-produits.json', JSON.stringify(result.data, null, 2));
  console.log('✅ Export terminé ! Fichier export-produits.json créé.');
}

exportQueryToJson();