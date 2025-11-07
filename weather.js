// weather.js - API météo gratuite Open-Meteo + Améliorations SEO

// ============================================
// FONCTION PRINCIPALE : Récupération météo
// ============================================
async function getWeather(lat, lon) {
    try {
        // API Open-Meteo (gratuite, sans clé API)
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=snowfall_sum,temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=Europe/Paris&forecast_days=3`
        );
        const data = await response.json();
        
        return {
            temperature: Math.round(data.current_weather.temperature),
            windSpeed: Math.round(data.current_weather.windspeed),
            weatherCode: data.current_weather.weathercode,
            snowfall: data.daily.snowfall_sum[0] || 0,
            tempMax: Math.round(data.daily.temperature_2m_max[0]),
            tempMin: Math.round(data.daily.temperature_2m_min[0]),
            precipitation: data.daily.precipitation_sum[0] || 0,
            // Prévisions 3 jours
            forecast: {
                day1: {
                    tempMax: Math.round(data.daily.temperature_2m_max[1]),
                    tempMin: Math.round(data.daily.temperature_2m_min[1]),
                    snowfall: data.daily.snowfall_sum[1] || 0
                },
                day2: {
                    tempMax: Math.round(data.daily.temperature_2m_max[2]),
                    tempMin: Math.round(data.daily.temperature_2m_min[2]),
                    snowfall: data.daily.snowfall_sum[2] || 0
                }
            }
        };
    } catch (error) {
        console.error('❌ Erreur météo:', error);
        return null;
    }
}

// ============================================
// INTERPRÉTATION DES CODES MÉTÉO
// ============================================
function getWeatherDescription(code) {
    const descriptions = {
        0: { text: 'Ciel dégagé', icon: '☀️', color: '#FFD700', seo: 'beau temps' },
        1: { text: 'Principalement dégagé', icon: '🌤️', color: '#FDB813', seo: 'beau temps' },
        2: { text: 'Partiellement nuageux', icon: '⛅', color: '#95C8D8', seo: 'nuageux' },
        3: { text: 'Couvert', icon: '☁️', color: '#B0B0B0', seo: 'nuageux' },
        45: { text: 'Brouillard', icon: '🌫️', color: '#9E9E9E', seo: 'brouillard' },
        48: { text: 'Brouillard givrant', icon: '🌫️', color: '#9E9E9E', seo: 'brouillard' },
        51: { text: 'Bruine légère', icon: '🌦️', color: '#7CB9E8', seo: 'pluie' },
        53: { text: 'Bruine modérée', icon: '🌦️', color: '#7CB9E8', seo: 'pluie' },
        55: { text: 'Bruine dense', icon: '🌧️', color: '#5A8FC7', seo: 'pluie' },
        61: { text: 'Pluie légère', icon: '🌧️', color: '#5A8FC7', seo: 'pluie' },
        63: { text: 'Pluie modérée', icon: '🌧️', color: '#4A7FB7', seo: 'pluie' },
        65: { text: 'Pluie forte', icon: '⛈️', color: '#3A6FA7', seo: 'pluie forte' },
        71: { text: 'Neige légère', icon: '🌨️', color: '#E0F2F7', seo: 'neige légère' },
        73: { text: 'Neige modérée', icon: '❄️', color: '#B3E5FC', seo: 'neige' },
        75: { text: 'Neige forte', icon: '❄️❄️', color: '#81D4FA', seo: 'fortes chutes de neige' },
        77: { text: 'Grains de neige', icon: '🌨️', color: '#B3E5FC', seo: 'neige' },
        80: { text: 'Averses légères', icon: '🌦️', color: '#7CB9E8', seo: 'averses' },
        81: { text: 'Averses modérées', icon: '🌧️', color: '#5A8FC7', seo: 'averses' },
        82: { text: 'Averses violentes', icon: '⛈️', color: '#3A6FA7', seo: 'fortes averses' },
        85: { text: 'Averses de neige légères', icon: '🌨️', color: '#B3E5FC', seo: 'neige' },
        86: { text: 'Averses de neige fortes', icon: '❄️', color: '#81D4FA', seo: 'fortes chutes de neige' },
        95: { text: 'Orage', icon: '⛈️', color: '#3A6FA7', seo: 'orage' },
        96: { text: 'Orage avec grêle', icon: '⛈️', color: '#3A6FA7', seo: 'orage' },
        99: { text: 'Orage avec forte grêle', icon: '⛈️', color: '#3A6FA7', seo: 'orage violent' }
    };
    
    return descriptions[code] || { text: 'Conditions inconnues', icon: '❓', color: '#9E9E9E', seo: 'météo variable' };
}

// ============================================
// ÉVALUATION CONDITIONS SKI
// ============================================
function getSkiConditions(weather) {
    if (!weather) return { score: 0, text: 'Données indisponibles', class: 'unknown' };
    
    let score = 50; // Base
    let reasons = [];
    
    // Température (idéale entre -10 et -2)
    if (weather.temperature >= -10 && weather.temperature <= -2) {
        score += 20;
        reasons.push('Température idéale');
    } else if (weather.temperature < -15) {
        score -= 10;
        reasons.push('Très froid');
    } else if (weather.temperature > 5) {
        score -= 20;
        reasons.push('Trop doux');
    }
    
    // Neige fraîche (bonus énorme)
    if (weather.snowfall > 10) {
        score += 30;
        reasons.push('Neige fraîche abondante');
    } else if (weather.snowfall > 5) {
        score += 20;
        reasons.push('Neige fraîche');
    }
    
    // Vent
    if (weather.windSpeed > 50) {
        score -= 20;
        reasons.push('Vent fort');
    } else if (weather.windSpeed > 30) {
        score -= 10;
        reasons.push('Vent modéré');
    }
    
    // Code météo
    const desc = getWeatherDescription(weather.weatherCode);
    if (weather.weatherCode <= 1) {
        score += 10;
        reasons.push('Beau temps');
    } else if (weather.weatherCode >= 71 && weather.weatherCode <= 77) {
        score += 15;
        reasons.push('Neige en cours');
    } else if (weather.weatherCode >= 61 && weather.weatherCode <= 65) {
        score -= 15;
        reasons.push('Pluie');
    }
    
    // Limiter score entre 0 et 100
    score = Math.max(0, Math.min(100, score));
    
    // Classification
    let classification, emoji, cssClass;
    if (score >= 80) {
        classification = 'Excellentes conditions';
        emoji = '🎿⭐⭐⭐';
        cssClass = 'excellent';
    } else if (score >= 60) {
        classification = 'Bonnes conditions';
        emoji = '🎿⭐⭐';
        cssClass = 'good';
    } else if (score >= 40) {
        classification = 'Conditions correctes';
        emoji = '🎿⭐';
        cssClass = 'average';
    } else {
        classification = 'Conditions difficiles';
        emoji = '⚠️';
        cssClass = 'poor';
    }
    
    return {
        score,
        text: classification,
        emoji,
        class: cssClass,
        reasons
    };
}

// ============================================
// GÉNÉRATION HTML MÉTÉO COMPLÈTE
// ============================================
function createWeatherHTML(weather, stationName) {
    if (!weather) {
        return `
            <div class="weather-card">
                <h3>🌤️ Météo indisponible</h3>
                <p>Impossible de récupérer les données météo actuellement.</p>
            </div>
        `;
    }
    
    const desc = getWeatherDescription(weather.weatherCode);
    const conditions = getSkiConditions(weather);
    
    // Alert neige fraîche
    let snowAlert = '';
    if (weather.snowfall > 0) {
        snowAlert = `
            <div class="snow-alert">
                ❄️ <strong>${Math.round(weather.snowfall)}cm de neige fraîche !</strong> 
                Conditions de ski exceptionnelles aujourd'hui.
            </div>
        `;
    }
    
    // Prévisions 2 jours
    let forecastHTML = '';
    if (weather.forecast) {
        forecastHTML = `
            <div class="weather-forecast">
                <h4>Prévisions</h4>
                <div class="forecast-days">
                    <div class="forecast-day">
                        <div class="forecast-label">Demain</div>
                        <div class="forecast-temp">${weather.forecast.day1.tempMin}° / ${weather.forecast.day1.tempMax}°</div>
                        ${weather.forecast.day1.snowfall > 0 ? `<div class="forecast-snow">❄️ ${Math.round(weather.forecast.day1.snowfall)}cm</div>` : ''}
                    </div>
                    <div class="forecast-day">
                        <div class="forecast-label">Après-demain</div>
                        <div class="forecast-temp">${weather.forecast.day2.tempMin}° / ${weather.forecast.day2.tempMax}°</div>
                        ${weather.forecast.day2.snowfall > 0 ? `<div class="forecast-snow">❄️ ${Math.round(weather.forecast.day2.snowfall)}cm</div>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    // HTML complet avec Schema.org
    return `
        <div class="weather-card ${conditions.class}" style="border-left: 4px solid ${desc.color}" itemscope itemtype="https://schema.org/WeatherForecast">
            <h3>🌤️ Météo à ${stationName}</h3>
            
            <div class="weather-main">
                <div class="weather-icon" aria-label="${desc.text}">${desc.icon}</div>
                <div class="weather-temp" itemprop="temperature">
                    <span class="temp-value">${weather.temperature}</span>°C
                </div>
            </div>
            
            <div class="weather-details">
                <p class="weather-description" itemprop="description">${desc.text}</p>
                <p class="weather-range">
                    <span class="temp-label">Min:</span> <span itemprop="lowTemperature">${weather.tempMin}°C</span> • 
                    <span class="temp-label">Max:</span> <span itemprop="highTemperature">${weather.tempMax}°C</span>
                </p>
                <p class="weather-wind">💨 Vent: <span itemprop="windSpeed">${weather.windSpeed} km/h</span></p>
                ${weather.precipitation > 0 ? `<p class="weather-precipitation">🌧️ Précipitations: ${weather.precipitation}mm</p>` : ''}
            </div>
            
            ${snowAlert}
            
            <div class="ski-conditions ski-conditions-${conditions.class}">
                <div class="conditions-header">
                    <strong>Conditions de ski</strong>
                    <span class="conditions-emoji">${conditions.emoji}</span>
                </div>
                <div class="conditions-score">
                    <div class="score-bar">
                        <div class="score-fill" style="width: ${conditions.score}%"></div>
                    </div>
                    <span class="score-text">${conditions.text} (${conditions.score}/100)</span>
                </div>
                ${conditions.reasons.length > 0 ? `
                    <div class="conditions-reasons">
                        ${conditions.reasons.map(r => `<span class="reason-tag">✓ ${r}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
            
            ${forecastHTML}
            
            <div class="weather-footer">
                <small>Données fournies par Open-Meteo • Mises à jour en temps réel</small>
            </div>
        </div>
    `;
}

// ============================================
// VERSION COMPACTE POUR CARTES STATIONS
// ============================================
function createWeatherBadge(weather) {
    if (!weather) return '<span class="weather-badge">Météo indisponible</span>';
    
    const desc = getWeatherDescription(weather.weatherCode);
    const conditions = getSkiConditions(weather);
    
    return `
        <div class="weather-badge ${conditions.class}" title="${desc.text}">
            <span class="badge-icon">${desc.icon}</span>
            <span class="badge-temp">${weather.temperature}°C</span>
            ${weather.snowfall > 0 ? `<span class="badge-snow">❄️ ${Math.round(weather.snowfall)}cm</span>` : ''}
            <span class="badge-conditions">${conditions.emoji}</span>
        </div>
    `;
}

// ============================================
// STYLES CSS POUR LA MÉTÉO
// ============================================
const weatherStyles = `
/* Carte météo principale */
.weather-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    margin: 20px 0;
}

.weather-card h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.3em;
}

.weather-main {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}

.weather-icon {
    font-size: 4em;
    line-height: 1;
}

.weather-temp {
    font-size: 3em;
    font-weight: bold;
    color: #2c3e50;
}

.weather-details {
    color: #555;
    margin-bottom: 20px;
}

.weather-description {
    font-size: 1.2em;
    margin-bottom: 10px;
    color: #333;
    font-weight: 500;
}

.weather-range, .weather-wind, .weather-precipitation {
    font-size: 1em;
    margin: 8px 0;
    color: #666;
}

.temp-label {
    font-weight: 600;
}

/* Alerte neige */
.snow-alert {
    margin: 20px 0;
    padding: 15px;
    background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
    border-radius: 10px;
    border: 2px solid #2196F3;
    font-weight: 600;
    color: #0D47A1;
    text-align: center;
    font-size: 1.1em;
}

/* Conditions de ski */
.ski-conditions {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
}

.ski-conditions-excellent {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border: 2px solid #28a745;
}

.ski-conditions-good {
    background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
    border: 2px solid #17a2b8;
}

.ski-conditions-average {
    background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
    border: 2px solid #ffc107;
}

.ski-conditions-poor {
    background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
    border: 2px solid #dc3545;
}

.conditions-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.conditions-emoji {
    font-size: 1.5em;
}

.score-bar {
    height: 10px;
    background: #e0e0e0;
    border-radius: 5px;
    overflow: hidden;
    margin-bottom: 10px;
}

.score-fill {
    height: 100%;
    background: linear-gradient(90deg, #28a745 0%, #20c997 100%);
    transition: width 1s ease;
}

.score-text {
    font-weight: 600;
    color: #333;
}

.conditions-reasons {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
}

.reason-tag {
    background: white;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.9em;
    color: #555;
    border: 1px solid #ddd;
}

/* Prévisions */
.weather-forecast {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 2px solid #e0e0e0;
}

.weather-forecast h4 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.forecast-days {
    display: flex;
    gap: 15px;
}

.forecast-day {
    flex: 1;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

.forecast-label {
    font-weight: 600;
    color: #555;
    margin-bottom: 10px;
}

.forecast-temp {
    font-size: 1.2em;
    color: #2c3e50;
    margin-bottom: 8px;
}

.forecast-snow {
    color: #2196F3;
    font-weight: 600;
}

/* Badge météo compact */
.weather-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 12px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    font-size: 0.9em;
}

.badge-icon {
    font-size: 1.2em;
}

.badge-temp {
    font-weight: 600;
    color: #2c3e50;
}

.badge-snow {
    color: #2196F3;
    font-weight: 600;
}

.badge-conditions {
    font-size: 1.1em;
}

/* Footer météo */
.weather-footer {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid #e0e0e0;
    text-align: center;
    color: #999;
    font-size: 0.85em;
}

/* Responsive */
@media (max-width: 768px) {
    .weather-temp {
        font-size: 2.5em;
    }
    
    .weather-icon {
        font-size: 3em;
    }
    
    .forecast-days {
        flex-direction: column;
    }
}
`;

// ============================================
// FONCTION UTILITAIRE : Injecter les styles
// ============================================
function injectWeatherStyles() {
    if (!document.getElementById('weather-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'weather-styles';
        styleElement.textContent = weatherStyles;
        document.head.appendChild(styleElement);
    }
}

// Auto-injection des styles au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWeatherStyles);
} else {
    injectWeatherStyles();
}

// ============================================
// EXPORT DES FONCTIONS
// ============================================
// Les fonctions sont disponibles globalement
console.log('✅ Weather module loaded with enhanced features');
