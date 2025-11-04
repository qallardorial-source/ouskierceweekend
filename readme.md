# 🎿 Trouve Ta Station - Site de recherche de stations de ski

## 📁 Structure du projet

```
projet-ski/
├── index.html              # Page d'accueil avec recherche
├── stations.html           # Liste complète des stations
├── station-detail.html     # Page de détail d'une station
├── about.html              # Page à propos
├── styles.css              # Tous les styles
├── stations-data.js        # Données des stations et villes
├── weather.js              # API météo temps réel
└── images/                 # Dossier pour les vraies photos
    ├── chamonix.jpg
    ├── megeve.jpg
    └── ... (une par station)
```

## 🚀 Installation

### Méthode 1 : Test local simple

1. **Crée un dossier** `projet-ski` sur ton ordinateur
2. **Copie tous les fichiers** dans ce dossier :
   - `index.html`
   - `stations.html`
   - `station-detail.html`
   - `about.html`
   - `styles.css`
   - `stations-data.js`
   - `weather.js`
3. **Double-clique sur `index.html`** pour ouvrir dans ton navigateur

⚠️ **Important** : Certaines fonctionnalités (météo, géolocalisation) peuvent nécessiter un serveur local.

### Méthode 2 : Avec serveur local (recommandé)

**Option A - Avec Python :**
```bash
cd projet-ski
python -m http.server 8000
```
Puis ouvre http://localhost:8000

**Option B - Avec VS Code :**
1. Installe l'extension "Live Server"
2. Clique droit sur `index.html` → "Open with Live Server"

**Option C - Avec Node.js :**
```bash
npx http-server
```

## 📸 Ajouter les vraies images

1. **Crée un dossier `images`** dans ton projet
2. **Télécharge ou prends des photos** des stations de ski
3. **Renomme les fichiers** exactement comme indiqué dans `stations-data.js` :
   - `chamonix.jpg`
   - `megeve.jpg`
   - `avoriaz.jpg`
   - etc.

💡 **Astuce** : Tu peux trouver des images sur :
- Sites officiels des stations
- Unsplash.com (recherche le nom de la station)
- Pixabay.com

## 🌤️ Fonctionnalités météo

La météo est fournie par **Open-Meteo** (API gratuite) :
- ✅ Pas besoin de clé API
- ✅ Données en temps réel
- ✅ Température, vent, chutes de neige
- ⚠️ Nécessite une connexion internet

## 🛠️ Personnalisation

### Ajouter une nouvelle station

Dans `stations-data.js`, ajoute un nouvel objet dans le tableau `skiResorts` :

```javascript
{
    id: "nouvelle-station",
    name: "Nouvelle Station",
    lat: 45.1234,        // Coordonnées GPS
    lon: 6.5678,
    region: "Alpes du Nord",
    altitude: "2500m",
    slopes: "150km",
    skiPass: 55,
    lodging: 90,
    image: "images/nouvelle-station.jpg",
    opening: "15 déc 2025",
    closing: "15 avr 2026",
    description: "Description détaillée...",
    advantages: [
        "Avantage 1",
        "Avantage 2"
    ],
    level: "Tous niveaux",
    activities: ["Ski alpin", "Snowboard"],
    equipment: ["ESF", "Location"]
}
```

### Modifier les tarifs

Les tarifs se modifient dans `stations-data.js` :
- `skiPass`: Prix du forfait journée
- `lodging`: Prix logement par nuit

### Ajouter des villes

Dans `stations-data.js`, ajoute dans l'objet `cities` :

```javascript
"ma-ville": {lat: 45.123, lon: 6.456}
```

## 🎨 Personnaliser les couleurs

Dans `styles.css`, modifie les variables principales :

