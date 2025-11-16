// monetization.js - Système d'affiliation pour Où Skier Ce Week-End

// Configuration des partenaires d'affiliation
const affiliatePartners = {
    // Forfaits & Séjours
    travelski: {
        name: "Travelski",
        platform: "Awin",
        baseUrl: "https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=XXXX&ued=",
        icon: "🎿",
        category: "forfait"
    },
    skiplanet: {
        name: "SkiPlanet", 
        platform: "TradeDoubler",
        baseUrl: "https://clk.tradedoubler.com/click?p=XXXX&a=XXXX&url=",
        icon: "⛷️",
        category: "forfait"
    },
    snowtrex: {
        name: "SnowTrex",
        platform: "Awin",
        baseUrl: "https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=XXXX&ued=",
        icon: "🏔️",
        category: "forfait"
    },
    
    // Location de ski
    skiset: {
        name: "Skiset",
        platform: "Effiliation",
        baseUrl: "https://action.effiliation.com/edit?id=XXXX&url=",
        icon: "🎿",
        category: "location"
    },
    intersport: {
        name: "Intersport",
        platform: "CJ",
        baseUrl: "https://www.intersport-rent.fr/?cjevent=",
        icon: "🛷",
        category: "location"
    },
    
    // Hébergement
    booking: {
        name: "Booking.com",
        platform: "Awin/CJ",
        baseUrl: "https://www.booking.com/searchresults.html?aid=XXXX&",
        icon: "🏨",
        category: "hebergement"
    },
    abritel: {
        name: "Abritel",
        platform: "CJ",
        baseUrl: "https://www.abritel.fr/search/keywords:",
        icon: "🏠",
        category: "hebergement"
    },
    
    // Cours de ski
    esf: {
        name: "ESF",
        platform: "Direct",
        baseUrl: "https://www.esf.net/",
        icon: "👨‍🏫",
        category: "cours"
    },
    checkyeti: {
        name: "CheckYeti",
        platform: "Direct API",
        baseUrl: "https://www.checkyeti.com/",
        icon: "🎓",
        category: "cours"
    },
    
    // Assurance
    chapka: {
        name: "Chapka Assurances",
        platform: "Awin",
        baseUrl: "https://www.awin1.com/cread.php?awinmid=XXXX&awinaffid=XXXX&ued=",
        icon: "🛡️",
        category: "assurance"
    }
};

// Générer les liens d'affiliation
function generateAffiliateLink(partner, stationName, region) {
    const partnerData = affiliatePartners[partner];
    if (!partnerData) return '#';
    
    // Encoder les paramètres pour l'URL
    const searchQuery = encodeURIComponent(`${stationName} ${region}`);
    
    // Construire l'URL selon le type de partenaire
    switch(partner) {
        case 'booking':
            return `${partnerData.baseUrl}ss=${searchQuery}&dest_type=region`;
        case 'skiset':
            return `${partnerData.baseUrl}https://skiset.com/station-ski/${slugify(stationName)}/`;
        case 'travelski':
        case 'snowtrex':
            return `${partnerData.baseUrl}https://www.${partner}.com/station/${slugify(stationName)}`;
        default:
            return partnerData.baseUrl;
    }
}

