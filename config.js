/**
 * config.js - Configuration centralisée de l'application
 * @description Contient tous les paramètres configurables de l'application
 * @version 1.0
 *
 * IMPORTANT: Remplacez les valeurs XXXX par vos vraies clés avant la mise en production
 */

const APP_CONFIG = {
    // ========================================
    // INFORMATIONS GÉNÉRALES
    // ========================================
    app: {
        name: 'Où Skier Ce Weekend',
        version: '2.0.0',
        environment: 'production', // 'development' ou 'production'
        baseUrl: 'https://ouskierceweeekend.fr',
        contactEmail: 'contact@ouskierceweeekend.fr'
    },

    // ========================================
    // GOOGLE ANALYTICS
    // ========================================
    analytics: {
        enabled: false, // Mettre à true après configuration
        trackingId: 'G-XXXXXXXXXX', // À REMPLACER par votre vrai ID
        cookieConsent: true, // Nécessite consentement cookies
        anonymizeIp: true,
        sampleRate: 100 // Pourcentage de tracking (1-100)
    },

    // ========================================
    // APIs EXTERNES
    // ========================================
    api: {
        // Open-Meteo (API météo gratuite)
        weather: {
            baseUrl: 'https://api.open-meteo.com/v1',
            timeout: 7000,
            cacheTime: 600000, // 10 minutes
            retries: 2
        },

        // Nominatim (Géocodage OpenStreetMap)
        geocoding: {
            baseUrl: 'https://nominatim.openstreetmap.org',
            userAgent: 'SkiFinder/2.0',
            timeout: 6000,
            cacheTime: 3600000, // 1 heure
            retries: 2,
            rateLimit: 1000 // Délai entre requêtes (ms)
        }
    },

    // ========================================
    // AFFILIATION - IDS PARTENAIRES
    // ========================================
    // ⚠️ IMPORTANT: Remplacez TOUS les XXXX par vos vrais IDs d'affiliation
    affiliation: {
        enabled: false, // Mettre à true après configuration des IDs

        // Forfaits de ski
        skiPass: {
            awin: {
                id: 'XXXX',
                clickRef: 'ouskier_skipass'
            },
            tradedoubler: {
                organization: 'XXXX',
                event: 'XXXX'
            }
        },

        // Location de matériel
        equipment: {
            awin: {
                id: 'XXXX',
                clickRef: 'ouskier_materiel'
            },
            sportamore: {
                id: 'XXXX'
            }
        },

        // Hébergement
        lodging: {
            booking: {
                aid: 'XXXX' // Booking.com Affiliate ID
            },
            awin: {
                id: 'XXXX',
                clickRef: 'ouskier_hebergement'
            }
        },

        // Cours de ski
        lessons: {
            effiliation: {
                id_compteur: 'XXXX'
            }
        },

        // Assurance
        insurance: {
            cj: {
                pid: 'XXXX',
                type: 'XXXX'
            }
        }
    },

    // ========================================
    // PARAMÈTRES DE L'INTERFACE
    // ========================================
    ui: {
        // Pagination
        itemsPerPage: 20,

        // Images
        imageLazyLoading: true,
        imagePlaceholder: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',

        // Animations
        enableAnimations: true,
        transitionDuration: 300, // ms

        // Recherche
        searchDebounce: 300, // ms
        minSearchLength: 2,

        // Filtres par défaut
        defaultSort: 'distance', // 'distance', 'price', 'name'
        defaultRegion: 'all'
    },

    // ========================================
    // PERFORMANCES
    // ========================================
    performance: {
        // Cache API
        enableApiCache: true,
        apiCacheTime: 600000, // 10 minutes

        // Preload
        preloadImages: false,
        preloadCriticalData: true,

        // Service Worker (PWA)
        enableServiceWorker: false
    },

    // ========================================
    // SÉCURITÉ
    // ========================================
    security: {
        // XSS Protection
        enableXssProtection: true,
        sanitizeInputs: true,

        // CSP (Content Security Policy)
        enableCsp: false, // À activer avec configuration serveur

        // Rate limiting (côté client)
        maxRequestsPerMinute: 60
    },

    // ========================================
    // ACCESSIBILITÉ
    // ========================================
    accessibility: {
        enableSkipLinks: true,
        enableKeyboardNav: true,
        announceUpdates: true,
        highContrastMode: false
    },

    // ========================================
    // DONNÉES STATIONS
    // ========================================
    data: {
        totalStations: 201,
        dataVersion: '1.0',
        lastUpdate: '2025-01-15'
    },

    // ========================================
    // FEATURES FLAGS (pour activation progressive)
    // ========================================
    features: {
        weatherWidget: true,
        distanceCalculation: true,
        priceComparison: true,
        userReviews: false, // À venir
        favorites: false, // À venir
        socialSharing: true,
        newsletter: false // À venir
    },

    // ========================================
    // SEO
    // ========================================
    seo: {
        defaultTitle: 'Où Skier Ce Weekend - Trouvez votre station de ski idéale',
        defaultDescription: 'Comparez 201 stations de ski françaises : prix, distance, météo en temps réel. Trouvez la station parfaite pour votre prochain weekend de ski.',
        defaultImage: '/images/og-image.png',
        twitterHandle: '@ouskierceweeekend',
        language: 'fr-FR',
        locale: 'fr_FR'
    },

    // ========================================
    // MÉTHODES UTILITAIRES
    // ========================================

    /**
     * Vérifie si l'application est en mode développement
     * @returns {boolean}
     */
    isDevelopment() {
        return this.app.environment === 'development';
    },

    /**
     * Vérifie si une fonctionnalité est activée
     * @param {string} feature - Nom de la fonctionnalité
     * @returns {boolean}
     */
    isFeatureEnabled(feature) {
        return this.features[feature] === true;
    },

    /**
     * Obtient l'URL complète d'une page
     * @param {string} path - Chemin relatif
     * @returns {string}
     */
    getFullUrl(path) {
        return `${this.app.baseUrl}/${path.replace(/^\//, '')}`;
    },

    /**
     * Vérifie si l'affiliation est configurée
     * @returns {boolean}
     */
    isAffiliationReady() {
        if (!this.affiliation.enabled) return false;

        // Vérifier si au moins un ID a été configuré
        const hasRealId = JSON.stringify(this.affiliation).includes('XXXX') === false;
        return hasRealId;
    },

    /**
     * Vérifie si Google Analytics est configuré
     * @returns {boolean}
     */
    isAnalyticsReady() {
        return this.analytics.enabled && !this.analytics.trackingId.includes('XXXX');
    }
};

// Freeze l'objet pour éviter les modifications accidentelles
Object.freeze(APP_CONFIG);

// Export pour utilisation globale
if (typeof window !== 'undefined') {
    window.APP_CONFIG = APP_CONFIG;
}

// Export pour Node.js (si utilisé côté serveur)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_CONFIG;
}
