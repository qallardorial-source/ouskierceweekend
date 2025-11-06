// generate-sitemap.js - Script pour générer sitemap.xml automatiquement
// Exécuter avec : node generate-sitemap.js

const fs = require('fs');

// Import des données des stations
const skiResorts = require('./stations-data.js').skiResorts || [];

// Date actuelle
const today = new Date().toISOString().split('T')[0];

// En-tête XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  
  <!-- Page d'accueil -->
  <url>
    <loc>https://ouskierceweeekend.fr/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Page stations -->
  <url>
    <loc>https://ouskierceweeekend.fr/stations.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Page à propos -->
  <url>
    <loc>https://ouskierceweeekend.fr/about.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Page légale -->
  <url>
    <loc>https://ouskierceweeekend.fr/legal.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
`;

// Ajouter toutes les pages de stations
skiResorts.forEach(resort => {
    sitemap += `  <!-- ${resort.name} -->
  <url>
    <loc>https://ouskierceweeekend.fr/station-detail.html?id=${resort.id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${resort.image}</image:loc>
      <image:title>Station de ski ${resort.name}</image:title>
      <image:caption>${resort.description || resort.name + ' - ' + resort.region}</image:caption>
    </image:image>
  </url>
  
`;
});

// Fermeture XML
sitemap += `</urlset>`;

// Écrire le fichier
fs.writeFileSync('sitemap.xml', sitemap);
console.log('✅ Sitemap généré avec succès !');
console.log(`📊 ${skiResorts.length} stations ajoutées au sitemap`);
console.log('📁 Fichier : sitemap.xml');
