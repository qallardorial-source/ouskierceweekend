// app-secure.js - Version SÉCURISÉE avec protection XSS
// ⚠️ Ce fichier remplace app.js

// ========================================
// FONCTION DE SÉCURITÉ - ÉCHAPPEMENT HTML
// ========================================

/**
 * Échappe les caractères HTML pour prévenir les attaques XSS
 * @param {string} unsafe - Chaîne non sécurisée
 * @returns {string} - Chaîne sécurisée
 */
function escapeHtml(unsafe) {
    if (typeof unsafe !== 'string') return '';
    
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/**
 * Valide et sanitise une chaîne de caractères
 * @param {string} input - Entrée utilisateur
 * @param {number} maxLength - Longueur maximale
 * @returns {string} - Chaîne validée
 */
function sanitizeInput(input, maxLength = 100) {
    if (typeof input !== 'string') return '';
    
    // Trim et limite de longueur
    let sanitized = input.trim().substring(0, maxLength);
    
    // Supprime les caractères dangereux
    sanitized = sanitized.replace(/[<>]/g, '');
    
    return sanitized;
}

/**
 * Valide un nombre
 * @param {any} value - Valeur à valider
 * @param {number} min - Valeur minimale
 * @param {number} max - Valeur maximale
 * @returns {number} - Nombre validé
 */
function validateNumber(value, min = 0, max = Infinity) {
    const num = parseFloat(value);
    if (isNaN(num)) return min;
    return Math.max(min, Math.min(max, num));
}

// ========================================
// CALCUL DE DISTANCE (inchangé - sécurisé)
// ========================================

function calculateDistance(lat1, lon1, lat2, lon2) {
    // Validation des coordonnées
    lat1 = validateNumber(lat1, -90, 90);
    lon1 = validateNumber(lon1, -180, 180);
    lat2 = validateNumber(lat2, -90, 90);
    lon2 = validateNumber(lon2, -180, 180);
    
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

// ========================================
// GÉOLOCALISATION SÉCURISÉE AVEC RETRY
// ========================================

/**
 * Obtient les coordonnées géographiques d'un lieu
 * @param {string} location - Nom du lieu
 * @returns {Promise<Object|null>} Coordonnées {lat, lon} ou null
 */
async function getCoordinates(location) {
    // Sanitise l'entrée utilisateur
    const sanitizedLocation = sanitizeInput(location, 50);
    if (!sanitizedLocation) return null;

    const locationLower = sanitizedLocation.toLowerCase().trim();

    // Recherche dans la base locale (sécurisée et rapide)
    for (const [cityName, coords] of Object.entries(cities)) {
        if (locationLower.includes(cityName) || cityName.includes(locationLower)) {
            return coords;
        }
    }

    // Appel API Nominatim avec retry et validation
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(sanitizedLocation)},France&limit=1&countrycodes=fr`;

    try {
        let data;

        // Utiliser robustFetch si disponible
        if (typeof window !== 'undefined' && window.apiUtils && window.apiUtils.robustFetch) {
            data = await window.apiUtils.robustFetch(url, {
                maxRetries: 2,
                retryDelay: 1500,
                timeout: 6000,
                cacheTTL: 3600000, // 1 heure pour les géolocalisations
                useCache: true
            }, {
                headers: { 'User-Agent': 'SkiFinder/1.0' }
            });
        } else {
            // Fallback sans retry
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 6000);

            const response = await fetch(url, {
                headers: { 'User-Agent': 'SkiFinder/1.0' },
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }

            data = await response.json();
        }

        // Validation des données reçues
        if (Array.isArray(data) && data.length > 0 && data[0].lat && data[0].lon) {
            return {
                lat: validateNumber(data[0].lat, -90, 90),
                lon: validateNumber(data[0].lon, -180, 180)
            };
        }

        console.warn('⚠️ Aucun résultat trouvé pour:', sanitizedLocation);
        return null;

    } catch (error) {
        if (error.message.includes('timeout')) {
            console.error('❌ Timeout API géolocalisation');
        } else {
            console.error('❌ Erreur géolocalisation:', error.message);
        }
        return null;
    }
}

// ========================================
// CRÉATION DE CARTE STATION - SÉCURISÉE
// ========================================

function createResortCard(resort, distance = null) {
    // Validation des données de la station
    if (!resort || typeof resort !== 'object') {
        return '<div class="error">Données de station invalides</div>';
    }
    
    // Échappement HTML de TOUTES les données
    const safeName = escapeHtml(resort.name || 'Station inconnue');
    const safeRegion = escapeHtml(resort.region || '');
    const safeAltitude = escapeHtml(resort.altitude || '');
    const safeSlopes = escapeHtml(resort.slopes || '0');
    const safeOpening = escapeHtml(resort.opening || '');
    const safeClosing = escapeHtml(resort.closing || '');
    const safeId = escapeHtml(resort.id || '');
    const safeImage = escapeHtml(resort.image || '');
    
    // Validation des nombres
    const safeSkiPass = validateNumber(resort.skiPass, 0, 999);
    const safeLodging = validateNumber(resort.lodging, 0, 9999);
    const safeDistance = distance !== null ? Math.round(validateNumber(distance, 0, 10000)) : null;
    
    const distanceBadge = safeDistance !== null 
        ? `<div class="distance">${safeDistance} km</div>` 
        : '';
    
    return `
        <div class="resort-card">
            <a href="station-detail.html?id=${safeId}" class="image-link">
                <img src="${safeImage}"
                     alt="${safeName}"
                     class="resort-image"
                     loading="lazy"
                     decoding="async"
                     onerror="this.style.background='linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'; this.alt='Photo à venir';">
            </a>
            <div class="resort-content">
                <div class="resort-header">
                    <div class="resort-name">${safeName}</div>
                    ${distanceBadge}
                </div>
                <div class="resort-region">${safeRegion}</div>
                <div class="dates-info">
                    <strong>Saison:</strong> ${safeOpening} → ${safeClosing}
                </div>
                <div class="resort-info">
                    <div class="info-item">
                        <span class="info-icon">⛰️</span>
                        <span>Altitude: ${safeAltitude}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🎿</span>
                        <span>Domaine: ${safeSlopes} de pistes</span>
                    </div>
                </div>
                <div class="pricing">
                    <div class="price-item">
                        <div class="price-label">Forfait/jour</div>
                        <div class="price-value">${safeSkiPass}€</div>
                    </div>
                    <div class="price-item">
                        <div class="price-label">Logement/nuit</div>
                        <div class="price-value">${safeLodging}€</div>
                    </div>
                </div>
                <a href="station-detail.html?id=${safeId}" class="book-button">
                    📋 Voir les détails
                </a>
            </div>
        </div>
    `;
}

// ========================================
// AFFICHAGE DES STATIONS VEDETTES
// ========================================

function displayFeaturedResorts() {
    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;
    
    // Validation : skiResorts doit être un tableau
    if (!Array.isArray(skiResorts) || skiResorts.length === 0) {
        resultsDiv.innerHTML = '<div class="error">Erreur de chargement des stations</div>';
        return;
    }
    
    const featured = skiResorts.slice(0, 12);
    resultsDiv.innerHTML = featured.map(resort => createResortCard(resort)).join('');
}

// ========================================
// RECHERCHE DE STATIONS - SÉCURISÉE
// ========================================

async function searchResorts() {
    const locationInput = document.getElementById('locationInput');
    const distanceSelect = document.getElementById('distance');
    const regionSelect = document.getElementById('region');
    const sizeSelect = document.getElementById('size');
    const resultsDiv = document.getElementById('results');
    const statsDiv = document.getElementById('stats');
    
    // Vérification des éléments DOM
    if (!locationInput || !resultsDiv) {
        console.error('Éléments DOM manquants');
        return;
    }
    
    // Validation et sanitisation de l'entrée
    const location = sanitizeInput(locationInput.value, 50);
    
    if (!location || location.length < 2) {
        alert('Merci d\'entrer une ville (minimum 2 caractères)');
        return;
    }
    
    // Validation des filtres
    const maxDistance = validateNumber(parseInt(distanceSelect?.value || 100), 10, 1000);
    const region = regionSelect?.value || 'all';
    const size = sizeSelect?.value || 'all';

    resultsDiv.innerHTML = '<div class="loading">🔍 Recherche des stations...</div>';
    if (statsDiv) statsDiv.style.display = 'none';

    const coords = await getCoordinates(location);
    
    if (!coords) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <h2>😕 Ville introuvable</h2>
                <p>Essaie avec une grande ville (Lyon, Paris, Grenoble...)</p>
            </div>
        `;
        return;
    }

    // Validation : skiResorts doit exister et être un tableau
    if (!Array.isArray(skiResorts)) {
        resultsDiv.innerHTML = '<div class="error">Erreur de chargement des données</div>';
        return;
    }

    // Calcul des distances avec validation
    let filtered = skiResorts
        .filter(resort => resort && typeof resort === 'object')
        .map(resort => ({
            ...resort,
            distance: calculateDistance(coords.lat, coords.lon, resort.lat, resort.lon)
        }));

    // Filtrage par distance
    filtered = filtered.filter(r => r.distance <= maxDistance);
    
    // Filtrage par région
    if (region !== 'all') {
        filtered = filtered.filter(r => r.region === region);
    }

    // Filtrage par taille
    if (size !== 'all') {
        filtered = filtered.filter(r => {
            const km = parseInt(r.slopes) || 0;
            if (size === 'large') return km >= 150;
            if (size === 'medium') return km >= 50 && km < 150;
            if (size === 'small') return km < 50;
            return true;
        });
    }

    // Tri par distance
    filtered.sort((a, b) => a.distance - b.distance);

    if (filtered.length === 0) {
        resultsDiv.innerHTML = `
            <div class="no-results">
                <h2>😕 Aucune station trouvée</h2>
                <p>Essaie d'augmenter la distance ou change les filtres</p>
            </div>
        `;
        return;
    }

    // Calcul des moyennes avec validation
    const avgDist = Math.round(filtered.reduce((sum, r) => sum + r.distance, 0) / filtered.length);
    const avgPrice = Math.round(filtered.reduce((sum, r) => sum + (r.skiPass || 0), 0) / filtered.length);
    
    // Mise à jour sécurisée des statistiques
    const totalStationsEl = document.getElementById('totalStations');
    const avgDistanceEl = document.getElementById('avgDistance');
    const avgPriceEl = document.getElementById('avgPrice');
    
    if (totalStationsEl) totalStationsEl.textContent = filtered.length;
    if (avgDistanceEl) avgDistanceEl.textContent = avgDist;
    if (avgPriceEl) avgPriceEl.textContent = avgPrice;
    if (statsDiv) statsDiv.style.display = 'flex';

    // Affichage des résultats
    resultsDiv.innerHTML = filtered.map(resort => createResortCard(resort, resort.distance)).join('');
}

// ========================================
// INITIALISATION SÉCURISÉE
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // Affichage initial
    displayFeaturedResorts();
    
    // Event listeners avec vérification
    const searchBtn = document.getElementById('searchBtn');
    const locationInput = document.getElementById('locationInput');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', searchResorts);
    }
    
    if (locationInput) {
        locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Évite la soumission de formulaire
                searchResorts();
            }
        });
    }
});

// ========================================
// PROTECTION CONTRE LA MANIPULATION
// ========================================

// Empêche la modification des fonctions critiques
Object.freeze(escapeHtml);
Object.freeze(sanitizeInput);
Object.freeze(validateNumber);
