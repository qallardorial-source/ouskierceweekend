/**
 * Widget Station du Jour
 * Affiche une station mise en avant chaque jour (rotation automatique)
 */

class StationDuJour {
    constructor() {
        this.init();
    }

    /**
     * Initialise le widget
     */
    init() {
        // Attendre que skiResorts soit chargé
        if (typeof skiResorts === 'undefined') {
            setTimeout(() => this.init(), 100);
            return;
        }

        this.stations = this.getFeaturedStations();
        this.todayStation = this.getTodayStation();
    }

    /**
     * Sélectionne les stations vedettes (critères de qualité)
     */
    getFeaturedStations() {
        if (typeof skiResorts === 'undefined') return [];

        // Filtrer les stations de qualité pour la mise en avant
        return skiResorts.filter(station => {
            const hasImage = station.image && !station.image.includes('placeholder');
            const hasGoodData = station.skiPass && station.lodging;
            const domainSize = parseInt(station.slopes) || 0;
            const isReasonablePrice = station.skiPass < 70; // Prix accessible

            return hasImage && hasGoodData && domainSize > 50 && isReasonablePrice;
        });
    }

    /**
     * Récupère la station du jour (déterministe basé sur la date)
     */
    getTodayStation() {
        if (this.stations.length === 0) return null;

        // Utiliser la date comme seed pour avoir la même station toute la journée
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
        const index = dayOfYear % this.stations.length;

        return this.stations[index];
    }

    /**
     * Crée le HTML du widget
     */
    createWidgetHTML() {
        const station = this.todayStation;

        if (!station) {
            return '';
        }

        const totalPrice = (station.skiPass || 0) + (station.lodging || 0);
        const today = new Date();
        const dayName = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'][today.getDay()];
        const dateStr = today.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

        return `
            <div class="station-du-jour-widget">
                <div class="sdj-header">
                    <div class="sdj-badge">
                        <span class="sdj-icon">⭐</span>
                        <div>
                            <div class="sdj-title">Station du Jour</div>
                            <div class="sdj-date">${dayName} ${today.getDate()} ${today.toLocaleDateString('fr-FR', { month: 'long' })}</div>
                        </div>
                    </div>
                    <button onclick="stationDuJour.refresh()" class="sdj-refresh" title="Voir une autre station">
                        🔄
                    </button>
                </div>

                <div class="sdj-content">
                    <div class="sdj-image-container">
                        <img src="${station.image}"
                             alt="${station.name}"
                             class="sdj-image"
                             onerror="this.src='images/default-station.jpg'">
                        <div class="sdj-region-badge">${station.region}</div>
                    </div>

                    <div class="sdj-info">
                        <h3 class="sdj-station-name">${station.name}</h3>
                        <p class="sdj-description">${this.getShortDescription(station)}</p>

                        <div class="sdj-highlights">
                            <div class="sdj-highlight">
                                <span class="sdj-highlight-icon">🎿</span>
                                <div>
                                    <div class="sdj-highlight-value">${station.slopes}</div>
                                    <div class="sdj-highlight-label">de pistes</div>
                                </div>
                            </div>
                            <div class="sdj-highlight">
                                <span class="sdj-highlight-icon">⛰️</span>
                                <div>
                                    <div class="sdj-highlight-value">${station.altitude}</div>
                                    <div class="sdj-highlight-label">altitude max</div>
                                </div>
                            </div>
                            <div class="sdj-highlight">
                                <span class="sdj-highlight-icon">💰</span>
                                <div>
                                    <div class="sdj-highlight-value">${totalPrice}€</div>
                                    <div class="sdj-highlight-label">prix/jour</div>
                                </div>
                            </div>
                        </div>

                        <div class="sdj-features">
                            ${this.getBestFeatures(station).map(feature => `
                                <span class="sdj-feature-tag">✓ ${feature}</span>
                            `).join('')}
                        </div>

                        <div class="sdj-actions">
                            <a href="station-detail.html?id=${station.id}" class="sdj-btn-primary">
                                👁️ Découvrir cette station
                            </a>
                            <button onclick="favoritesManager.toggleFavorite('${station.id}')" class="sdj-btn-secondary">
                                ${typeof favoritesManager !== 'undefined' && favoritesManager.isFavorite(station.id) ? '❤️' : '🤍'} Favoris
                            </button>
                        </div>
                    </div>
                </div>

                <div class="sdj-footer">
                    <p style="margin: 0; opacity: 0.7; font-size: 0.85em;">
                        💡 Une nouvelle station est mise en avant chaque jour
                    </p>
                </div>
            </div>
        `;
    }

    /**
     * Génère une description courte
     */
    getShortDescription(station) {
        const descriptions = {
            'Débutant': 'Parfait pour apprendre à skier en toute sérénité',
            'Intermédiaire': 'Idéal pour progresser et se perfectionner',
            'Expert': 'Terrain de jeu pour skieurs confirmés',
            'Tous niveaux': 'Convient à toute la famille, quel que soit le niveau'
        };

        return descriptions[station.level] || station.description?.substring(0, 100) + '...' || 'Station de ski de qualité';
    }

