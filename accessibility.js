/**
 * accessibility.js - Améliorations de l'accessibilité
 * @description Gère l'accessibilité, ARIA, navigation clavier et skip links
 * @version 1.0
 */

/**
 * Initialise les améliorations d'accessibilité
 */
function initAccessibility() {
    addSkipLinks();
    improveKeyboardNavigation();
    addAriaLiveRegions();
    improveFocusVisibility();
}

/**
 * Ajoute des liens de saut pour la navigation au clavier
 */
function addSkipLinks() {
    const skipLinksHTML = `
        <div class="skip-links" role="navigation" aria-label="Liens de navigation rapide">
            <a href="#main-content" class="skip-link">Aller au contenu principal</a>
            <a href="#search-form" class="skip-link">Aller à la recherche</a>
            <a href="#footer" class="skip-link">Aller au pied de page</a>
        </div>
    `;

    // Insérer au début du body si pas déjà présent
    if (!document.querySelector('.skip-links')) {
        document.body.insertAdjacentHTML('afterbegin', skipLinksHTML);
    }

    // Ajouter les ID nécessaires si absents
    const mainContent = document.querySelector('main, .container, .main-content');
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }

    const footer = document.querySelector('footer, .footer');
    if (footer && !footer.id) {
        footer.id = 'footer';
    }
}

/**
 * Améliore la navigation au clavier
 */
function improveKeyboardNavigation() {
    // Gestion de la touche Échap pour fermer les modales/popups
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Fermer les éléments modaux si présents
            const modals = document.querySelectorAll('[role="dialog"], .modal, .popup');
            modals.forEach(modal => {
                if (modal.style.display !== 'none') {
                    modal.style.display = 'none';
                    modal.setAttribute('aria-hidden', 'true');
                }
            });
        }
    });

    // Navigation par tabulation dans les cartes de stations
    document.querySelectorAll('.resort-card, .station-card').forEach((card, index) => {
        if (!card.hasAttribute('tabindex')) {
            card.setAttribute('tabindex', '0');
        }

        // Activer la carte avec Entrée ou Espace
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = card.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });

    // Améliorer les filtres et boutons
    document.querySelectorAll('.filter-button, .cta-button, button').forEach(button => {
        // S'assurer que les boutons ont un rôle explicite
        if (!button.hasAttribute('role') && button.tagName !== 'BUTTON') {
            button.setAttribute('role', 'button');
        }

        // Ajouter aria-pressed pour les boutons de filtre
        if (button.classList.contains('filter-button')) {
            const isActive = button.classList.contains('active');
            button.setAttribute('aria-pressed', isActive);
        }
    });
}

/**
 * Ajoute des régions ARIA live pour les mises à jour dynamiques
 */
function addAriaLiveRegions() {
    // Zone pour annoncer les résultats de recherche
    const resultsContainer = document.querySelector('.results, #results, .resorts-grid');
    if (resultsContainer) {
        resultsContainer.setAttribute('role', 'region');
        resultsContainer.setAttribute('aria-live', 'polite');
        resultsContainer.setAttribute('aria-atomic', 'false');
        resultsContainer.setAttribute('aria-label', 'Résultats de recherche');
    }

    // Zone météo
    const weatherContainer = document.querySelector('.weather-card, #weather');
    if (weatherContainer) {
        weatherContainer.setAttribute('role', 'complementary');
        weatherContainer.setAttribute('aria-label', 'Informations météorologiques');
    }
}

/**
 * Améliore la visibilité du focus clavier
 */
function improveFocusVisibility() {
    // Ajouter une classe lors de la navigation au clavier
    let usingKeyboard = false;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            usingKeyboard = true;
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', () => {
        usingKeyboard = false;
        document.body.classList.remove('keyboard-navigation');
    });
}

/**
 * Annonce un message aux lecteurs d'écran
 * @param {string} message - Message à annoncer
 * @param {string} priority - Priorité: 'polite' ou 'assertive'
 */
function announceToScreenReader(message, priority = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.classList.add('sr-only');
    announcement.textContent = message;

    document.body.appendChild(announcement);

    // Retirer l'annonce après 1 seconde
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

/**
 * Vérifie et corrige les problèmes d'accessibilité courants
 */
function checkAccessibility() {
    const issues = [];

    // Vérifier les images sans alt
    document.querySelectorAll('img:not([alt])').forEach(img => {
        img.setAttribute('alt', '');
        issues.push('Image sans attribut alt corrigée');
    });

    // Vérifier les liens sans texte
    document.querySelectorAll('a:not([aria-label])').forEach(link => {
        if (!link.textContent.trim() && !link.querySelector('img[alt]')) {
            issues.push('Lien sans texte détecté');
        }
    });

    // Vérifier les boutons sans label
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (!button.textContent.trim()) {
            issues.push('Bouton sans label détecté');
        }
    });

    return issues;
}

// Styles CSS pour l'accessibilité
const accessibilityStyles = `
/* Skip links */
.skip-links {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10000;
}

.skip-link {
    position: absolute;
    left: -9999px;
    top: 0;
    padding: 10px 20px;
    background: #c59d5f;
    color: #0f2027;
    text-decoration: none;
    font-weight: bold;
    z-index: 10001;
}

.skip-link:focus {
    left: 0;
    outline: 3px solid #f4d03f;
    outline-offset: 2px;
}

/* Screen reader only */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

/* Focus visible pour navigation clavier */
body.keyboard-navigation *:focus {
    outline: 3px solid #f4d03f !important;
    outline-offset: 2px !important;
}

/* Focus amélioré pour les cartes */
.resort-card:focus,
.station-card:focus {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(244, 208, 63, 0.3);
    outline: 3px solid #f4d03f;
}

/* Amélioration du contraste pour les boutons */
.cta-button:focus,
button:focus,
.filter-button:focus {
    outline: 3px solid #f4d03f;
    outline-offset: 3px;
}

/* Indicateur de focus pour les liens */
a:focus {
    outline: 2px solid #f4d03f;
    outline-offset: 2px;
}
`;

/**
 * Injecte les styles d'accessibilité
 */
function injectAccessibilityStyles() {
    if (!document.getElementById('accessibility-styles')) {
        const styleElement = document.createElement('style');
        styleElement.id = 'accessibility-styles';
        styleElement.textContent = accessibilityStyles;
        document.head.appendChild(styleElement);
    }
}

// Initialisation automatique au chargement
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        injectAccessibilityStyles();
        initAccessibility();
    });
} else {
    injectAccessibilityStyles();
    initAccessibility();
}

// Export pour utilisation externe
if (typeof window !== 'undefined') {
    window.accessibility = {
        announce: announceToScreenReader,
        check: checkAccessibility,
        init: initAccessibility
    };
}