// Créer les cartes d'affiliation pour la page détail
function createAffiliateCards(station) {
    return `
        <div class="affiliate-section">
            <h2>🎁 Réservez votre séjour</h2>
            <p class="affiliate-subtitle">Partenaires de confiance pour organiser votre week-end au ski</p>
            
            <!-- Forfaits & Séjours -->
            <div class="affiliate-category">
                <h3>🎿 Forfaits & Séjours tout compris</h3>
                <div class="affiliate-cards">
                    <a href="${generateAffiliateLink('travelski', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🎿</div>
                        <h4>Travelski</h4>
                        <p>Séjours tout compris</p>
                        <span class="affiliate-badge">Partenaire officiel</span>
                    </a>
                    
                    <a href="${generateAffiliateLink('skiplanet', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">⛷️</div>
                        <h4>SkiPlanet</h4>
                        <p>Meilleurs prix garantis</p>
                        <span class="affiliate-badge">-15% avec le code WEEKEND</span>
                    </a>
                    
                    <a href="${generateAffiliateLink('snowtrex', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🏔️</div>
                        <h4>SnowTrex</h4>
                        <p>Plus de 1000 offres</p>
                        <span class="affiliate-badge">Paiement en 3x sans frais</span>
                    </a>
                </div>
            </div>
            
            <!-- Location de matériel -->
            <div class="affiliate-category">
                <h3>🎿 Location de matériel de ski</h3>
                <div class="affiliate-cards">
                    <a href="${generateAffiliateLink('skiset', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🎿</div>
                        <h4>Skiset</h4>
                        <p>Leader de la location</p>
                        <span class="affiliate-badge">-20% en ligne</span>
                    </a>
                    
                    <a href="${generateAffiliateLink('intersport', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🛷</div>
                        <h4>Intersport Rent</h4>
                        <p>Matériel premium</p>
                        <span class="affiliate-badge">Réservation gratuite</span>
                    </a>
                </div>
            </div>
            
            <!-- Hébergement -->
            <div class="affiliate-category">
                <h3>🏠 Hébergement à ${station.name}</h3>
                <div class="affiliate-cards">
                    <a href="${generateAffiliateLink('booking', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🏨</div>
                        <h4>Booking.com</h4>
                        <p>Hôtels et appartements</p>
                        <span class="affiliate-badge">Annulation gratuite</span>
                    </a>
                    
                    <a href="${generateAffiliateLink('abritel', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🏠</div>
                        <h4>Abritel</h4>
                        <p>Locations de vacances</p>
                        <span class="affiliate-badge">Chalets et appartements</span>
                    </a>
                </div>
            </div>
            
            <!-- Cours de ski -->
            <div class="affiliate-category">
                <h3>👨‍🏫 Cours de ski</h3>
                <div class="affiliate-cards">
                    <a href="${generateAffiliateLink('esf', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">👨‍🏫</div>
                        <h4>ESF</h4>
                        <p>École de Ski Française</p>
                        <span class="affiliate-badge">Moniteurs diplômés</span>
                    </a>
                    
                    <a href="${generateAffiliateLink('checkyeti', station.name, station.region)}" 
                       class="affiliate-card" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🎓</div>
                        <h4>CheckYeti</h4>
                        <p>Cours particuliers & collectifs</p>
                        <span class="affiliate-badge">Réservation instantanée</span>
                    </a>
                </div>
            </div>
            
            <!-- Assurance -->
            <div class="affiliate-category">
                <h3>🛡️ Assurance ski</h3>
                <div class="affiliate-cards">
                    <a href="${generateAffiliateLink('chapka', station.name, station.region)}" 
                       class="affiliate-card affiliate-card-full" target="_blank" rel="nofollow noopener">
                        <div class="affiliate-icon">🛡️</div>
                        <h4>Chapka Assurances</h4>
                        <p>Assurance annulation et rapatriement • À partir de 29€</p>
                        <span class="affiliate-badge">Protection complète</span>
                    </a>
                </div>
            </div>
            
            <div class="affiliate-disclaimer">
                <p><small>💡 Ces liens sont des liens d'affiliation. En réservant via ces partenaires, vous soutenez Où Skier Ce Week-End sans frais supplémentaires. Merci ! 🙏</small></p>
            </div>
        </div>
    `;
}

// Widget de comparaison de prix (sidebar)
function createPriceComparisonWidget(station) {
    return `
        <div class="price-widget">
            <h3>💰 Comparer les prix</h3>
            <p class="widget-subtitle">Trouvez la meilleure offre pour ${station.name}</p>
            
            <div class="price-comparison">
                <div class="price-row">
                    <span class="provider">Travelski</span>
                    <span class="price">À partir de ${station.skiPass + 50}€</span>
                    <a href="${generateAffiliateLink('travelski', station.name, station.region)}" 
                       class="price-btn" target="_blank" rel="nofollow">Voir</a>
                </div>
                <div class="price-row">
                    <span class="provider">SkiPlanet</span>
                    <span class="price">À partir de ${station.skiPass + 45}€</span>
                    <a href="${generateAffiliateLink('skiplanet', station.name, station.region)}" 
                       class="price-btn" target="_blank" rel="nofollow">Voir</a>
                </div>
                <div class="price-row highlight">
                    <span class="provider">SnowTrex</span>
                    <span class="price">À partir de ${station.skiPass + 40}€</span>
                    <a href="${generateAffiliateLink('snowtrex', station.name, station.region)}" 
                       class="price-btn" target="_blank" rel="nofollow">Voir</a>
                    <span class="best-price">Meilleur prix</span>
                </div>
            </div>
        </div>
    `;
}

// Bannière sticky de conversion
function createStickyBanner(station) {
    return `
        <div class="sticky-banner" id="stickyBanner">
            <div class="banner-content">
                <span class="banner-text">🎿 Prêt à skier à ${station.name} ?</span>
                <a href="${generateAffiliateLink('travelski', station.name, station.region)}" 
                   class="banner-btn" target="_blank" rel="nofollow">
                    Réserver maintenant
                </a>
                <button class="banner-close" onclick="closeStickyBanner()">✕</button>
            </div>
        </div>
    `;
}

// Fonctions utilitaires
function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[àáâãäå]/g, 'a')
        .replace(/[èéêë]/g, 'e')
        .replace(/[ìíîï]/g, 'i')
        .replace(/[òóôõö]/g, 'o')
        .replace(/[ùúûü]/g, 'u')
        .replace(/ç/g, 'c')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

function closeStickyBanner() {
    document.getElementById('stickyBanner').style.display = 'none';
    localStorage.setItem('bannerClosed', 'true');
}

// Afficher la bannière après 30 secondes de scroll
window.addEventListener('scroll', function() {
    if (localStorage.getItem('bannerClosed') !== 'true') {
        if (window.scrollY > 1000) {
            const banner = document.getElementById('stickyBanner');
            if (banner) banner.style.display = 'block';
        }
    }
});

/**
 * Tracking des clics sur liens d'affiliation
 * @param {string} partner - Nom du partenaire affilié
 * @param {string} category - Catégorie (skipass, equipment, lodging)
 * @param {string} station - Nom de la station
 */
function trackAffiliateClick(partner, category, station) {
    // Envoyer à Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
            'partner': partner,
            'category': category,
            'station': station,
            'event_label': `${partner}_${station}`
        });
    }
}