    /**
     * Récupère les 3 meilleures caractéristiques
     */
    getBestFeatures(station) {
        const features = [];

        // Analyse des caractéristiques
        const domainSize = parseInt(station.slopes) || 0;
        if (domainSize > 150) {
            features.push('Grand domaine');
        } else if (domainSize > 50) {
            features.push('Domaine varié');
        }

        const altitude = parseInt(station.altitude) || 0;
        if (altitude > 2500) {
            features.push('Enneigement garanti');
        }

        const totalPrice = (station.skiPass || 0) + (station.lodging || 0);
        if (totalPrice < 150) {
            features.push('Excellent rapport qualité-prix');
        } else if (totalPrice < 180) {
            features.push('Prix abordable');
        }

        if (station.level?.includes('Débutant')) {
            features.push('Idéal débutants');
        }

        if (station.level?.includes('Tous niveaux')) {
            features.push('Pour toute la famille');
        }

        // Limiter à 3 features
        return features.slice(0, 3);
    }

    /**
     * Rafraîchir avec une station aléatoire
     */
    refresh() {
        if (this.stations.length === 0) return;

        const randomIndex = Math.floor(Math.random() * this.stations.length);
        this.todayStation = this.stations[randomIndex];

        const container = document.getElementById('stationDuJourContainer');
        if (container) {
            container.innerHTML = this.createWidgetHTML();
        }
    }

    /**
     * Rend le widget dans un conteneur
     */
    render(containerId = 'stationDuJourContainer') {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`Container ${containerId} not found for Station du Jour widget`);
            return;
        }

        container.innerHTML = this.createWidgetHTML();
    }
}

// Créer une instance globale
const stationDuJour = new StationDuJour();

// Styles CSS pour le widget
if (!document.getElementById('station-du-jour-styles')) {
    const style = document.createElement('style');
    style.id = 'station-du-jour-styles';
    style.textContent = `
        .station-du-jour-widget {
            background: linear-gradient(135deg, rgba(15, 32, 39, 0.95) 0%, rgba(32, 58, 67, 0.95) 100%);
            backdrop-filter: blur(30px);
            border-radius: 20px;
            overflow: hidden;
            border: 2px solid rgba(197, 157, 95, 0.3);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
            margin: 40px 0;
        }

        .sdj-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            background: rgba(197, 157, 95, 0.1);
            border-bottom: 1px solid rgba(197, 157, 95, 0.2);
        }

        .sdj-badge {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .sdj-icon {
            font-size: 2em;
            animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }

        .sdj-title {
            font-size: 1.3em;
            font-weight: 700;
            color: #c59d5f;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .sdj-date {
            font-size: 0.85em;
            color: rgba(255, 255, 255, 0.7);
        }

        .sdj-refresh {
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(197, 157, 95, 0.3);
            color: white;
            padding: 10px 15px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 1.2em;
            transition: all 0.3s;
        }

        .sdj-refresh:hover {
            background: rgba(197, 157, 95, 0.2);
            transform: rotate(180deg);
        }

        .sdj-content {
            display: grid;
            grid-template-columns: 400px 1fr;
            gap: 30px;
            padding: 30px;
        }

        .sdj-image-container {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            height: 300px;
        }

        .sdj-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .station-du-jour-widget:hover .sdj-image {
            transform: scale(1.05);
        }

        .sdj-region-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(135deg, #c59d5f 0%, #f4d03f 100%);
            color: #0f2027;
            padding: 8px 16px;
            border-radius: 20px;
            font-weight: 700;
            font-size: 0.85em;
        }

        .sdj-info {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .sdj-station-name {
            font-size: 2.2em;
            color: white;
            margin: 0;
            background: linear-gradient(135deg, #ffffff 0%, #c59d5f 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .sdj-description {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            font-size: 1.05em;
            margin: 0;
        }

        .sdj-highlights {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }

        .sdj-highlight {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(197, 157, 95, 0.2);
        }

        .sdj-highlight-icon {
            font-size: 1.8em;
        }

        .sdj-highlight-value {
            font-size: 1.3em;
            font-weight: 700;
            color: #c59d5f;
        }

        .sdj-highlight-label {
            font-size: 0.8em;
            color: rgba(255, 255, 255, 0.7);
        }

        .sdj-features {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .sdj-feature-tag {
            background: rgba(197, 157, 95, 0.2);
            color: #f4d03f;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 600;
            border: 1px solid rgba(197, 157, 95, 0.3);
        }

        .sdj-actions {
            display: flex;
            gap: 15px;
            margin-top: auto;
        }

        .sdj-btn-primary {
            flex: 1;
            padding: 15px 30px;
            background: linear-gradient(135deg, #c59d5f 0%, #f4d03f 100%);
            color: #0f2027;
            border: none;
            border-radius: 10px;
            font-weight: 700;
            font-size: 1.05em;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            text-align: center;
            display: inline-block;
        }

        .sdj-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(197, 157, 95, 0.5);
        }

        .sdj-btn-secondary {
            padding: 15px 30px;
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 2px solid rgba(197, 157, 95, 0.3);
            border-radius: 10px;
            font-weight: 700;
            cursor: pointer;
            transition: all 0.3s;
        }

        .sdj-btn-secondary:hover {
            background: rgba(197, 157, 95, 0.2);
            border-color: #c59d5f;
        }

        .sdj-footer {
            padding: 15px 30px;
            background: rgba(0, 0, 0, 0.2);
            text-align: center;
            color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 1024px) {
            .sdj-content {
                grid-template-columns: 1fr;
            }

            .sdj-image-container {
                height: 250px;
            }

            .sdj-highlights {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        @media (max-width: 768px) {
            .sdj-station-name {
                font-size: 1.6em;
            }

            .sdj-highlights {
                grid-template-columns: 1fr;
            }

            .sdj-actions {
                flex-direction: column;
            }

            .sdj-content {
                padding: 20px;
                gap: 20px;
            }
        }
    `;
    document.head.appendChild(style);
}