```css
/* Couleur principale : #667eea → Change ici */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Boutons */
.book-button {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

## 🔧 Fonctionnalités

### Page d'accueil (index.html)
- 🔍 Recherche par ville
- 📏 Calcul de distance automatique
- 🎚️ Filtres (distance, région, taille domaine)
- 📊 Statistiques en temps réel
- 🗺️ Affichage des 12 stations vedettes au chargement

### Liste complète (stations.html)
- 📋 Toutes les stations référencées
- 🎯 Filtres par région et niveau
- 🔢 Tri (nom, prix, altitude, pistes)
- 🔄 Bouton de réinitialisation

### Page détail (station-detail.html)
- 📝 Description complète
- ⭐ Points forts
- 🎿 Activités et équipements
- 🌤️ Météo en temps réel
- 💰 Tarifs détaillés
- 📅 Dates d'ouverture

### Page à propos (about.html)
- ℹ️ Présentation du site
- 🎯 Guide d'utilisation
- 💡 Conseils pratiques
- 📊 Sources des données

## 🐛 Problèmes courants

### Les images ne s'affichent pas
- Vérifie que le dossier `images/` existe
- Vérifie les noms de fichiers (respecte minuscules/majuscules)
- Un dégradé bleu s'affiche si l'image est manquante

### La météo ne fonctionne pas
- Vérifie ta connexion internet
- Utilise un serveur local (pas en double-clic)
- L'API Open-Meteo peut avoir des limites de requêtes

### La géolocalisation ne trouve pas ma ville
- Ajoute ta ville dans `stations-data.js` (objet `cities`)
- L'API Nominatim peut être lente, patiente quelques secondes

### Les distances sont fausses
- Vérifie les coordonnées GPS dans `stations-data.js`
- Les coordonnées doivent être en décimal (45.1234, pas 45°12'34")

## 📱 Responsive

Le site est 100% responsive :
- ✅ Desktop
- ✅ Tablette
- ✅ Mobile

## 🌐 Navigateurs supportés

- ✅ Chrome / Edge (recommandé)
- ✅ Firefox
- ✅ Safari
- ⚠️ Internet Explorer non supporté

## 🔄 Mises à jour des données

### Modifier les dates de saison
Dans `stations-data.js`, modifie :
```javascript
opening: "22 nov 2025",
closing: "3 mai 2026"
```

### Mettre à jour les prix
Change les valeurs `skiPass` et `lodging` dans chaque station.

### Ajouter de nouvelles régions
Dans les filtres HTML, ajoute :
```html
<option value="Jura">Jura</option>
```

## 💾 Déploiement en ligne

### Option 1 : GitHub Pages (gratuit)
1. Crée un repo GitHub
2. Upload tous les fichiers
3. Va dans Settings → Pages
4. Active GitHub Pages
5. Ton site sera sur `username.github.io/projet-ski`

### Option 2 : Netlify (gratuit)
1. Crée un compte sur netlify.com
2. Glisse-dépose ton dossier
3. Site en ligne en 30 secondes !

### Option 3 : Vercel (gratuit)
1. Compte sur vercel.com
2. Import ton projet
3. Déploiement automatique

## 📊 APIs utilisées

### Open-Meteo (Météo)
- URL : https://api.open-meteo.com
- ✅ Gratuit
- ✅ Sans clé API
- 📝 Limites : 10,000 requêtes/jour

### Nominatim (Géolocalisation)
- URL : https://nominatim.openstreetmap.org
- ✅ Gratuit
- ⚠️ Limite : 1 requête/seconde
- 📝 Nécessite User-Agent

## 🎯 Améliorations futures possibles

- 🗺️ Carte interactive avec toutes les stations
- 📧 Système de réservation réel
- 💳 Paiement en ligne
- 👤 Comptes utilisateurs
- ⭐ Système d'avis et notes
- 📸 Galerie photos pour chaque station
- 🔔 Alertes météo et enneigement
- 📱 Application mobile
- 🌍 Stations européennes (Suisse, Italie...)

## 📞 Support

Pour toute question :
1. Vérifie cette documentation
2. Regarde les fichiers HTML/JS (commentés)
3. Consulte la console du navigateur (F12) pour les erreurs

## 📝 Licence

Ce projet est un exemple éducatif. Tu peux l'utiliser et le modifier librement.

⚠️ **Important** : Les tarifs et dates sont indicatifs. Vérifie toujours auprès des stations officielles avant de réserver.

---

## 🚀 Quick Start

```bash
# 1. Télécharge tous les fichiers
# 2. Crée le dossier images/
# 3. Lance un serveur :
python -m http.server 8000

# 4. Ouvre dans le navigateur :
# http://localhost:8000
```

**C'est prêt ! 🎿**