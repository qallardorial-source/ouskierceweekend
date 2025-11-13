/**
 * api-utils.js - Utilitaires robustes pour les appels API
 * @description Gestion des appels API avec retry, timeout, cache et fallbacks
 * @version 1.0
 */

/**
 * Cache simple pour les requêtes API
 * @type {Map<string, {data: any, timestamp: number}>}
 */
const apiCache = new Map();

/**
 * Configuration par défaut pour les appels API
 */
const DEFAULT_CONFIG = {
    maxRetries: 3,
    retryDelay: 1000, // ms
    timeout: 5000, // ms
    cacheTTL: 300000, // 5 minutes
    useCache: true,
    exponentialBackoff: true
};

/**
 * Attend un délai spécifié
 * @param {number} ms - Délai en millisecondes
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Effectue un appel fetch avec timeout
 * @param {string} url - URL à appeler
 * @param {Object} options - Options fetch
 * @param {number} timeout - Timeout en ms
 * @returns {Promise<Response>}
 */
async function fetchWithTimeout(url, options = {}, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error(`Request timeout after ${timeout}ms`);
        }
        throw error;
    }
}

/**
 * Génère une clé de cache à partir d'une URL et d'options
 * @param {string} url - URL de la requête
 * @param {Object} options - Options de la requête
 * @returns {string} Clé de cache
 */
function getCacheKey(url, options = {}) {
    return `${url}_${JSON.stringify(options)}`;
}

/**
 * Vérifie si une entrée de cache est valide
 * @param {Object} entry - Entrée de cache
 * @param {number} ttl - TTL en ms
 * @returns {boolean}
 */
function isCacheValid(entry, ttl) {
    return entry && (Date.now() - entry.timestamp) < ttl;
}

/**
 * Appel API robuste avec retry, cache et fallback
 * @param {string} url - URL de l'API
 * @param {Object} options - Options de configuration
 * @param {Object} fetchOptions - Options pour fetch
 * @returns {Promise<any>} Données de la réponse
 */
async function robustFetch(url, options = {}, fetchOptions = {}) {
    const config = { ...DEFAULT_CONFIG, ...options };
    const cacheKey = getCacheKey(url, fetchOptions);

    // Vérifier le cache si activé
    if (config.useCache) {
        const cached = apiCache.get(cacheKey);
        if (isCacheValid(cached, config.cacheTTL)) {
            return cached.data;
        }
    }

    let lastError;

    // Tentatives avec retry
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
        try {
            if (attempt > 0) {
                const retryDelay = config.exponentialBackoff
                    ? config.retryDelay * Math.pow(2, attempt - 1)
                    : config.retryDelay;

                await delay(retryDelay);
            }

            const response = await fetchWithTimeout(url, fetchOptions, config.timeout);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Mettre en cache si activé
            if (config.useCache) {
                apiCache.set(cacheKey, {
                    data,
                    timestamp: Date.now()
                });
            }

            if (attempt > 0) {
                console.log(`✅ Succès après ${attempt} tentative(s)`);
            }

            return data;

        } catch (error) {
            lastError = error;

            // Ne pas retry si c'est une erreur 4xx (client error)
            if (error.message.includes('HTTP 4')) {
                break;
            }
        }
    }

    // Toutes les tentatives ont échoué
    throw lastError;
}

/**
 * Nettoie les entrées de cache expirées
 * @param {number} ttl - TTL en ms
 */
function cleanCache(ttl = DEFAULT_CONFIG.cacheTTL) {
    const now = Date.now();
    for (const [key, entry] of apiCache.entries()) {
        if ((now - entry.timestamp) > ttl) {
            apiCache.delete(key);
        }
    }
}

/**
 * Efface complètement le cache
 */
function clearCache() {
    apiCache.clear();
}

/**
 * Obtient les statistiques du cache
 * @returns {Object} Statistiques du cache
 */
function getCacheStats() {
    return {
        size: apiCache.size,
        keys: Array.from(apiCache.keys())
    };
}

// Nettoyage automatique du cache toutes les 10 minutes
if (typeof window !== 'undefined') {
    setInterval(() => cleanCache(), 600000);
}

// Export des fonctions
if (typeof window !== 'undefined') {
    window.apiUtils = {
        robustFetch,
        fetchWithTimeout,
        clearCache,
        getCacheStats,
        cleanCache,
        DEFAULT_CONFIG
    };
}
