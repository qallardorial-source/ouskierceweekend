# 🔗 Configuration des Liens d'Affiliation

Ce guide explique comment configurer vos liens d'affiliation pour monétiser le site **Où Skier Ce Weekend**.

---

## 📋 Table des Matières

1. [Vue d'ensemble](#vue-densemble)
2. [Configuration Skiset](#configuration-skiset)
3. [Autres affiliations disponibles](#autres-affiliations-disponibles)
4. [Activation](#activation)
5. [Vérification](#vérification)

---

## 🎯 Vue d'ensemble

Tous les paramètres d'affiliation sont centralisés dans le fichier **`config.js`** à la ligne 56, section `affiliation`.

**Liens affiliés actuellement intégrés :**
- 🎿 **Skiset** - Location de matériel de ski (CTA primaire)
- 🚗 **RentalCars** - Location de voiture (tab Pratique)
- 🚆 **Trainline** - Billets de train (tab Pratique)
- ✈️ **Skyscanner** - Vols (tab Pratique)
- 🏨 **Booking.com** - Hébergement (CTA primaire)

---

## 🎿 Configuration Skiset

### Étape 1️⃣ : Inscription sur une plateforme d'affiliation

Skiset propose l'affiliation via **deux plateformes** :

#### Option A : TradeTracker (recommandé)
1. Créer un compte sur [TradeTracker.com](https://www.tradetracker.com/)
2. Rechercher "Skiset" dans le catalogue
3. Demander l'adhésion au programme
4. Noter votre **Affiliate ID** et **Campaign ID**

#### Option B : Awin
1. Créer un compte sur [Awin.com](https://www.awin.com/fr)
2. Rechercher "Skiset" dans le catalogue
3. Demander l'adhésion au programme
4. Noter votre **Advertiser ID**

### Étape 2️⃣ : Configuration dans config.js

Ouvrir le fichier **`config.js`** et localiser la section `equipment.skiset` (ligne ~78) :

```javascript
skiset: {
    platform: 'tradetracker', // ← Choisir 'tradetracker' ou 'awin'
    tradetracker: {
        affiliateId: 'XXXX', // ← Remplacer par votre ID TradeTracker
        campaignId: 'XXXX'   // ← Remplacer par l'ID de campagne Skiset
    },
    awin: {
        id: 'XXXX',          // ← Remplacer par votre ID Awin
        clickRef: 'ouskier_skiset' // ← Personnaliser si besoin
    }
}
```

**Exemple de configuration TradeTracker :**
```javascript
skiset: {
    platform: 'tradetracker',
    tradetracker: {
        affiliateId: '123456',
        campaignId: '789012'
    },
    awin: {
        id: 'XXXX',
        clickRef: 'ouskier_skiset'
    }
}
```

**Exemple de configuration Awin :**
```javascript
skiset: {
    platform: 'awin',
    tradetracker: {
        affiliateId: 'XXXX',
        campaignId: 'XXXX'
    },
    awin: {
        id: '987654',
        clickRef: 'ouskier_skiset'
    }
}
```

### Étape 3️⃣ : Activer l'affiliation

À la ligne 60 du fichier `config.js`, changer :

```javascript
affiliation: {
    enabled: false, // ← Changer en true
```

En :

```javascript
affiliation: {
    enabled: true, // ✅ Affiliation activée
```

---

## 🔗 Autres affiliations disponibles

### 🏨 Booking.com

```javascript
lodging: {
    booking: {
        aid: 'XXXX' // ← Votre Booking.com Affiliate ID
    }
}
```

**Inscription :** [Booking.com Partner Programme](https://www.booking.com/affiliate-program/v2/index.html)

### 🚗 RentalCars

Actuellement configuré sans affiliation. Pour l'ajouter :
1. S'inscrire sur [RentalCars Affiliate Program](https://www.rentalcars.com/Affiliates.do)
2. Modifier le lien dans `station-detail.html` ligne ~756

### 🚆 Trainline

Actuellement configuré sans affiliation. Pour l'ajouter :
1. S'inscrire sur le programme d'affiliation Trainline
2. Modifier le lien dans `station-detail.html` ligne ~770

### ✈️ Skyscanner

Actuellement configuré sans affiliation. Pour l'ajouter :
1. S'inscrire sur [Skyscanner Affiliate Network](https://partners.skyscanner.net/)
2. Modifier le lien dans `station-detail.html` ligne ~784

---

## ✅ Activation

Une fois tous vos IDs configurés dans `config.js` :

1. **Activer l'affiliation globale :**
   ```javascript
   affiliation: {
       enabled: true, // ✅ Passer à true
   ```

2. **Vérifier qu'il n'y a plus de "XXXX" :**
   - Faire une recherche dans `config.js`
   - Tous les "XXXX" doivent être remplacés par vos vrais IDs

3. **Sauvegarder le fichier**

---

## 🧪 Vérification

### Test du lien Skiset :

1. Ouvrir une page station (ex: `station-detail.html?id=val-thorens`)
2. Cliquer sur le bouton **"🎿 Louer du Matériel"**
3. Vérifier l'URL dans le navigateur :

**Sans affiliation** (par défaut) :
```
https://www.skiset.com/fr-FR/ski-resort/val-thorens
```

**Avec affiliation TradeTracker** :
```
https://www.skiset.com/fr-FR/ski-resort/val-thorens?tt=123456&r=789012
```

**Avec affiliation Awin** :
```
https://www.skiset.com/fr-FR/ski-resort/val-thorens?awc=987654&clickref=ouskier_skiset
```

### Vérifier dans la console du navigateur :

```javascript
// Ouvrir la console (F12)
console.log(APP_CONFIG.affiliation.enabled); // Doit afficher : true
console.log(APP_CONFIG.affiliation.equipment.skiset);
// Doit afficher votre configuration
```

---

## 💡 Conseils

### Tracking des performances

- Utilisez des `clickRef` différents pour chaque source de trafic
- Exemple : `ouskier_skiset_homepage`, `ouskier_skiset_station_detail`
- Cela vous permet de voir quelles pages convertissent le mieux

### Sécurité

- ⚠️ **Ne jamais commit vos IDs d'affiliation sur GitHub public**
- Créer un fichier `config.local.js` pour vos IDs
- Ajouter `config.local.js` dans `.gitignore`

### URLs générées par station

Le système génère automatiquement des URLs personnalisées pour chaque station :

| Station | URL Skiset générée |
|---------|-------------------|
| Val Thorens | `/ski-resort/val-thorens` |
| Chamonix | `/ski-resort/chamonix` |
| Les Arcs | `/ski-resort/les-arcs` |
| L'Alpe d'Huez | `/ski-resort/l-alpe-d-huez` |

Le nom de la station est automatiquement converti en **slug** (minuscules, espaces → tirets, accents supprimés).

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifier que `affiliation.enabled = true`
2. Vérifier qu'il n'y a plus de "XXXX"
3. Tester avec la console JavaScript (F12)
4. Vérifier les logs réseau (onglet Network)

---

**🚀 Une fois configuré, vos liens d'affiliation sont automatiquement appliqués sur toutes les pages du site !**
