// app.js - Logique principale du site

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
}

async function getCoordinates(location) {
    const locationLower = location.toLowerCase().trim();
    
    for (const [cityName, coords] of Object.entries(cities)) {
        if (locationLower.includes(cityName) || cityName.includes(locationLower)) {
            return coords;
        }
    }
    
    try {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)},France&limit=1&countrycodes=fr`,
            { headers: { 'User-Agent': 'SkiFinder/1.0' } }
        );
        const data = await response.json();
        if (data.length > 0) {
            return {
                lat: parseFloat(data[0].lat),
                lon: parseFloat(data[0].lon)
            };
        }
    } catch (error) {
        console.error('Erreur API:', error);
    }
    
    return null;
}

function createResortCard(resort, distance = null) {
    const distanceBadge = distance !== null 
        ? `<div class="distance">${Math.round(distance)} km</div>` 
        : '';
    
    return `
        <div class="resort-card">
            <img src="${resort.image}" 
                 alt="${resort.name}" 
                 class="resort-image"
                 onerror="this.style.background='linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)'; this.alt='Photo à venir';">
            <div class="resort-content">
                <div class="resort-header">
                    <div class="resort-name">${resort.name}</div>
                    ${distanceBadge}
                </div>
                <div class="resort-region">${resort.region}</div>
                <div class="dates-info">
                    <strong>Saison:</strong> ${resort.opening} → ${resort.closing}
                </div>
                <div class="resort-info">
                    <div class="info-item">
                        <span class="info-icon">⛰️</span>
                        <span>Altitude: ${resort.altitude}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-icon">🎿</span>
                        <span>Domaine: ${resort.slopes} de pistes</span>
                    </div>
                </div>
                <div class="pricing">
                    <div class="price-item">
                        <div class="price-label">Forfait/jour</div>
                        <div class="price-value">${resort.skiPass}€</div>
                    </div>
                    <div class="price-item">
                        <div class="price-label">Logement/nuit</div>
                        <div class="price-value">${resort.lodging}€</div>
                    </div>
                </div>
                <a href="station-detail.html?id=${resort.id}" class="book-button">
                    📋 Voir les détails
                </a>
            </div>
        </div>
    `;
}

function displayFeaturedResorts() {
    const resultsDiv = document.getElementById('results');
    const featured = skiResorts.slice(0, 12);
    resultsDiv.innerHTML = featured.map(resort => createResortCard(resort)).join('');
}

async function searchResorts() {
    const location = document.getElementById('locationInput').value;
    const maxDistance = parseInt(document.getElementById('distance').value);
    const region = document.getElementById('region').value;
    const size = document.getElementById('size').value;
    const resultsDiv = document.getElementById('results');
    const statsDiv = document.getElementById('stats');

    if (!location) {
        alert('Merci d\'entrer une ville');
        return;
    }

    resultsDiv.innerHTML = '<div class="loading">🔍 Recherche des stations...</div>';
    statsDiv.style.display = 'none';

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

    let filtered = skiResorts.map(resort => ({
        ...resort,
        distance: calculateDistance(coords.lat, coords.lon, resort.lat, resort.lon)
    }));

    filtered = filtered.filter(r => r.distance <= maxDistance);
    
    if (region !== 'all') {
        filtered = filtered.filter(r => r.region === region);
    }

    if (size !== 'all') {
        filtered = filtered.filter(r => {
            const km = parseInt(r.slopes);
            if (size === 'large') return km >= 150;
            if (size === 'medium') return km >= 50 && km < 150;
            if (size === 'small') return km < 50;
            return true;
        });
    }

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

    const avgDist = Math.round(filtered.reduce((sum, r) => sum + r.distance, 0) / filtered.length);
    const avgPrice = Math.round(filtered.reduce((sum, r) => sum + r.skiPass, 0) / filtered.length);
    
    document.getElementById('totalStations').textContent = filtered.length;
    document.getElementById('avgDistance').textContent = avgDist;
    document.getElementById('avgPrice').textContent = avgPrice;
    statsDiv.style.display = 'flex';

    resultsDiv.innerHTML = filtered.map(resort => createResortCard(resort, resort.distance)).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    displayFeaturedResorts();
    
    document.getElementById('searchBtn').addEventListener('click', searchResorts);
    
    document.getElementById('locationInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchResorts();
        }
    });
});