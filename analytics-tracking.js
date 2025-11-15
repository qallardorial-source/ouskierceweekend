// analytics-tracking.js - Tracking avancé des événements (Conforme RGPD)

/**
 * Vérifie si l'utilisateur a donné son consentement pour les cookies analytics
 * @returns {boolean} true si le consentement est donné
 */
function hasAnalyticsConsent() {
  // 1. Respecter Do Not Track
  if (navigator.doNotTrack === '1' || window.doNotTrack === '1') {
    console.info('🛡️ Do Not Track activé - tracking désactivé');
    return false;
  }

  // 2. Vérifier le consentement Tarteaucitron
  const cookie = document.cookie.split('; ').find(row => row.startsWith('tarteaucitron='));
  if (!cookie) {
    // Pas encore de consentement donné
    return false;
  }

  const value = cookie.split('=')[1];
  try {
    const cookieObj = JSON.parse(decodeURIComponent(value));
    return cookieObj.gtag === true;
  } catch (e) {
    return false;
  }
}

/**
 * Envoie un événement vers Google Analytics
 * ⚠️ RGPD: Ne track que si consentement donné
 * @param {string} category - Catégorie de l'événement
 * @param {string} action - Action effectuée
 * @param {string} label - Label descriptif
 * @param {number} value - Valeur numérique optionnelle
 */
