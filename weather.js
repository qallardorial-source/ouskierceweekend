// weather.js - API météo gratuite Open-Meteo - VERSION CORRIGÉE

// ============================================
// RÉCUPÉRATION MÉTÉO
// ============================================
async function getWeather(lat, lon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=snowfall_sum,temperature_2m_max,temperature_2m_min&timezone=Europe/Paris`
        );
        const data = await response.json();
        
        return {
            temperature: Math.round(data.current_weather.temperature),
            windSpeed: Math.round(data.current_weather.windspeed),
            weatherCode: data.current_weather.weathercode,
            snowfall: data.daily.snowfall_sum[0] || 0,
            tempMax: Math.round(data.daily.temperature_2m_max[0]),
            tempMin: Math.round(data.daily.temperature_2m_min[0])
        };
    } catch (error) {
        console.error('❌ Erreur météo:', error);
        return null;
    }
}

// ============================================
// CODES MÉTÉO
// ============================================
function getWeatherDescription(code) {
    const descriptions = {
        0: { text: 'Ciel dégagé', icon: '☀️', color: '#FFD700' },
        1: { text: 'Principalement dégagé', icon: '🌤️', color: '#FDB813' },
        2: { text: 'Partiellement nuageux', icon: '⛅', color: '#95C8D8' },
        3: { text: 'Couvert', icon: '☁️', color: '#B0B0B0' },
        45: { text: 'Brouillard', icon: '🌫️', color: '#9E9E9E' },
        48: { text: 'Brouillard givrant', icon: '🌫️', color: '#9E9E9E' },
        51: { text: 'Bruine légère', icon: '🌦️', color: '#7CB9E8' },
        53: { text: 'Bruine modérée', icon: '🌦️', color: '#7CB9E8' },
        55: { text: 'Bruine dense', icon: '🌧️', color: '#5A8FC7' },
        61: { text: 'Pluie légère', icon: '🌧️', color: '#5A8FC7' },
        63: { text: 'Pluie modérée', icon: '🌧️', color: '#4A7FB7' },
        65: { text: 'Pluie forte', icon: '⛈️', color: '#3A6FA7' },
        71: { text: 'Neige légère', icon: '🌨️', color: '#E0F2F7' },
        73: { text: 'Neige modérée', icon: '❄️', color: '#B3E5FC' },
        75: { text: 'Neige forte', icon: '❄️❄️', color: '#81D4FA' },
        77: { text: 'Grains de neige', icon: '🌨️', color: '#B3E5FC' },
        80: { text: 'Averses légères', icon: '🌦️', color: '#7CB9E8' },
        81: { text: 'Averses modérées', icon: '🌧️', color: '#5A8FC7' },
        82: { text: 'Averses violentes', icon: '⛈️', color: '#3A6FA7' },
        85: { text: 'Averses de neige légères', icon: '🌨️', color: '#B3E5FC' },
        86: { text: 'Averses de neige fortes', icon: '❄️', color: '#81D4FA' },
        95: { text: 'Orage', icon: '⛈️', color: '#3A6FA7' },
        96: { text: 'Orage avec grêle', icon: '⛈️', color: '#3A6FA7' },
        99: { text: 'Orage avec forte grêle', icon: '⛈️', color: '#3A6FA7' }
    };
    
    return descriptions[code] || { text: 'Conditions variables', icon: '🌤️', color: '#95C8D8' };
}

// ============================================
// GÉNÉRATION HTML - STYLE COHÉRENT AVEC LE SITE
// ============================================
function createWeatherHTML(weather, stationName = '') {
    if (!weather) {
        return `
            <div class="weather-card">
                <div class="weather-header">
                    <h3>🌤️ Météo ${stationName ? 'à ' + stationName : 'actuelle'}</h3>
                </div>
                <div class="weather-error">
                    <p>⚠️ Météo temporairement indisponible</p>
                    <p style="font-size: 0.9em; opacity: 0.8;">Veuillez réessayer dans quelques instants</p>
                </div>
            </div>
        `;
    }
    
    const desc = getWeatherDescription(weather.weatherCode);
    
    // Alert neige fraîche
    let snowAlert = '';
    if (weather.snowfall > 0) {
        const snowAmount = Math.round(weather.snowfall);
        let snowMessage = '';
        if (snowAmount >= 20) {
            snowMessage = 'Conditions exceptionnelles ! Journée poudreuse garantie 🎿';
        } else if (snowAmount >= 10) {
            snowMessage = 'Excellentes conditions avec neige fraîche 🎿';
        } else if (snowAmount >= 5) {
            snowMessage = 'Bonnes conditions, neige fraîche ce matin ❄️';
        } else {
            snowMessage = 'Légère couche de neige fraîche ❄️';
        }
        
        snowAlert = `
            <div class="snow-alert">
                <div class="snow-icon">❄️</div>
                <div class="snow-content">
                    <div class="snow-amount">${snowAmount}cm de neige fraîche !</div>
                    <div class="snow-message">${snowMessage}</div>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="weather-card">
            <div class="weather-header">
                <h3>🌤️ Météo${stationName ? ' à ' + stationName : ''}</h3>
                <span class="weather-live">● En direct</span>
            </div>
            
            <div class="weather-main">
                <div class="weather-left">
                    <div class="weather-icon" aria-label="${desc.text}">${desc.icon}</div>
                    <div class="weather-condition">${desc.text}</div>
                </div>
                <div class="weather-right">
                    <div class="weather-temp">${weather.temperature}°C</div>
                    <div class="weather-range">
                        <span class="temp-min">↓ ${weather.tempMin}°</span>
                        <span class="temp-max">↑ ${weather.tempMax}°</span>
                    </div>
                </div>
            </div>
            
            <div class="weather-details">
                <div class="weather-detail-item">
                    <span class="detail-icon">💨</span>
                    <span class="detail-label">Vent</span>
                    <span class="detail-value">${weather.windSpeed} km/h</span>
                </div>
                ${weather.snowfall > 0 ? `
                <div class="weather-detail-item highlight">
                    <span class="detail-icon">❄️</span>
                    <span class="detail-label">Neige fraîche</span>
                    <span class="detail-value">${Math.round(weather.snowfall)} cm</span>
                </div>
                ` : ''}
            </div>
            
            ${snowAlert}
            
            <div class="weather-footer">
                <small>Données en temps réel fournies par Open-Meteo</small>
            </div>
        </div>
    `;
}

// ============================================
// STYLES CSS - COHÉRENT AVEC VOTRE DESIGN
// ============================================
const weatherStyles = `
.weather-card {
    background: rgba(15, 32, 39, 0.7);
    backdrop-filter: blur(20px);
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(197, 157, 95, 0.3);
    margin: 30px 0;
    color: white;
}

.weather-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(197, 157, 95, 0.2);
}

