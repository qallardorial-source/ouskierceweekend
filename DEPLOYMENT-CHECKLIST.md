# 🚀 Checklist de Déploiement Officiel - Où Skier Ce Weekend

**Date de création:** 16 novembre 2025
**Version cible:** 2.0.0 (Production Ready)
**Statut:** En préparation

---

## 📋 Table des Matières

1. [Configuration Critique](#1-configuration-critique)
2. [Contenu et Données](#2-contenu-et-données)
3. [Sécurité et RGPD](#3-sécurité-et-rgpd)
4. [SEO et Performance](#4-seo-et-performance)
5. [Tests et Validation](#5-tests-et-validation)
6. [Infrastructure et Hébergement](#6-infrastructure-et-hébergement)
7. [Monétisation](#7-monétisation)
8. [Post-Déploiement](#8-post-déploiement)

---

## 1. Configuration Critique

### 🔑 IDs et Clés API

- [ ] **Google Analytics 4**
  - [ ] Créer un compte Google Analytics 4
  - [ ] Obtenir l'ID de suivi (format: G-XXXXXXXXXX)
  - [ ] Remplacer `G-XXXXXXXXXX` dans `/config.js` ligne 26
  - [ ] Remplacer `G-XXXXXXXXXX` dans `/index.html` ligne 54
  - [ ] Remplacer `G-XXXXXXXXXX` dans `/stations.html`
  - [ ] Remplacer `G-XXXXXXXXXX` dans `/about.html`
  - [ ] Activer Analytics : `analytics.enabled: true` dans `config.js`

- [ ] **Email de Contact**
  - [ ] Vérifier l'email dans `config.js` ligne 18
  - [ ] Vérifier l'email dans la page `legal.html`
  - [ ] Vérifier l'email dans la page `about.html`
  - [ ] Configurer la boîte mail professionnelle

### 💰 Affiliation

- [ ] **Skiset (Location de matériel)**
  - [ ] S'inscrire sur [TradeTracker](https://www.tradetracker.com/) OU [Awin](https://www.awin.com/)
  - [ ] Demander adhésion au programme Skiset
  - [ ] Obtenir les IDs d'affiliation
  - [ ] Remplacer les `XXXX` dans `config.js` lignes 81-87
  - [ ] Choisir la plateforme (ligne 79): `'tradetracker'` ou `'awin'`

- [ ] **Booking.com (Hébergement)**
  - [ ] S'inscrire sur [Booking Partner Programme](https://www.booking.com/affiliate-program/)
  - [ ] Obtenir l'Affiliate ID
  - [ ] Remplacer `XXXX` dans `config.js` ligne 103

- [ ] **RentalCars (Location de voiture)**
  - [ ] S'inscrire sur [RentalCars Affiliate](https://www.rentalcars.com/Affiliates.do)
  - [ ] Obtenir le lien d'affiliation
  - [ ] Mettre à jour le lien dans `station-detail.html` (rechercher "rentalcars")

- [ ] **Trainline (Billets de train)**
  - [ ] S'inscrire au programme d'affiliation Trainline
  - [ ] Obtenir le lien d'affiliation
  - [ ] Mettre à jour les liens dans `station-detail.html`

- [ ] **Skyscanner (Vols)**
  - [ ] S'inscrire sur [Skyscanner Partners](https://partners.skyscanner.net/)
  - [ ] Obtenir le lien d'affiliation
  - [ ] Mettre à jour les liens dans `station-detail.html`

- [ ] **Activer l'affiliation**
  - [ ] Dans `config.js` ligne 60, passer `enabled: true`
  - [ ] Vérifier qu'il ne reste AUCUN `XXXX` dans `config.js`

---

## 2. Contenu et Données

### 📸 Images

- [ ] **Inventaire des images**
  - [x] ~30 images de stations actuellement présentes
  - [ ] Compléter les 171 images manquantes (201 stations au total)
  - [ ] Sources recommandées:
    - Sites officiels des stations (avec autorisation)
    - [Unsplash.com](https://unsplash.com) (licence libre)
    - [Pixabay.com](https://pixabay.com) (licence libre)
    - [Pexels.com](https://pexels.com) (licence libre)

- [ ] **Optimisation des images**
  - [ ] Convertir les PNG en WebP (réduction ~60% de poids)
  - [ ] Créer des versions responsive (mobile, tablet, desktop)
  - [ ] Ajouter l'attribut `alt` descriptif pour toutes les images
  - [ ] Compresser les images (cible: <300 KB par image)
  - [ ] Outils recommandés:
    - [TinyPNG.com](https://tinypng.com)
    - [Squoosh.app](https://squoosh.app)
    - Commande: `npm install -g @squoosh/cli && squoosh-cli --webp auto images/*.png`

- [ ] **Image Open Graph**
  - [ ] Créer `/images/og-image.jpg` (1200x630px)
  - [ ] Vérifier la présence dans toutes les pages HTML

### 📝 Contenu Textuel

- [ ] **Pages principales**
  - [x] Page d'accueil (`index.html`)
  - [x] Liste des stations (`stations.html`)
  - [x] Détail station (`station-detail.html`)
  - [x] À propos (`about.html`)
  - [x] Mentions légales (`legal.html`)
  - [x] CGU (`cgu.html`)
  - [x] Favoris (`favorites.html`)
  - [x] Comparateur (`compare.html`)

- [ ] **Pages villes** (36 villes)
  - [x] Vérifier que toutes les pages villes sont présentes
  - [ ] Relire le contenu pour fautes d'orthographe
  - [ ] Vérifier les distances et prix (données réalistes)

- [ ] **Blog** (optionnel)
  - [ ] Publier au moins 5 articles initiaux
  - [ ] Optimiser les balises SEO de chaque article
  - [ ] Ajouter des liens internes vers les stations

### 📊 Données des Stations

- [ ] **Vérification des données** (`stations-data.js`)
  - [ ] Vérifier que les 201 stations sont présentes
  - [ ] Mettre à jour les prix forfaits 2025-2026
  - [ ] Mettre à jour les dates d'ouverture/fermeture
  - [ ] Vérifier les coordonnées GPS (lat/lon)
  - [ ] Vérifier les altitudes et km de pistes
  - [ ] Vérifier les URLs des images

---

## 3. Sécurité et RGPD

### 🔒 Sécurité

- [ ] **Protection XSS**
  - [x] Validation des entrées utilisateur activée
  - [x] Sanitization dans `api-utils.js`
  - [x] Validation des paramètres URL dans `station-detail.html`

- [ ] **HTTPS**
  - [ ] Obtenir un certificat SSL/TLS
  - [ ] Configurer le serveur en HTTPS
  - [ ] Rediriger HTTP → HTTPS automatiquement
  - [ ] Vérifier avec [SSL Labs](https://www.ssllabs.com/ssltest/)

- [ ] **En-têtes de sécurité** (configuration serveur)
  - [ ] Content-Security-Policy (CSP)
  - [ ] X-Frame-Options: DENY
  - [ ] X-Content-Type-Options: nosniff
  - [ ] Referrer-Policy: no-referrer-when-downgrade
  - [ ] Permissions-Policy

- [ ] **Fichier .htaccess** (si Apache)
  - [ ] Copier le fichier `htaccess` en `.htaccess`
  - [ ] Vérifier les redirections
  - [ ] Activer la compression Gzip/Brotli

### 🍪 RGPD (Conformité)

- [ ] **Gestion des cookies**
  - [x] Tarteaucitron.js installé
  - [x] Banner de consentement configuré
  - [x] Google Analytics bloqué sans consentement
  - [ ] Tester le refus des cookies
  - [ ] Tester l'acceptation des cookies

- [ ] **Mentions légales**
  - [ ] Vérifier les coordonnées dans `legal.html`
  - [ ] Ajouter numéro SIRET/SIREN si entreprise
  - [ ] Ajouter hébergeur du site
  - [ ] Ajouter DPO (Data Protection Officer) si applicable

- [ ] **Politique de confidentialité**
  - [ ] Mentionner Google Analytics
  - [ ] Mentionner les cookies d'affiliation
  - [ ] Mentionner le droit d'accès/suppression
  - [ ] Ajouter lien email de contact RGPD

- [ ] **CGU (Conditions Générales)**
  - [x] Page CGU créée
  - [ ] Relire et adapter au contexte légal français

---

## 4. SEO et Performance

### 🔍 Référencement (SEO)

- [ ] **Sitemap**
  - [ ] Générer le sitemap: `node generate-sitemap.js`
  - [ ] Vérifier la présence des 201 + 8 + 36 = 245 URLs
  - [ ] Uploader `sitemap.xml` à la racine
  - [ ] Soumettre à [Google Search Console](https://search.google.com/search-console)
  - [ ] Soumettre à [Bing Webmaster Tools](https://www.bing.com/webmasters)

- [ ] **Robots.txt**
  - [x] Fichier `robots.txt` présent
  - [ ] Vérifier l'URL du sitemap (ligne 41)
  - [ ] Tester avec [Google Robots Testing Tool](https://www.google.com/webmasters/tools/robots-testing-tool)

- [ ] **Balises Meta**
  - [x] Toutes les pages ont title + description uniques
  - [x] Open Graph configuré
  - [x] Twitter Cards configurés
  - [x] Canonical URLs présentes
  - [ ] Vérifier avec [Yoast Meta Tags Analyzer](https://yoast.com/research/meta-description-generator/)

- [ ] **Schema.org (Données structurées)**
  - [x] Schema WebApplication sur page d'accueil
  - [x] FAQ Schema sur plusieurs pages
  - [ ] Ajouter Schema "SkiResort" sur pages stations
  - [ ] Tester avec [Google Rich Results Test](https://search.google.com/test/rich-results)

- [ ] **Liens internes**
  - [x] Navigation cohérente sur toutes les pages
  - [ ] Vérifier absence de liens cassés
  - [ ] Outil: [Broken Link Checker](https://www.brokenlinkcheck.com/)

### ⚡ Performance

- [ ] **Optimisation fichiers**
  - [ ] Minifier CSS: `styles.css`, `design-tokens.css`, `monetization.css`
  - [ ] Minifier JavaScript: tous les `.js`
  - [ ] Outils: [UglifyJS](https://github.com/mishoo/UglifyJS), [CSSNano](https://cssnano.co/)
  - [ ] Concaténer les JS en 3 fichiers max (vendor, app, pages)

- [ ] **Compression serveur**
  - [ ] Activer Gzip pour HTML/CSS/JS
  - [ ] Activer Brotli si possible (meilleur que Gzip)
  - [ ] Vérifier avec [GiftOfSpeed Compression Test](https://www.giftofspeed.com/gzip-test/)

- [ ] **Cache navigateur** (via .htaccess ou headers)
  - [ ] Images: 1 an (`Cache-Control: max-age=31536000`)
  - [ ] CSS/JS: 1 mois
  - [ ] HTML: 1 heure

- [ ] **CDN (optionnel mais recommandé)**
  - [ ] Considérer Cloudflare (gratuit)
  - [ ] Avantages: CDN global + DDoS protection + cache

- [ ] **Lazy Loading**
  - [x] Images avec `loading="lazy"` activé
  - [x] Implémentation dans `app.js`

- [ ] **Tests de performance**
  - [ ] [Google PageSpeed Insights](https://pagespeed.web.dev/) - Score cible: >90
  - [ ] [GTmetrix](https://gtmetrix.com/) - Grade cible: A
  - [ ] [WebPageTest](https://www.webpagetest.org/) - Analyse détaillée
  - [ ] Vérifier sur mobile ET desktop

---

## 5. Tests et Validation

### 🧪 Tests Fonctionnels

- [ ] **Navigation**
  - [ ] Tester tous les liens du menu
  - [ ] Tester les liens villes (36 pages)
  - [ ] Tester les liens stations (201 pages)
  - [ ] Vérifier bouton retour arrière
  - [ ] Tester menu hamburger mobile

- [ ] **Recherche de stations**
  - [ ] Recherche par ville (tester 5-10 villes différentes)
  - [ ] Calcul de distance fonctionne
  - [ ] Filtres (région, distance, taille domaine)
  - [ ] Tri (prix, distance, nom, altitude)
  - [ ] Affichage des résultats

- [ ] **Page Détail Station**
  - [ ] Météo s'affiche (tester 5-10 stations)
  - [ ] Onglets fonctionnent (Infos, Pratique, Avis)
  - [ ] Boutons d'affiliation (vérifier les URLs)
  - [ ] Partage social
  - [ ] Favoris

- [ ] **Favoris**
  - [ ] Ajouter/retirer des favoris
  - [ ] Compteur dans le menu
  - [ ] Page favoris affiche la liste
  - [ ] Persistance (localStorage)

- [ ] **Comparateur**
  - [ ] Sélectionner 2-4 stations
  - [ ] Barre de comparaison apparaît
  - [ ] Page compare.html affiche le tableau
  - [ ] Données correctes

- [ ] **Cookies et RGPD**
  - [ ] Banner de consentement s'affiche
  - [ ] Accepter les cookies
  - [ ] Refuser les cookies
  - [ ] Gérer les préférences
  - [ ] Google Analytics se charge SEULEMENT si accepté

### 🌐 Tests Multi-navigateurs

- [ ] **Desktop**
  - [ ] Chrome (dernière version)
  - [ ] Firefox (dernière version)
  - [ ] Safari (macOS)
  - [ ] Edge (dernière version)

- [ ] **Mobile**
  - [ ] Safari iOS (iPhone)
  - [ ] Chrome Android
  - [ ] Samsung Internet

- [ ] **Tablette**
  - [ ] iPad Safari
  - [ ] Android Chrome

### ♿ Tests d'Accessibilité

- [ ] **Navigation clavier**
  - [ ] Tab/Shift+Tab fonctionne partout
  - [ ] Enter/Space active les boutons
  - [ ] Escape ferme les modales/menu
  - [ ] Focus visible sur tous les éléments

- [ ] **Lecteur d'écran**
  - [ ] Tester avec NVDA (Windows) ou JAWS
  - [ ] Tester avec VoiceOver (macOS/iOS)
  - [ ] Tous les textes sont annoncés
  - [ ] Attributs ARIA corrects

- [ ] **Outils automatiques**
  - [ ] [WAVE](https://wave.webaim.org/) - 0 erreur cible
  - [ ] [axe DevTools](https://www.deque.com/axe/) - Extension Chrome
  - [ ] [Lighthouse Accessibility](https://web.dev/accessibility-scoring/) - Score >90

- [ ] **Contraste des couleurs**
  - [ ] Vérifier ratio WCAG AA (4.5:1 pour texte)
  - [ ] Outil: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 📱 Tests Responsive

- [ ] **Points de rupture**
  - [ ] Mobile portrait (320px-480px)
  - [ ] Mobile paysage (481px-768px)
  - [ ] Tablette portrait (769px-1024px)
  - [ ] Desktop (1025px+)

- [ ] **Éléments à vérifier**
  - [ ] Images s'adaptent
  - [ ] Texte lisible sans zoom
  - [ ] Boutons assez grands (min 44x44px)
  - [ ] Pas de scroll horizontal
  - [ ] Menu hamburger fonctionne

### 🔍 Validation du Code

- [ ] **HTML**
  - [ ] [W3C HTML Validator](https://validator.w3.org/)
  - [ ] Corriger toutes les erreurs critiques
  - [ ] Warnings acceptables si justifiés

- [ ] **CSS**
  - [ ] [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
  - [ ] Vérifier compatibilité navigateurs

- [ ] **JavaScript**
  - [ ] Aucune erreur dans la console
  - [ ] Tester en mode strict (`'use strict'`)

---

## 6. Infrastructure et Hébergement

### 🖥️ Hébergement

- [ ] **Choix de l'hébergeur**
  - Options recommandées:
    - [ ] [Netlify](https://www.netlify.com/) - Gratuit, facile, CDN inclus
    - [ ] [Vercel](https://vercel.com/) - Gratuit, très rapide
    - [ ] [GitHub Pages](https://pages.github.com/) - Gratuit (si repo public)
    - [ ] [OVH](https://www.ovh.com/) - Hébergeur français
    - [ ] [O2switch](https://www.o2switch.fr/) - Hébergeur français, illimité

- [ ] **Configuration serveur**
  - [ ] Upload de tous les fichiers
  - [ ] Vérifier les permissions (755 pour dossiers, 644 pour fichiers)
  - [ ] Configurer le nom de domaine
  - [ ] Configurer les DNS

### 🌍 Nom de Domaine

- [ ] **Domaine principal**
  - [x] `ouskierceweeekend.fr` réservé
  - [ ] Renouvellement auto activé
  - [ ] Whois protégé (confidentialité)

- [ ] **Configuration DNS**
  - [ ] Record A → IP du serveur
  - [ ] Record CNAME www → domaine principal
  - [ ] Propagation DNS vérifiée ([DNS Checker](https://dnschecker.org/))

- [ ] **Email professionnel**
  - [ ] Configurer `contact@ouskierceweeekend.fr`
  - [ ] SPF, DKIM, DMARC configurés
  - [ ] Tester réception/envoi

### 🔧 Configuration Technique

- [ ] **Fichier .htaccess** (Apache)
  - [ ] Redirection www → non-www (ou inverse)
  - [ ] Redirection HTTP → HTTPS
  - [ ] Compression Gzip
  - [ ] Cache navigateur
  - [ ] Protection fichiers sensibles

- [ ] **Monitoring**
  - [ ] Configurer Google Search Console
  - [ ] Configurer Bing Webmaster Tools
  - [ ] Uptime monitoring ([UptimeRobot](https://uptimerobot.com/) gratuit)
  - [ ] Google Analytics 4

- [ ] **Backup**
  - [ ] Sauvegarde automatique hebdomadaire
  - [ ] Sauvegarde manuelle avant changements majeurs
  - [ ] Tester la restauration

---

## 7. Monétisation

### 💸 Affiliation

- [ ] **Vérification des liens**
  - [ ] Cliquer sur tous les boutons d'affiliation
  - [ ] Vérifier que les paramètres sont présents dans l'URL
  - [ ] Exemple Skiset: `?tt=XXXX&r=XXXX` (TradeTracker)
  - [ ] Exemple Booking: `?aid=XXXX`

- [ ] **Tracking**
  - [ ] Configurer des `clickRef` uniques par page
  - [ ] Exemples:
    - `ouskier_homepage`
    - `ouskier_station_chamonix`
    - `ouskier_ville_paris`

- [ ] **Tests de conversion**
  - [ ] Tester un achat test (si possible)
  - [ ] Vérifier apparition dans dashboard affilié
  - [ ] Délai de tracking: 24-48h généralement

### 📊 Analytics et Conversions

- [ ] **Google Analytics 4**
  - [ ] Événements personnalisés:
    - Clic sur bouton Skiset
    - Clic sur bouton Booking
    - Clic sur lien train/voiture/avion
    - Ajout favoris
    - Partage social
  - [ ] Objectifs de conversion configurés
  - [ ] Funnel de conversion analysé

- [ ] **Tableaux de bord**
  - [ ] Dashboard affiliés (Awin, TradeTracker, etc.)
  - [ ] Google Analytics
  - [ ] Google Search Console
  - [ ] Vérification hebdomadaire recommandée

---

## 8. Post-Déploiement

### 🚦 Lancement

- [ ] **Soft Launch (Phase 1)**
  - [ ] Déployer le site
  - [ ] Tester toutes les fonctionnalités en production
  - [ ] Vérifier Analytics (1-2 jours de données)
  - [ ] Corriger les bugs éventuels

- [ ] **SEO Initial (Semaine 1)**
  - [ ] Soumettre sitemap à Google Search Console
  - [ ] Soumettre sitemap à Bing Webmaster
  - [ ] Vérifier indexation (commande: `site:ouskierceweeekend.fr`)
  - [ ] Demander indexation manuelle des pages principales

- [ ] **Official Launch (Semaine 2)**
  - [ ] Annonce sur réseaux sociaux
  - [ ] Email aux premiers utilisateurs (si liste)
  - [ ] Communiqué de presse (optionnel)

### 📈 Suivi et Optimisation

- [ ] **Semaine 1**
  - [ ] Vérifier Google Analytics quotidiennement
  - [ ] Corriger bugs remontés
  - [ ] Vérifier taux d'erreur (HTTP 404, 500)
  - [ ] Vérifier temps de chargement

- [ ] **Mois 1**
  - [ ] Analyser les pages les plus visitées
  - [ ] Analyser les sources de trafic
  - [ ] Vérifier les conversions affiliations
  - [ ] Identifier pages à optimiser (taux de rebond élevé)

- [ ] **Mois 2-3**
  - [ ] Ajouter du contenu blog (1-2 articles/semaine)
  - [ ] Optimiser les pages qui convertissent mal
  - [ ] Améliorer le SEO (backlinks, réseaux sociaux)
  - [ ] Surveiller la concurrence

### 🎯 Améliorations Continues

- [ ] **Contenu**
  - [ ] Ajouter les images manquantes progressivement
  - [ ] Publier articles blog régulièrement
  - [ ] Mettre à jour les prix/dates chaque saison
  - [ ] Ajouter avis utilisateurs (feature future)

- [ ] **SEO**
  - [ ] Obtenir des backlinks (annuaires, partenaires)
  - [ ] Optimiser les pages selon Search Console
  - [ ] Créer pages saisonnières ("Où skier à Noël", etc.)

- [ ] **Fonctionnalités**
  - [ ] Newsletter (capturer emails)
  - [ ] Système d'avis utilisateurs
  - [ ] Comparateur amélioré
  - [ ] Application mobile (PWA)
  - [ ] Mode hors-ligne (Service Worker)

---

## ✅ Checklist Résumée (Pré-Déploiement)

### Critique (Bloquant)

- [ ] Remplacer TOUS les `G-XXXXXXXXXX` (Google Analytics)
- [ ] Remplacer TOUS les `XXXX` dans `config.js` (affiliation)
- [ ] Activer `analytics.enabled: true`
- [ ] Activer `affiliation.enabled: true`
- [ ] Certificat SSL/TLS configuré (HTTPS)
- [ ] Vérifier email de contact partout
- [ ] Générer sitemap.xml: `node generate-sitemap.js`
- [ ] Tester le site sur mobile + desktop
- [ ] Vérifier cookies RGPD (accepter/refuser)

### Important (Non-bloquant mais recommandé)

- [ ] Compléter les images (actuellement 30/201)
- [ ] Optimiser images en WebP
- [ ] Minifier CSS/JS
- [ ] Activer compression Gzip
- [ ] Soumettre sitemap à Google/Bing
- [ ] Vérifier W3C HTML Validator (0 erreur)
- [ ] Tester accessibilité (WAVE, axe)
- [ ] Score PageSpeed >90

### Optionnel (Améliorations futures)

- [ ] CDN (Cloudflare)
- [ ] Service Worker (PWA)
- [ ] Monitoring uptime
- [ ] Dashboard conversions
- [ ] A/B Testing

---

## 📞 Support et Documentation

### Ressources

- **Documentation technique:**
  - `AMELIORATIONS.md` - Historique des améliorations
  - `AMELIORATIONS-2025.md` - Design system et accessibilité
  - `README-AFFILIATION.md` - Configuration affiliation
  - `readme.md` - Guide utilisateur

### Outils Recommandés

- **Performance:** [PageSpeed Insights](https://pagespeed.web.dev/)
- **SEO:** [Google Search Console](https://search.google.com/search-console)
- **Accessibilité:** [WAVE](https://wave.webaim.org/)
- **Validation:** [W3C Validator](https://validator.w3.org/)
- **Monitoring:** [UptimeRobot](https://uptimerobot.com/)

---

## 🎉 Prêt pour le Déploiement !

Une fois toutes les cases cochées dans les sections **Critique** et **Important**, votre site sera prêt pour un déploiement officiel en production.

**Bonne chance ! 🚀⛷️**

---

**Dernière mise à jour:** 16 novembre 2025
**Auteur:** Claude (Anthropic)
**Version:** 1.0.0
