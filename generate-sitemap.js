/**
 * generate-sitemap.js - Script pour générer sitemap.xml automatiquement
 * @description Génère un sitemap XML complet avec toutes les stations de ski
 * @usage node generate-sitemap.js
 * @author Où Skier Ce Weekend
 * @version 2.0
 */

const fs = require('fs');
const path = require('path');

/**
 * Charge et parse les données des stations depuis stations-data.js
 * @returns {Array} Liste des stations de ski
 */
function loadStationsData() {
    try {
        // Créer un fichier temporaire qui exporte les données pour Node.js
        const dataFile = fs.readFileSync(path.join(__dirname, 'stations-data.js'), 'utf8');

        // Ajouter l'export pour Node.js
        const tempFile = dataFile + '\nif (typeof module !== "undefined" && module.exports) { module.exports = { skiResorts, cities }; }';
        const tempPath = path.join(__dirname, '.stations-data-temp.js');

        fs.writeFileSync(tempPath, tempFile, 'utf8');

        // Charger le module temporaire
        delete require.cache[tempPath]; // Clear cache
        const data = require(tempPath);

        // Supprimer le fichier temporaire
        fs.unlinkSync(tempPath);

        if (Array.isArray(data.skiResorts) && data.skiResorts.length > 0) {
            console.log(`✅ ${data.skiResorts.length} stations chargées avec succès`);
            return data.skiResorts;
        } else {
            console.error('❌ Aucune station trouvée dans le fichier');
            return [];
        }
    } catch (error) {
        console.error('❌ Erreur de chargement des données:', error.message);
        console.error(error.stack);
        return [];
    }
}

// Chargement des données
const skiResorts = loadStationsData();

// Date actuelle pour lastmod
const today = new Date().toISOString().split('T')[0];

// Liste des pages villes
const villesDir = path.join(__dirname, 'villes');
let villesList = [];
try {
    villesList = fs.readdirSync(villesDir)
        .filter(f => f.endsWith('.html') && f !== 'index.html')
        .map(f => f.replace('.html', ''));
    console.log(`✅ ${villesList.length} pages villes trouvées`);
} catch (error) {
    console.warn('⚠️  Erreur lecture dossier villes:', error.message);
}

// En-tête XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- ========================================== -->
  <!-- PAGES PRINCIPALES -->
  <!-- ========================================== -->

  <!-- Page d'accueil -->
  <url>
    <loc>https://ouskierceweeekend.fr/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>https://ouskierceweeekend.fr/index.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Page stations (liste complète) -->
  <url>
    <loc>https://ouskierceweeekend.fr/stations.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Page comparateur -->
  <url>
    <loc>https://ouskierceweeekend.fr/compare.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Page favoris -->
  <url>
    <loc>https://ouskierceweeekend.fr/favorites.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Page à propos -->
  <url>
    <loc>https://ouskierceweeekend.fr/about.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Page mentions légales -->
  <url>
    <loc>https://ouskierceweeekend.fr/legal.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- CGU -->
  <url>
    <loc>https://ouskierceweeekend.fr/cgu.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- ========================================== -->
  <!-- PAGES VILLES (SEO Local) -->
  <!-- ========================================== -->

  <!-- Index des villes -->
  <url>
    <loc>https://ouskierceweeekend.fr/villes/index.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

`;

// Ajouter toutes les pages villes
if (villesList.length > 0) {
    villesList.forEach(ville => {
        const villeName = ville.charAt(0).toUpperCase() + ville.slice(1);
        sitemap += `  <!-- Ville: ${villeName} -->
  <url>
    <loc>https://ouskierceweeekend.fr/villes/${ville}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

`;
    });
    sitemap += `  <!-- ========================================== -->
  <!-- PAGES STATIONS (${skiResorts.length} stations) -->
  <!-- ========================================== -->

`;
}


// Ajouter toutes les pages de stations
if (skiResorts.length > 0) {
    skiResorts.forEach((resort, index) => {
        // Sanitize et encode les données pour XML
        const escapeXml = (str) => String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');

        const resortName = escapeXml(resort.name || 'Station inconnue');
        const resortId = encodeURIComponent(resort.id || '');
        const imageUrl = resort.image ? resort.image.replace('./', 'https://ouskierceweeekend.fr/') : '';
        const description = escapeXml(resort.description || `${resort.name} - ${resort.region}`);

        sitemap += `  <!-- ${resortName} -->
  <url>
    <loc>https://ouskierceweeekend.fr/station-detail.html?id=${resortId}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>`;

        // Ajouter l'image seulement si elle existe
        if (imageUrl) {
            sitemap += `
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>Station de ski ${resortName}</image:title>
      <image:caption>${description}</image:caption>
    </image:image>`;
        }

        sitemap += `
  </url>

`;
    });
} else {
    console.warn('⚠️  Aucune station trouvée dans les données');
}

// Fermeture XML
sitemap += `</urlset>`;

// Écrire le fichier avec gestion d'erreur
try {
    const sitemapPath = path.join(__dirname, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');

    // Statistiques
    const totalUrls = 8 + villesList.length + 1 + skiResorts.length; // 8 pages principales + villes + index villes + stations
    const fileSize = fs.statSync(sitemapPath).size;

    console.log('\n' + '='.repeat(60));
    console.log('✅ SITEMAP GÉNÉRÉ AVEC SUCCÈS !');
    console.log('='.repeat(60));
    console.log(`\n📄 Fichier: sitemap.xml`);
    console.log(`📏 Taille: ${(fileSize / 1024).toFixed(2)} KB`);
    console.log(`\n🔗 URLs générées:`);
    console.log(`   ├─ Pages principales: 8`);
    console.log(`   ├─ Index villes: 1`);
    console.log(`   ├─ Pages villes: ${villesList.length}`);
    console.log(`   ├─ Pages stations: ${skiResorts.length}`);
    console.log(`   └─ TOTAL: ${totalUrls} URLs`);
    console.log(`\n📊 Priorités:`);
    console.log(`   ├─ 1.0: Accueil (critique)`);
    console.log(`   ├─ 0.9: Liste stations`);
    console.log(`   ├─ 0.8: Comparateur, Index villes`);
    console.log(`   ├─ 0.7: Favoris, Pages villes`);
    console.log(`   └─ 0.6-0.3: Autres pages`);
    console.log(`\n💡 Prochaines étapes:`);
    console.log(`   1. Valider: https://www.xml-sitemaps.com/validate-xml-sitemap.html`);
    console.log(`   2. Tester: https://support.google.com/webmasters/answer/7451001`);
    console.log(`   3. Soumettre: https://search.google.com/search-console`);
    console.log(`\n` + '='.repeat(60) + '\n');
} catch (error) {
    console.error('❌ Erreur lors de l\'écriture du sitemap:', error.message);
    process.exit(1);
}