.weather-header h3 {
    margin: 0;
    color: #c59d5f;
    font-size: 1.5em;
    font-weight: 600;
}

.weather-live {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: #4ade80;
    font-size: 0.9em;
    font-weight: 500;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
}

.weather-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    margin-bottom: 25px;
}

.weather-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.weather-icon {
    font-size: 4.5em;
    line-height: 1;
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.weather-condition {
    font-size: 1.1em;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
}

.weather-right {
    text-align: right;
}

.weather-temp {
    font-size: 4em;
    font-weight: 700;
    color: #f4d03f;
    line-height: 1;
    text-shadow: 0 2px 10px rgba(244, 208, 63, 0.3);
}

.weather-range {
    display: flex;
    gap: 15px;
    margin-top: 10px;
    font-size: 1.1em;
}

.temp-min {
    color: #93c5fd;
}

.temp-max {
    color: #fca5a5;
}

.weather-details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 25px;
    padding-top: 20px;
    border-top: 1px solid rgba(197, 157, 95, 0.2);
}

.weather-detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    border: 1px solid rgba(197, 157, 95, 0.2);
}

.weather-detail-item.highlight {
    background: rgba(244, 208, 63, 0.15);
    border-color: #f4d03f;
}

.detail-icon {
    font-size: 1.8em;
}

.detail-label {
    flex: 1;
    font-size: 0.9em;
    opacity: 0.8;
}

.detail-value {
    font-weight: 700;
    font-size: 1.1em;
    color: #f4d03f;
}

.snow-alert {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 25px;
    padding: 20px;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 197, 253, 0.2) 100%);
    border: 2px solid rgba(59, 130, 246, 0.4);
    border-radius: 15px;
    animation: snowGlow 2s ease-in-out infinite;
}

@keyframes snowGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5); }
}

.snow-icon {
    font-size: 3em;
    animation: rotate 4s linear infinite;
}

@keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.snow-content {
    flex: 1;
}

.snow-amount {
    font-size: 1.3em;
    font-weight: 700;
    color: #60a5fa;
    margin-bottom: 5px;
}

.snow-message {
    font-size: 1em;
    opacity: 0.9;
}

.weather-footer {
    margin-top: 20px;
    padding-top: 15px;
    border-top: 1px solid rgba(197, 157, 95, 0.2);
    text-align: center;
}

.weather-footer small {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85em;
}

.weather-error {
    text-align: center;
    padding: 40px 20px;
    opacity: 0.8;
}

.weather-error p {
    margin: 10px 0;
}

/* Responsive */
@media (max-width: 768px) {
    .weather-main {
        flex-direction: column;
        text-align: center;
    }
    
    .weather-right {
        text-align: center;
    }
    
    .weather-temp {
        font-size: 3em;
    }
    
    .weather-icon {
        font-size: 3.5em;
    }
    
    .weather-details {
        grid-template-columns: 1fr;
    }
    
    .snow-alert {
        flex-direction: column;
        text-align: center;
    }
}
`;

// ============================================
// INJECTION AUTOMATIQUE DES STYLES
// ============================================
function injectWeatherStyles() {
    if (!document.getElementById('weather-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'weather-styles';
        styleElement.textContent = weatherStyles;
        document.head.appendChild(styleElement);
        console.log('✅ Styles météo injectés');
    }
}

// Auto-injection au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWeatherStyles);
} else {
    injectWeatherStyles();
}

console.log('✅ Module météo chargé');
