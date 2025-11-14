#!/usr/bin/env node

/**
 * optimize-meta-tags.js
 * Ajoute/optimise les balises meta sur toutes les pages HTML
 */

const fs = require('fs');
const path = require('path');

// Configuration des pages à optimiser
const pages = [
    {
        file: 'compare.html',
        title: 'Comparateur Stations Ski | Comparez jusqu\'à 3 Stations Côte-à-Côte',
        description: '⚖️ Comparez jusqu\'à 3 stations de ski simultanément ! Prix des forfaits, domaine skiable, altitude, niveau... Tableau comparatif détaillé pour choisir la meilleure station.',
        keywords: 'comparateur ski, comparer stations ski, comparatif stations ski, choisir station ski',
        priority: '0.8'
    },
    {
        file: 'favorites.html',
        title: 'Mes Stations Favorites | Où Skier Ce Weekend',
        description: '❤️ Retrouvez vos stations de ski préférées en un clic. Sauvegardez et organisez vos stations favorites pour les comparer facilement.',
        keywords: 'favoris ski, stations préférées, sauvegarder station ski',
        priority: '0.7'
    },
    {
        file: 'about.html',
        title: 'À Propos | Où Skier Ce Weekend - Notre Mission',
        description: 'Découvrez Où Skier Ce Weekend, le comparateur gratuit qui aide les skieurs à trouver leur station idéale. Notre mission, notre équipe, notre engagement.',
        keywords: 'à propos, qui sommes nous, équipe, contact',
        priority: '0.6'
    },
    {
        file: 'legal.html',
        title: 'Mentions Légales | Où Skier Ce Weekend',
        description: 'Mentions légales, informations sur l\'éditeur, hébergement et propriété intellectuelle du site Où Skier Ce Weekend.',
        keywords: 'mentions légales, rgpd, données personnelles',
        priority: '0.3'
    }
];

console.log('🔧 Optimisation des balises meta...\n');

// Balises meta communes à ajouter si absentes
const commonMeta = `
    <!-- Balises SEO supplémentaires -->
    <meta name="robots" content="index, follow, max-image-preview:large">
    <meta name="author" content="Où Skier Ce Weekend">
    <meta name="language" content="fr">
    <meta name="geo.region" content="FR">`;

pages.forEach(page => {
    const filePath = path.join(__dirname, page.file);

    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${page.file} n'existe pas, ignoré`);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf-8');

    // Remplacer le title s'il existe
    if (content.includes('<title>')) {
        content = content.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);
    } else {
        // Ajouter après charset
        content = content.replace(
            /<meta charset="UTF-8">/,
            `<meta charset="UTF-8">\n    <title>${page.title}</title>`
        );
    }

    // Remplacer ou ajouter description
    if (content.includes('name="description"')) {
        content = content.replace(
            /<meta name="description" content=".*?">/,
            `<meta name="description" content="${page.description}">`
        );
    } else {
        content = content.replace(
            /<title>.*?<\/title>/,
            `$&\n    <meta name="description" content="${page.description}">`
        );
    }

    // Ajouter keywords si absent
    if (!content.includes('name="keywords"')) {
        content = content.replace(
            /<meta name="description".*?>/,
            `$&\n    <meta name="keywords" content="${page.keywords}">`
        );
    }

    // Ajouter les balises meta communes si absentes
    if (!content.includes('name="robots"')) {
        content = content.replace(
            /<meta name="keywords".*?>/,
            `$&\n${commonMeta}`
        );
    }

    // Ajouter Open Graph si absent
    if (!content.includes('property="og:title"')) {
        const ogMeta = `
    <!-- Open Graph -->
    <meta property="og:title" content="${page.title}">
    <meta property="og:description" content="${page.description}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://ouskierceweeekend.fr/${page.file}">
    <meta property="og:site_name" content="Où Skier Ce Weekend">
    <meta property="og:locale" content="fr_FR">
    <meta property="og:image" content="https://ouskierceweeekend.fr/images/og-image.jpg">`;

        content = content.replace(
            /<!-- Balises SEO supplémentaires -->[\s\S]*?<meta name="geo\.region".*?>/,
            `$&\n${ogMeta}`
        );
    }

    // Ajouter Twitter Card si absent
    if (!content.includes('name="twitter:card"')) {
        const twitterMeta = `
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${page.title}">
    <meta name="twitter:description" content="${page.description}">
    <meta name="twitter:image" content="https://ouskierceweeekend.fr/images/og-image.jpg">`;

        content = content.replace(
            /<meta property="og:image".*?>/,
            `$&\n${twitterMeta}`
        );
    }

    // Ajouter canonical si absent
    if (!content.includes('rel="canonical"')) {
        const canonical = `\n    <!-- Canonical -->\n    <link rel="canonical" href="https://ouskierceweeekend.fr/${page.file}">`;
        content = content.replace(
            /<link rel="icon"/,
            `${canonical}\n    <link rel="icon"`
        );
    }

    // Écrire le fichier modifié
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ ${page.file} optimisé`);
});

console.log('\n✅ Optimisation terminée !\n');
console.log('📋 Pages optimisées:');
pages.forEach(p => console.log(`   - ${p.file}`));
console.log('\n💡 Vérifier avec:');
console.log('   - https://www.opengraph.xyz/');
console.log('   - https://cards-dev.twitter.com/validator');
