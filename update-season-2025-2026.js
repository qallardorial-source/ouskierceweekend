/**
 * Script de mise à jour des dates et prix pour la saison 2025-2026
 * Usage: node update-season-2025-2026.js
 */

const fs = require('fs');
const path = require('path');

const STATIONS_FILE = './stations-data.js';

/**
 * Détermine les dates d'ouverture/fermeture selon l'altitude
 * @param {string} altitude - Altitude de la station (ex: "2466m", "1850m")
 * @returns {Object} - {opening: string, closing: string}
 */
function getSeasonDates(altitude) {
    // Extraire la valeur numérique
    const altValue = parseInt(altitude.replace('m', ''));

    // Stations haute altitude (>2500m)
    if (altValue >= 2500) {
        return {
            opening: "28 nov 2025",
            closing: "4 mai 2026"
        };
    }
    // Stations moyenne altitude (1800-2500m)
    else if (altValue >= 1800) {
        return {
            opening: "14 déc 2025",
            closing: "20 avr 2026"
        };
    }
    // Stations basse altitude (<1800m)
    else {
        return {
            opening: "21 déc 2025",
            closing: "6 avr 2026"
        };
    }
}

/**
 * Ajuste les prix avec inflation légère (+3%)
 * @param {number} price - Prix actuel
 * @returns {number} - Prix ajusté
 */
function adjustPrice(price) {
    // Arrondir au multiple de 5 le plus proche
    const adjusted = Math.round(price * 1.03);
    return Math.round(adjusted / 5) * 5;
}

/**
 * Met à jour le fichier stations-data.js
 */
function updateStationsData() {
    console.log('📅 Mise à jour saison 2025-2026...\n');

    // Lire le fichier
    let content = fs.readFileSync(STATIONS_FILE, 'utf8');

    // Compter les stations
    const stationCount = (content.match(/"id":/g) || []).length;
    console.log(`📊 Nombre de stations trouvées: ${stationCount}\n`);

    let updatedCount = 0;
    let pricesUpdated = 0;

    // Parser le contenu pour extraire le tableau skiResorts
    const skiResortsMatch = content.match(/const skiResorts = \[([\s\S]*?)\];/);

    if (!skiResortsMatch) {
        console.error('❌ Impossible de parser le fichier stations-data.js');
        return;
    }

    // Utiliser une regex pour trouver et remplacer chaque station
    content = content.replace(
        /\{[\s\S]*?"id":\s*"([^"]+)"[\s\S]*?"altitude":\s*"([^"]+)"[\s\S]*?"skiPass":\s*(\d+),[\s\S]*?"lodging":\s*(\d+),[\s\S]*?"opening":\s*"([^"]+)"[\s\S]*?"closing":\s*"([^"]+)"[\s\S]*?\}/g,
        (match, id, altitude, skiPass, lodging, oldOpening, oldClosing) => {
            const dates = getSeasonDates(altitude);
            const newSkiPass = adjustPrice(parseInt(skiPass));
            const newLodging = adjustPrice(parseInt(lodging));

            // Mettre à jour les dates
            let updated = match.replace(
                `"opening": "${oldOpening}"`,
                `"opening": "${dates.opening}"`
            );
            updated = updated.replace(
                `"closing": "${oldClosing}"`,
                `"closing": "${dates.closing}"`
            );

            // Mettre à jour les prix si changement
            if (newSkiPass !== parseInt(skiPass)) {
                updated = updated.replace(
                    `"skiPass": ${skiPass}`,
                    `"skiPass": ${newSkiPass}`
                );
                pricesUpdated++;
            }
            if (newLodging !== parseInt(lodging)) {
                updated = updated.replace(
                    `"lodging": ${lodging}`,
                    `"lodging": ${newLodging}`
                );
            }

            // Mettre à jour les advantages si mention du forfait
            updated = updated.replace(
                new RegExp(`"Forfait ${skiPass}€"`, 'g'),
                `"Forfait ${newSkiPass}€"`
            );

            updatedCount++;

            // Afficher quelques exemples
            if (updatedCount <= 5) {
                console.log(`✅ ${id}:`);
                console.log(`   Altitude: ${altitude}`);
                console.log(`   Dates: ${dates.opening} → ${dates.closing}`);
                console.log(`   Forfait: ${skiPass}€ → ${newSkiPass}€`);
                console.log(`   Hébergement: ${lodging}€ → ${newLodging}€\n`);
            }

            return updated;
        }
    );

    // Sauvegarder le fichier
    fs.writeFileSync(STATIONS_FILE, content, 'utf8');

    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✅ Mise à jour terminée !`);
    console.log(`📊 ${updatedCount} stations mises à jour`);
    console.log(`💰 ${pricesUpdated} prix de forfaits ajustés (+3%)`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    console.log('📋 Répartition des dates par altitude:');
    console.log('   🏔️  Haute altitude (≥2500m): 28 nov 2025 → 4 mai 2026');
    console.log('   ⛰️  Moyenne altitude (1800-2500m): 14 déc 2025 → 20 avr 2026');
    console.log('   🏞️  Basse altitude (<1800m): 21 déc 2025 → 6 avr 2026\n');
}

// Exécuter
try {
    updateStationsData();
} catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
}
