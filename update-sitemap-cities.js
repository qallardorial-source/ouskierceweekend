/**
 * Script pour ajouter les pages villes au sitemap
 */

const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

// Liste des villes
const cities = [
    { id: 'index', name: 'Guide Villes', priority: '0.9' },
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
    { id: 'montpellier', name: 'Montpellier', priority: '0.85' }
];

// Lire le sitemap
let sitemap = fs.readFileSync(sitemapPath, 'utf8');

// Vérifier si les pages villes existent déjà
if (sitemap.includes('villes/paris.html')) {
    console.log('⚠️ Les pages villes sont déjà dans le sitemap. Mise à jour des dates...');

    // Mettre à jour les dates
    cities.forEach(city => {
        const urlPattern = new RegExp(
            `(<url>\\s*<loc>https://ouskierceweeekend\\.fr/villes/${city.id}\\.html</loc>\\s*<lastmod>)[^<]+(</lastmod>)`,
            'g'
        );
        sitemap = sitemap.replace(urlPattern, `$1${today}$2`);
    });
} else {
    console.log('✨ Ajout des pages villes au sitemap...');

    // Créer les entrées XML pour les villes
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
}

// Écrire le sitemap mis à jour
fs.writeFileSync(sitemapPath, sitemap, 'utf8');

console.log('✅ Sitemap mis à jour avec succès !');
console.log(`📄 ${cities.length} pages villes ajoutées/mises à jour`);
console.log(`📅 Date : ${today}`);
