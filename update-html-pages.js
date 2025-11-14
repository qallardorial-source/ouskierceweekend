/**
 * Script pour mettre à jour toutes les pages HTML avec :
 * - design-tokens.css
 * - navigation.js
 * - Attributs ARIA améliorés
 * - Nettoyage Google Analytics non configuré
 */

const fs = require('fs');
const path = require('path');

// Liste des fichiers HTML à mettre à jour
const htmlFiles = [
    'index.html',
    'stations.html',
    'compare.html',
    'favorites.html',
    'about.html',
    'station-detail.html',
    'legal.html'
];

// Fonction pour mettre à jour un fichier HTML
function updateHTMLFile(filePath) {
    console.log(`\n🔄 Mise à jour de ${filePath}...`);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  Fichier non trouvé : ${filePath}`);
        return;
    }

    let html = fs.readFileSync(filePath, 'utf8');
    let changes = [];

    // 1. Ajouter design-tokens.css après styles.css
    if (!html.includes('design-tokens.css')) {
        html = html.replace(
            /<link rel="stylesheet" href="styles\.css">/,
            `<link rel="stylesheet" href="design-tokens.css">\n    <link rel="stylesheet" href="styles.css">`
        );
        changes.push('✅ design-tokens.css ajouté');
    }

    // 2. Supprimer Google Analytics non configuré
    if (html.includes('G-XXXXXXXXXX')) {
        html = html.replace(/<!-- Google Analytics.*?<\/script>/gs, '');
        html = html.replace(/\n\s*<script async src="https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-XXXXXXXXXX"><\/script>\s*\n\s*<script>[\s\S]*?gtag\('config', 'G-XXXXXXXXXX'\);[\s\S]*?<\/script>/g, '');
        changes.push('🗑️  Google Analytics non configuré supprimé');
    }

    // 3. Ajouter navigation.js avant la fermeture </body>
    if (!html.includes('navigation.js') && html.includes('</body>')) {
        html = html.replace(
            /<\/body>/,
            `    <script src="navigation.js"></script>\n</body>`
        );
        changes.push('✅ navigation.js ajouté');
    }

    // 4. Ajouter role="navigation" à la navbar
    if (html.includes('class="navbar"') && !html.includes('role="navigation"')) {
        html = html.replace(
            /<nav class="navbar">/g,
            '<nav class="navbar" role="navigation" aria-label="Navigation principale">'
        );
        changes.push('✅ role="navigation" ajouté');
    }

    // 5. Ajouter role="main" au container principal
    if (html.includes('class="container"') && !html.includes('role="main"')) {
        html = html.replace(
            /<div class="container">/,
            '<div class="container" role="main">'
        );
        changes.push('✅ role="main" ajouté');
    }

    // 6. Ajouter role="contentinfo" au footer
    if (html.includes('class="footer"') && !html.includes('role="contentinfo"')) {
        html = html.replace(
            /<footer class="footer">/g,
            '<footer class="footer" role="contentinfo">'
        );
        changes.push('✅ role="contentinfo" ajouté');
    }

    // 7. Améliorer les boutons de recherche
    if (html.includes('id="searchBtn"') && !html.includes('aria-label="Rechercher')) {
        html = html.replace(
            /<button id="searchBtn"/g,
            '<button id="searchBtn" aria-label="Rechercher des stations de ski"'
        );
        changes.push('✅ aria-label sur bouton recherche');
    }

    // 8. Améliorer les inputs
    if (html.includes('id="locationInput"') && !html.includes('aria-label="Ville')) {
        html = html.replace(
            /<input[^>]*id="locationInput"[^>]*>/g,
            (match) => {
                if (!match.includes('aria-label')) {
                    return match.replace('>', ' aria-label="Ville de départ">');
                }
                return match;
            }
        );
        changes.push('✅ aria-label sur input ville');
    }

    // 9. Ajouter lang="fr" si manquant
    if (!html.includes('lang="fr"')) {
        html = html.replace(
            /<html>/,
            '<html lang="fr">'
        );
        changes.push('✅ lang="fr" ajouté');
    }

    // Écrire le fichier mis à jour
    fs.writeFileSync(filePath, html, 'utf8');

    if (changes.length > 0) {
        console.log(`✨ ${filePath} mis à jour :`);
        changes.forEach(change => console.log(`   ${change}`));
    } else {
        console.log(`✓ ${filePath} déjà à jour`);
    }
}

// Fonction pour mettre à jour les pages villes
function updateCityPages() {
    const villesDir = path.join(__dirname, 'villes');

    if (!fs.existsSync(villesDir)) {
        console.log('\n⚠️  Dossier villes/ non trouvé');
        return;
    }

    const files = fs.readdirSync(villesDir).filter(f => f.endsWith('.html'));
    console.log(`\n📍 Mise à jour de ${files.length} pages villes...`);

    files.forEach(file => {
        const filePath = path.join(villesDir, file);
        updateHTMLFile(filePath);
    });
}

// Exécution principale
console.log('🚀 Mise à jour automatique des pages HTML\n');
console.log('=' .repeat(60));

// Mettre à jour les pages principales
htmlFiles.forEach(file => {
    const filePath = path.join(__dirname, file);
    updateHTMLFile(filePath);
});

// Mettre à jour les pages villes
updateCityPages();

console.log('\n' + '='.repeat(60));
console.log('\n✅ Mise à jour terminée !');
console.log('\n📋 Prochaines étapes :');
console.log('   1. Vérifier les pages dans un navigateur');
console.log('   2. Tester le menu mobile sur différents devices');
console.log('   3. Valider l\'accessibilité avec un screen reader');
console.log('   4. Commiter les changements si tout fonctionne\n');
