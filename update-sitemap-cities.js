/**
 * Script pour ajouter les pages villes au sitemap
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

// Liste des villes - VAGUES 1, 2 et 3
const cities = [
    { id: 'index', name: 'Guide Villes', priority: '0.9' },
    // Vague 1 - Grandes villes
    { id: 'paris', name: 'Paris', priority: '0.95' },
    { id: 'lyon', name: 'Lyon', priority: '0.95' },
    { id: 'marseille', name: 'Marseille', priority: '0.9' },
    { id: 'toulouse', name: 'Toulouse', priority: '0.9' },
    { id: 'grenoble', name: 'Grenoble', priority: '0.9' },
    { id: 'bordeaux', name: 'Bordeaux', priority: '0.85' },
    { id: 'lille', name: 'Lille', priority: '0.85' },
    { id: 'nantes', name: 'Nantes', priority: '0.85' },
    { id: 'strasbourg', name: 'Strasbourg', priority: '0.85' },
    { id: 'nice', name: 'Nice', priority: '0.85' },
    { id: 'montpellier', name: 'Montpellier', priority: '0.85' },
    // Vague 2 - Villes moyennes tier 2
    { id: 'annecy', name: 'Annecy', priority: '0.85' },
    { id: 'chambery', name: 'Chambéry', priority: '0.85' },
    { id: 'clermont-ferrand', name: 'Clermont-Ferrand', priority: '0.8' },
    { id: 'dijon', name: 'Dijon', priority: '0.8' },
    { id: 'reims', name: 'Reims', priority: '0.8' },
    { id: 'saint-etienne', name: 'Saint-Étienne', priority: '0.8' },
    { id: 'toulon', name: 'Toulon', priority: '0.8' },
    { id: 'rennes', name: 'Rennes', priority: '0.8' },
    { id: 'perpignan', name: 'Perpignan', priority: '0.8' },
    { id: 'aix-en-provence', name: 'Aix-en-Provence', priority: '0.75' },
    { id: 'valence', name: 'Valence', priority: '0.75' },
    { id: 'metz', name: 'Metz', priority: '0.75' },
    { id: 'nancy', name: 'Nancy', priority: '0.75' },
    { id: 'pau', name: 'Pau', priority: '0.75' },
    { id: 'besancon', name: 'Besançon', priority: '0.75' },
    { id: 'mulhouse', name: 'Mulhouse', priority: '0.75' },
    { id: 'avignon', name: 'Avignon', priority: '0.75' },
    { id: 'brest', name: 'Brest', priority: '0.7' },
    { id: 'le-havre', name: 'Le Havre', priority: '0.7' },
    // Vague 3 - Villes spécifiques
    { id: 'geneve', name: 'Genève', priority: '0.85' },
    { id: 'albertville', name: 'Albertville', priority: '0.8' },
    { id: 'gap', name: 'Gap', priority: '0.8' },
    { id: 'briancon', name: 'Briançon', priority: '0.8' },
    { id: 'grenoble-2', name: 'Voiron', priority: '0.7' }
];

// Lire le sitemap
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

console.log('🔄 Régénération complète des pages villes dans le sitemap...');

// Supprimer toutes les entrées villes existantes
const villesPattern = /\n  <!-- Pages Villes \(SEO\) -->[\s\S]*?(?=\n  <!-- Chamonix Mont-Blanc -->)/;
sitemap = sitemap.replace(villesPattern, '');

// Créer les entrées XML pour TOUTES les villes
let citiesXML = '\n  <!-- Pages Villes (SEO) -->\n';

cities.forEach(city => {
    const fileName = city.id === 'index' ? '' : `${city.id}.html`;
    const url = city.id === 'index' ? 'villes/' : `villes/${fileName}`;

    citiesXML += `  <url>
    <loc>https://ouskierceweeekend.fr/${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${city.priority}</priority>
  </url>\n\n`;
});

// Insérer après les CGU (avant les stations)
const cguEndPattern = /<\/url>\n\n  <!-- Chamonix Mont-Blanc -->/;
sitemap = sitemap.replace(cguEndPattern, `</url>\n${citiesXML}  <!-- Chamonix Mont-Blanc -->`);

// Écrire le sitemap mis à jour
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('✅ Sitemap mis à jour avec succès !');
console.log(`📄 ${cities.length} pages villes ajoutées/mises à jour`);
console.log(`📅 Date : ${today}`);
