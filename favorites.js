/**
 * favorites.js - Système de gestion des favoris
 * Permet aux utilisateurs de sauvegarder leurs stations préférées
 */

class FavoritesManager {
    constructor() {
        this.storageKey = 'ski-favorites';
        this.favorites = this.loadFavorites();
        this.initEventListeners();
    }

    /**
     * Charge les favoris depuis le LocalStorage
     * @returns {Array} Liste des IDs de stations favorites
     */
    loadFavorites() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Erreur chargement favoris:', error);
            return [];
        }
    }

    /**
     * Sauvegarde les favoris dans le LocalStorage
     * ℹ️ RGPD: Informe l'utilisateur la première fois
     */
    saveFavorites() {
        try {
            // Informer l'utilisateur la première fois (RGPD - transparence)
            if (!localStorage.getItem('favorites-info-shown')) {
                console.info('ℹ️ Vos favoris sont stockés localement sur votre appareil (pas de serveur distant)');
                localStorage.setItem('favorites-info-shown', 'true');
            }

            localStorage.setItem(this.storageKey, JSON.stringify(this.favorites));
            this.dispatchUpdateEvent();
        } catch (error) {
            console.error('Erreur sauvegarde favoris:', error);
        }
    }

    /**
     * Ajoute une station aux favoris
     * @param {string} stationId - ID de la station
     */
    addFavorite(stationId) {
        if (!this.isFavorite(stationId)) {
            this.favorites.push(stationId);
            this.saveFavorites();
            return true;
        }
        return false;
    }

    /**
     * Retire une station des favoris
     * @param {string} stationId - ID de la station
     */
    removeFavorite(stationId) {
        const index = this.favorites.indexOf(stationId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            this.saveFavorites();
            return true;
        }
        return false;
    }

    /**
     * Toggle favoris (ajoute si pas présent, retire si présent)
     * @param {string} stationId - ID de la station
     */
    toggleFavorite(stationId) {
        if (this.isFavorite(stationId)) {
            this.removeFavorite(stationId);
            return false;
        } else {
            this.addFavorite(stationId);
            return true;
        }
    }

    /**
     * Vérifie si une station est en favoris
     * @param {string} stationId - ID de la station
     * @returns {boolean}
     */
    isFavorite(stationId) {
        return this.favorites.includes(stationId);
    }

    /**
     * Récupère toutes les stations favorites
     * @returns {Array} Liste des objets stations
     */
    getFavoriteStations() {
        if (typeof skiResorts === 'undefined') return [];

        return this.favorites
            .map(id => skiResorts.find(s => s.id === id))
            .filter(s => s !== undefined);
    }

    /**
     * Nombre de favoris
     * @returns {number}
     */
    getCount() {
        return this.favorites.length;
    }

    /**
     * Vide tous les favoris
     */
    clearAll() {
        if (confirm('Supprimer tous les favoris ?')) {
            this.favorites = [];
            this.saveFavorites();
        }
    }

    /**
     * Exporte les favoris en URL partageable
     * @returns {string} URL avec favoris encodés
     */
    exportToURL() {
        const baseUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
        const favoriteIds = this.favorites.join(',');
        return `${baseUrl}favorites.html?stations=${encodeURIComponent(favoriteIds)}`;
    }

    /**
     * Importe des favoris depuis l'URL
     * @param {string} urlParams - Paramètres URL
     */
    importFromURL(urlParams) {
        const params = new URLSearchParams(urlParams);
        const stationIds = params.get('stations');

        if (stationIds) {
            const ids = stationIds.split(',').filter(id => id.trim());
            this.favorites = [...new Set([...this.favorites, ...ids])];
            this.saveFavorites();
        }
    }

    /**
     * Dispatch un événement custom quand les favoris changent
     */
    dispatchUpdateEvent() {
        window.dispatchEvent(new CustomEvent('favoritesUpdated', {
            detail: { count: this.getCount(), favorites: this.favorites }
        }));
    }

    /**
     * Initialise les écouteurs d'événements globaux
     */
    initEventListeners() {
        // Écouter les clics sur boutons favoris
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.favorite-btn');
            if (btn) {
                e.preventDefault();
                const stationId = btn.dataset.stationId;
                if (stationId) {
                    const isFav = this.toggleFavorite(stationId);
                    this.updateButtonUI(btn, isFav);
                }
            }
        });
    }

    /**
     * Met à jour l'UI d'un bouton favori
     * @param {HTMLElement} btn - Bouton à mettre à jour
     * @param {boolean} isFavorite - État favori
     */
    updateButtonUI(btn, isFavorite) {
        if (isFavorite) {
            btn.innerHTML = '❤️ Retiré des favoris';
            btn.classList.add('is-favorite');
            btn.setAttribute('aria-label', 'Retirer des favoris');
        } else {
            btn.innerHTML = '🤍 Ajouter aux favoris';
            btn.classList.remove('is-favorite');
            btn.setAttribute('aria-label', 'Ajouter aux favoris');
        }
    }

    /**
     * Crée un bouton favori pour une station
     * @param {string} stationId - ID de la station
     * @returns {string} HTML du bouton
     */
    createFavoriteButton(stationId) {
        const isFav = this.isFavorite(stationId);
        const icon = isFav ? '❤️' : '🤍';
        const text = isFav ? 'Retiré des favoris' : 'Ajouter aux favoris';
        const className = isFav ? 'favorite-btn is-favorite' : 'favorite-btn';

        return `
            <button class="${className}"
                    data-station-id="${stationId}"
                    aria-label="${text}"
                    title="${text}">
                ${icon} ${text}
            </button>
        `;
    }
}

// Initialisation globale
const favoritesManager = new FavoritesManager();

// Export pour utilisation dans d'autres scripts
if (typeof window !== 'undefined') {
    window.favoritesManager = favoritesManager;
}

// Mettre à jour le compteur dans la navigation
function updateFavoritesCounter() {
    const counter = document.querySelector('.favorites-counter');
    if (counter) {
        const count = favoritesManager.getCount();
        counter.textContent = count;
        counter.style.display = count > 0 ? 'inline-block' : 'none';
    }
}

// Écouter les changements de favoris
window.addEventListener('favoritesUpdated', () => {
    updateFavoritesCounter();
});

// Initialiser au chargement
document.addEventListener('DOMContentLoaded', () => {
    updateFavoritesCounter();
});
