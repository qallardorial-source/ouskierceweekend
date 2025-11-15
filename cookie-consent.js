/**
 * Configuration de la gestion du consentement aux cookies (RGPD)
 * Utilise Tarteaucitron.js - https://github.com/AmauriC/tarteaucitron.js
 */

// Initialisation de Tarteaucitron
tarteaucitron.init({
  "privacyUrl": "legal.html", // URL de la politique de confidentialité

  "bodyPosition": "bottom", // Position de la bannière (top, bottom)

  "hashtag": "#tarteaucitron", // Ancre pour ouvrir le panel

  "cookieName": "tarteaucitron", // Nom du cookie de consentement

  "orientation": "bottom", // Position de la bannière (middle, bottom)

  "groupServices": false, // Grouper les services par catégorie

  "serviceDefaultState": "wait", // État par défaut (wait, true, false)

  "showAlertSmall": true, // Afficher la petite alerte en bas
  "cookieslist": true, // Afficher la liste des cookies

  "closePopup": false, // Fermer la popup en cliquant à l'extérieur

  "showIcon": true, // Afficher l'icône en bas à gauche

  "iconPosition": "BottomLeft", // Position de l'icône (BottomRight, BottomLeft, TopRight, TopLeft)

  "adblocker": false, // Afficher un message si AdBlocker détecté

  "DenyAllCta": true, // Afficher le bouton "Tout refuser"
  "AcceptAllCta": true, // Afficher le bouton "Tout accepter"

  "highPrivacy": true, // Désactiver tous les services par défaut (conforme RGPD)

  "handleBrowserDNTRequest": true, // Respecter le paramètre Do Not Track du navigateur

  "removeCredit": false, // Enlever le crédit Tarteaucitron (false = garder)

  "moreInfoLink": true, // Afficher le lien "En savoir plus"

  "useExternalCss": false, // Utiliser un CSS externe

  "useExternalJs": false, // Utiliser un JS externe

  "readmoreLink": "legal.html", // Lien "En savoir plus"

  "mandatory": false, // Forcer l'affichage de la bannière

  "mandatoryCta": true, // Afficher les boutons même si mandatory est true

  "customCloserId": "" // ID personnalisé pour le bouton de fermeture
});

// Configuration de Google Analytics avec Tarteaucitron
// Le tracking ID sera défini dans chaque page HTML
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

/**
 * Fonction utilitaire pour vérifier si le consentement Analytics est donné
 * @returns {boolean} true si l'utilisateur a accepté les cookies analytics
 */
function hasAnalyticsConsent() {
  // Vérifier le cookie tarteaucitron
  const cookie = document.cookie.split('; ').find(row => row.startsWith('tarteaucitron='));
  if (!cookie) return false;

  const value = cookie.split('=')[1];
  try {
    const cookieObj = JSON.parse(decodeURIComponent(value));
    return cookieObj.gtag === true;
  } catch (e) {
    return false;
  }
}

/**
 * Fonction pour ouvrir le panel de gestion des cookies
 */
function openCookiePanel() {
  tarteaucitron.userInterface.openPanel();
  return false;
}

// Log pour debug
console.log('🍪 Tarteaucitron initialisé - Conformité RGPD activée');