function trackEvent(category, action, label, value) {
  // Vérifier le consentement AVANT de tracker (RGPD)
  if (!hasAnalyticsConsent()) {
    return; // Ne pas tracker si pas de consentement
  }

  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      'event_category': category,
      'event_label': label,
      'value': value
    });
  }
}

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // 1. TRACKING RECHERCHE DE STATIONS
  // ============================================
  const searchBtn = document.getElementById('searchBtn');
  const locationInput = document.getElementById('locationInput');
  
  if (searchBtn && locationInput) {
    searchBtn.addEventListener('click', function() {
      const location = locationInput.value.trim();
      if (location) {
        trackEvent('Search', 'search_station', location);
      }
    });
    
    // Tracking recherche via Enter
    locationInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const location = this.value.trim();
        if (location) {
          trackEvent('Search', 'search_station', location);
        }
      }
    });
  }
  
  // ============================================
  // 2. TRACKING CLICS SUR CARTES STATIONS
  // ============================================
  document.querySelectorAll('.book-button').forEach(function(button) {
    button.addEventListener('click', function(e) {
      const card = this.closest('.resort-card');
      const stationName = card?.querySelector('.resort-name')?.textContent.trim();
      if (stationName) {
        trackEvent('Station', 'view_details', stationName);
      }
    });
  });
  
  // Tracking clics sur images de stations
  document.querySelectorAll('.image-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const card = this.closest('.resort-card');
      const stationName = card?.querySelector('.resort-name')?.textContent.trim();
      if (stationName) {
        trackEvent('Station', 'click_image', stationName);
      }
    });
  });
  
  // ============================================
  // 3. TRACKING UTILISATION DES FILTRES
  // ============================================
  const filters = {
    'distance': 'Distance',
    'region': 'Massif',
    'size': 'Taille domaine',
    'regionFilter': 'Filtre région',
    'levelFilter': 'Filtre niveau',
    'sortBy': 'Tri'
  };
  
  Object.keys(filters).forEach(function(filterId) {
    const filter = document.getElementById(filterId);
    if (filter) {
      filter.addEventListener('change', function() {
        trackEvent('Filter', 'change_filter', filters[filterId] + ': ' + this.value);
      });
    }
  });
  
  // ============================================
  // 4. TRACKING NAVIGATION
  // ============================================
  document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      trackEvent('Navigation', 'nav_click', this.textContent.trim());
    });
  });
  
  // ============================================
  // 5. TRACKING LIENS EXTERNES
  // ============================================
  document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
    link.addEventListener('click', function() {
      trackEvent('External', 'outbound_link', this.href);
    });
  });
  
  // ============================================
  // 6. TRACKING EMAIL CONTACT
  // ============================================
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      trackEvent('Contact', 'email_click', this.href.replace('mailto:', ''));
    });
  });
  
  // ============================================
  // 7. TRACKING ENGAGEMENT - Temps sur page
  // ============================================
  let engagementTracked = {
    '10s': false,
    '30s': false,
    '60s': false,
    '120s': false
  };
  
  setTimeout(function() {
    if (!engagementTracked['10s']) {
      trackEvent('Engagement', 'time_on_page', '10_seconds');
      engagementTracked['10s'] = true;
    }
  }, 10000);
  
  setTimeout(function() {
    if (!engagementTracked['30s']) {
      trackEvent('Engagement', 'time_on_page', '30_seconds');
      engagementTracked['30s'] = true;
    }
  }, 30000);
  
  setTimeout(function() {
    if (!engagementTracked['60s']) {
      trackEvent('Engagement', 'time_on_page', '1_minute');
      engagementTracked['60s'] = true;
    }
  }, 60000);
  
  setTimeout(function() {
    if (!engagementTracked['120s']) {
      trackEvent('Engagement', 'time_on_page', '2_minutes');
      engagementTracked['120s'] = true;
    }
  }, 120000);
  
  // ============================================
  // 8. TRACKING SCROLL DEPTH
  // ============================================
  let scrollDepthTracked = {
    '25': false,
    '50': false,
    '75': false,
    '100': false
  };
  
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
    
    if (scrollPercent >= 25 && !scrollDepthTracked['25']) {
      trackEvent('Engagement', 'scroll_depth', '25_percent');
      scrollDepthTracked['25'] = true;
    }
    if (scrollPercent >= 50 && !scrollDepthTracked['50']) {
      trackEvent('Engagement', 'scroll_depth', '50_percent');
      scrollDepthTracked['50'] = true;
    }
    if (scrollPercent >= 75 && !scrollDepthTracked['75']) {
      trackEvent('Engagement', 'scroll_depth', '75_percent');
      scrollDepthTracked['75'] = true;
    }
    if (scrollPercent >= 95 && !scrollDepthTracked['100']) {
      trackEvent('Engagement', 'scroll_depth', '100_percent');
      scrollDepthTracked['100'] = true;
    }
  });
  
  // ============================================
  // 9. TRACKING ERREURS 404 / IMAGES
  // ============================================
  document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('error', function() {
      trackEvent('Error', 'image_load_error', this.src);
    });
  });
  
  // ============================================
  // 10. TRACKING DEVICE TYPE
  // ============================================
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const deviceType = isMobile ? 'Mobile' : 'Desktop';
  trackEvent('Device', 'device_type', deviceType);
  
  // ============================================
  // 11. TRACKING TAILLE ÉCRAN
  // ============================================
  const screenSize = window.innerWidth + 'x' + window.innerHeight;
  trackEvent('Device', 'screen_size', screenSize);
  
  // ============================================
  // 12. TRACKING STATIONS AFFICHÉES (résultats)
  // ============================================
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.target.id === 'results' || mutation.target.id === 'stationsList') {
        const stationCards = document.querySelectorAll('.resort-card');
        if (stationCards.length > 0) {
          trackEvent('Search', 'results_displayed', stationCards.length + '_stations');
        }
      }
    });
  });
  
  const resultsDiv = document.getElementById('results') || document.getElementById('stationsList');
  if (resultsDiv) {
    observer.observe(resultsDiv, { childList: true });
  }
  
  // ============================================
  // 13. TRACKING BOUTON RESET FILTRES
  // ============================================
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      trackEvent('Filter', 'reset_filters', 'all_filters_reset');
    });
  }
  
  // ============================================
  // 14. TRACKING CTA BUTTONS
  // ============================================
  document.querySelectorAll('.cta-button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      trackEvent('CTA', 'cta_click', this.textContent.trim());
    });
  });
  
});

// ============================================
// TRACKING PAGE VIEW (automatique)
// ============================================
// Note: Page views sont trackés automatiquement par gtag('config')

// ============================================
// EXPORT POUR UTILISATION EXTERNE
// ============================================
window.trackCustomEvent = trackEvent;
