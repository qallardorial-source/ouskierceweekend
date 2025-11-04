// API météo gratuite Open-Meteo
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
        console.error('Erreur météo:', error);
        return null;
    }
}

// Interprétation des codes météo
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
    
    return descriptions[code] || { text: 'Conditions inconnues', icon: '❓', color: '#9E9E9E' };
}

// Générer le HTML pour l'affichage météo
function createWeatherHTML(weather) {
    if (!weather) {
        return `
            <div class="weather-card">
                <p>Météo indisponible</p>
            </div>
        `;
    }
    
    const desc = getWeatherDescription(weather.weatherCode);
    
    // Condition d'enneigement
    let snowCondition = '';
    if (weather.snowfall > 0) {
        snowCondition = `
            <div class="snow-alert">
                ❄️ ${Math.round(weather.snowfall)}cm de neige fraîche !
            </div>
        `;
    }
    
    return `
        <div class="weather-card" style="border-left: 4px solid ${desc.color}">
            <div class="weather-main">
                <div class="weather-icon">${desc.icon}</div>
                <div class="weather-temp">${weather.temperature}°C</div>
            </div>
            <div class="weather-details">
                <p class="weather-description">${desc.text}</p>
                <p class="weather-range">Min: ${weather.tempMin}°C • Max: ${weather.tempMax}°C</p>
                <p class="weather-wind">💨 Vent: ${weather.windSpeed} km/h</p>
            </div>
            ${snowCondition}
        </div>
    `;
}

// Styles CSS pour la météo (à ajouter dans styles.css)
const weatherStyles = `
.weather-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin: 20px 0;
}

.weather-main {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
}

.weather-icon {
    font-size: 3em;
}

.weather-temp {
    font-size: 2.5em;
    font-weight: bold;
    color: #333;
}

.weather-details {
    color: #666;
}

.weather-description {
    font-size: 1.1em;
    margin-bottom: 8px;
    color: #444;
}

.weather-range, .weather-wind {
    font-size: 0.9em;
    margin: 5px 0;
}

.snow-alert {
    margin-top: 15px;
    padding: 12px;
    background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
    border-radius: 8px;
    font-weight: bold;
    color: #1976D2;
    text-align: center;
}
`;