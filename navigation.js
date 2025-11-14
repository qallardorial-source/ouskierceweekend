/**
 * Navigation Mobile - Menu Hamburger
 * Gère l'ouverture/fermeture du menu mobile responsive
 */

(function() {
    'use strict';

    // Initialisation au chargement du DOM
    document.addEventListener('DOMContentLoaded', initNavigation);

    function initNavigation() {
        createHamburgerButton();
        setupEventListeners();
        handleActiveLink();
        updateFavoritesCounter();
    }

    /**
     * Crée le bouton hamburger dans la navigation
     */
    function createHamburgerButton() {
        const navContainer = document.querySelector('.nav-container');
        if (!navContainer) return;

        // Vérifier si le bouton existe déjà
        if (document.querySelector('.hamburger')) return;

        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.setAttribute('aria-label', 'Menu de navigation');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-controls', 'nav-menu');

        // Créer les 3 barres du hamburger
        for (let i = 0; i < 3; i++) {
            const span = document.createElement('span');
            span.setAttribute('aria-hidden', 'true');
            hamburger.appendChild(span);
        }

        navContainer.appendChild(hamburger);

        // Ajouter ID au menu pour l'accessibilité
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
            navMenu.id = 'nav-menu';
        }
    }

    /**
     * Configure les event listeners
     */
    function setupEventListeners() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (!hamburger || !navMenu) return;

        // Toggle menu au clic sur hamburger
        hamburger.addEventListener('click', () => toggleMenu(hamburger, navMenu));

        // Fermer le menu au clic sur un lien
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => closeMenu(hamburger, navMenu));
        });

        // Fermer le menu au clic en dehors
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu(hamburger, navMenu);
            }
        });

        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMenu(hamburger, navMenu);
                hamburger.focus(); // Retour focus sur le bouton
            }
        });

        // Gérer le redimensionnement de la fenêtre
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                    closeMenu(hamburger, navMenu);
                }
            }, 250);
        });
    }

    /**
     * Toggle l'état du menu
     */
    function toggleMenu(hamburger, navMenu) {
        const isActive = navMenu.classList.contains('active');

        if (isActive) {
            closeMenu(hamburger, navMenu);
        } else {
            openMenu(hamburger, navMenu);
        }
    }

    /**
     * Ouvre le menu
     */
    function openMenu(hamburger, navMenu) {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');

        // Empêcher le scroll du body quand le menu est ouvert
        document.body.style.overflow = 'hidden';
    }

    /**
     * Ferme le menu
     */
    function closeMenu(hamburger, navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');

        // Réactiver le scroll du body
        document.body.style.overflow = '';
    }

    /**
     * Marque le lien actif en fonction de la page courante
     */
    function handleActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');

            // Retirer les classes active existantes
            link.classList.remove('active');
            link.removeAttribute('aria-current');

            // Ajouter active au lien correspondant
            if (linkHref === currentPage ||
                (currentPage === '' && linkHref === 'index.html') ||
                (currentPage.includes('villes') && linkHref.includes('villes')) ||
                (currentPage.includes('blog') && linkHref.includes('blog'))) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            }
        });
    }

    /**
     * Met à jour le compteur de favoris
     */
    function updateFavoritesCounter() {
        const counters = document.querySelectorAll('.favorites-counter');

        // Récupérer le nombre de favoris depuis localStorage
        let favCount = 0;
        try {
            const favorites = JSON.parse(localStorage.getItem('skiResortFavorites') || '[]');
            favCount = favorites.length;
        } catch (e) {
            console.error('Erreur lecture favoris:', e);
        }

        counters.forEach(counter => {
            counter.textContent = favCount;
            counter.style.display = favCount > 0 ? 'inline' : 'none';
        });

        // Écouter les changements de favoris
        window.addEventListener('storage', updateFavoritesCounter);
        window.addEventListener('favoritesUpdated', updateFavoritesCounter);
    }

    // Exposer les fonctions publiques
    window.navigation = {
        updateFavoritesCounter
    };

})();
