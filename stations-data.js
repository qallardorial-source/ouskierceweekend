// Données complètes des stations françaises - Saison 2025-2026
// Dates et prix mis à jour selon les sources officielles
const skiResorts = [
    {
        "id": "chamonix-mont-blanc",
        "name": "Chamonix Mont-Blanc",
        "lat": 45.9237,
        "lon": 6.8694,
        "region": "Alpes du Nord",
        "altitude": "3842m",
        "slopes": "115km",
        "skiPass": 66,
        "lodging": 110,
        "image": "./images/chamonix.png",
        "opening": "22 Nov 2025",
        "closing": "3 Mai 2026",
        "description": "Station Alpes du Nord située à 3842m d'altitude avec 115km de pistes.",
        "advantages": [
            "115km de pistes",
            "Alt 3842m",
            "Alpes du Nord",
            "Forfait 66€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.chamonix.com"
    },
    {
        "id": "megeve",
        "name": "Megève",
        "lat": 45.8564,
        "lon": 6.6169,
        "region": "Alpes du Nord",
        "altitude": "2350m",
        "slopes": "445km",
        "skiPass": 65,
        "lodging": 135,
        "image": "./images/megeve.png",
        "opening": "13 Déc 2025",
        "closing": "5 Avr 2026",
        "description": "Station Alpes du Nord située à 2350m d'altitude avec 445km de pistes.",
        "advantages": [
            "445km de pistes",
            "Alt 2350m",
            "Alpes du Nord",
            "Forfait 65€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.megeve.com"
    },
    {
        "id": "avoriaz",
        "name": "Avoriaz",
        "lat": 46.1917,
        "lon": 6.7667,
        "region": "Alpes du Nord",
        "altitude": "2466m",
        "slopes": "650km",
        "skiPass": 69,
        "lodging": 98,
        "image": "./images/avoriaz.png",
        "opening": "12 Déc 2025",
        "closing": "18 Avr 2026",
        "description": "Station Alpes du Nord située à 2466m d'altitude avec 650km de pistes (Portes du Soleil).",
        "advantages": [
            "650km de pistes",
            "Alt 2466m",
            "Alpes du Nord",
            "Forfait 69€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.avoriaz.com"
    },
    {
        "id": "la-clusaz",
        "name": "La Clusaz",
        "lat": 45.9047,
        "lon": 6.4236,
        "region": "Alpes du Nord",
        "altitude": "2600m",
        "slopes": "132km",
        "skiPass": 58,
        "lodging": 92,
        "image": "./images/la-clusaz.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2600m d'altitude avec 132km de pistes.",
        "advantages": [
            "132km de pistes",
            "Alt 2600m",
            "Alpes du Nord",
            "Forfait 58€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.laclusaz.com"
    },
    {
        "id": "le-grand-bornand",
        "name": "Le Grand Bornand",
        "lat": 45.9414,
        "lon": 6.4347,
        "region": "Alpes du Nord",
        "altitude": "2100m",
        "slopes": "90km",
        "skiPass": 58,
        "lodging": 88,
        "image": "./images/le-grand-bornand.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2100m d'altitude avec 90km de pistes.",
        "advantages": [
            "90km de pistes",
            "Alt 2100m",
            "Alpes du Nord",
            "Forfait 58€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.legrandbornand.com"
    },
    {
        "id": "flaine",
        "name": "Flaine",
        "lat": 46.0028,
        "lon": 6.6928,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "265km",
        "skiPass": 64,
        "lodging": 95,
        "image": "./images/flaine.png",
        "opening": "13 Déc 2025",
        "closing": "19 Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes (Grand Massif).",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 64€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.flaine.com"
    },
    {
        "id": "morzine",
        "name": "Morzine",
        "lat": 46.1792,
        "lon": 6.7092,
        "region": "Alpes du Nord",
        "altitude": "2466m",
        "slopes": "650km",
        "skiPass": 69,
        "lodging": 90,
        "image": "./images/morzine.png",
        "opening": "20 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Alpes du Nord située à 2466m d'altitude avec 650km de pistes (Portes du Soleil).",
        "advantages": [
            "650km de pistes",
            "Alt 2466m",
            "Alpes du Nord",
            "Forfait 69€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.morzine-avoriaz.com"
    },
    {
        "id": "les-gets",
        "name": "Les Gets",
        "lat": 46.1567,
        "lon": 6.6661,
        "region": "Alpes du Nord",
        "altitude": "2002m",
        "slopes": "650km",
        "skiPass": 69,
        "lodging": 87,
        "image": "./images/les-gets.png",
        "opening": "20 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Alpes du Nord située à 2002m d'altitude avec 650km de pistes (Portes du Soleil).",
        "advantages": [
            "650km de pistes",
            "Alt 2002m",
            "Alpes du Nord",
            "Forfait 69€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lesgets.com"
    },
    {
        "id": "tignes",
        "name": "Tignes",
        "lat": 45.4697,
        "lon": 6.9089,
        "region": "Alpes du Nord",
        "altitude": "3456m",
        "slopes": "300km",
        "skiPass": 66,
        "lodging": 105,
        "image": "./images/tignes.png",
        "opening": "22 Nov 2025",
        "closing": "3 Mai 2026",
        "description": "Station Alpes du Nord située à 3456m d'altitude avec 300km de pistes (Espace Killy).",
        "advantages": [
            "300km de pistes",
            "Alt 3456m",
            "Alpes du Nord",
            "Forfait 66€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.tignes.net"
    },
    {
        "id": "val-d-isere",
        "name": "Val d'Isère",
        "lat": 45.4486,
        "lon": 6.9797,
        "region": "Alpes du Nord",
        "altitude": "3456m",
        "slopes": "300km",
        "skiPass": 66,
        "lodging": 115,
        "image": "./images/val-disere.png",
        "opening": "29 Nov 2025",
        "closing": "3 Mai 2026",
        "description": "Station Alpes du Nord située à 3456m d'altitude avec 300km de pistes (Espace Killy).",
        "advantages": [
            "300km de pistes",
            "Alt 3456m",
            "Alpes du Nord",
            "Forfait 66€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.valdisere.com"
    },
    {
        "id": "val-thorens",
        "name": "Val Thorens",
        "lat": 45.2978,
        "lon": 6.5803,
        "region": "Alpes du Nord",
        "altitude": "3230m",
        "slopes": "600km",
        "skiPass": 79,
        "lodging": 120,
        "image": "./images/val-thorens.png",
        "opening": "22 Nov 2025",
        "closing": "3 Mai 2026",
        "description": "Station Alpes du Nord située à 3230m d'altitude avec 600km de pistes (3 Vallées). Station la plus haute d'Europe.",
        "advantages": [
            "600km de pistes",
            "Alt 3230m",
            "Alpes du Nord",
            "Forfait 79€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.valthorens.com"
    },
    {
        "id": "courchevel",
        "name": "Courchevel",
        "lat": 45.4153,
        "lon": 6.6347,
        "region": "Alpes du Nord",
        "altitude": "2738m",
        "slopes": "600km",
        "skiPass": 79,
        "lodging": 150,
        "image": "./images/courchevel.png",
        "opening": "5 Déc 2025",
        "closing": "19 Avr 2026",
        "description": "Station Alpes du Nord située à 2738m d'altitude avec 600km de pistes (3 Vallées).",
        "advantages": [
            "600km de pistes",
            "Alt 2738m",
            "Alpes du Nord",
            "Forfait 79€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.courchevel.com"
    },
    {
        "id": "meribel",
        "name": "Méribel",
        "lat": 45.4006,
        "lon": 6.5672,
        "region": "Alpes du Nord",
        "altitude": "2952m",
        "slopes": "600km",
        "skiPass": 79,
        "lodging": 125,
        "image": "./images/meribel.png",
        "opening": "6 Déc 2025",
        "closing": "17 Avr 2026",
        "description": "Station Alpes du Nord située à 2952m d'altitude avec 600km de pistes (3 Vallées).",
        "advantages": [
            "600km de pistes",
            "Alt 2952m",
            "Alpes du Nord",
            "Forfait 79€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.meribel.net"
    },
    {
        "id": "les-menuires",
        "name": "Les Menuires",
        "lat": 45.3244,
        "lon": 6.5378,
        "region": "Alpes du Nord",
        "altitude": "2850m",
        "slopes": "600km",
        "skiPass": 79,
        "lodging": 95,
        "image": "./images/les-menuires.png",
        "opening": "6 Déc 2025",
        "closing": "17 Avr 2026",
        "description": "Station Alpes du Nord située à 2850m d'altitude avec 600km de pistes (3 Vallées).",
        "advantages": [
            "600km de pistes",
            "Alt 2850m",
            "Alpes du Nord",
            "Forfait 79€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lesmenuires.com"
    },
    {
        "id": "la-plagne",
        "name": "La Plagne",
        "lat": 45.5089,
        "lon": 6.6792,
        "region": "Alpes du Nord",
        "altitude": "3250m",
        "slopes": "425km",
        "skiPass": 63,
        "lodging": 100,
        "image": "./images/la-plagne.png",
        "opening": "13 Déc 2025",
        "closing": "26 Avr 2026",
        "description": "Station Alpes du Nord située à 3250m d'altitude avec 425km de pistes (Paradiski).",
        "advantages": [
            "425km de pistes",
            "Alt 3250m",
            "Alpes du Nord",
            "Forfait 63€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.la-plagne.com"
    },
    {
        "id": "les-arcs",
        "name": "Les Arcs",
        "lat": 45.5642,
        "lon": 6.7964,
        "region": "Alpes du Nord",
        "altitude": "3226m",
        "slopes": "425km",
        "skiPass": 63,
        "lodging": 105,
        "image": "./images/les-arcs.png",
        "opening": "13 Déc 2025",
        "closing": "26 Avr 2026",
        "description": "Station Alpes du Nord située à 3226m d'altitude avec 425km de pistes (Paradiski).",
        "advantages": [
            "425km de pistes",
            "Alt 3226m",
            "Alpes du Nord",
            "Forfait 63€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lesarcs.com"
    },
    {
        "id": "peisey-vallandry",
        "name": "Peisey-Vallandry",
        "lat": 45.5567,
        "lon": 6.7667,
        "region": "Alpes du Nord",
        "altitude": "3226m",
        "slopes": "425km",
        "skiPass": 63,
        "lodging": 95,
        "image": "./images/peisey-vallandry.png",
        "opening": "13 Déc 2025",
        "closing": "26 Avr 2026",
        "description": "Station Alpes du Nord située à 3226m d'altitude avec 425km de pistes (Paradiski).",
        "advantages": [
            "425km de pistes",
            "Alt 3226m",
            "Alpes du Nord",
            "Forfait 63€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.peisey-vallandry.com"
    },
    {
        "id": "l-alpe-d-huez",
        "name": "L'Alpe d'Huez",
        "lat": 45.0906,
        "lon": 6.0697,
        "region": "Alpes du Nord",
        "altitude": "3330m",
        "slopes": "250km",
        "skiPass": 60,
        "lodging": 100,
        "image": "./images/alpe-dhuez.png",
        "opening": "6 Déc 2025",
        "closing": "19 Avr 2026",
        "description": "Station Alpes du Nord située à 3330m d'altitude avec 250km de pistes. L'île au soleil.",
        "advantages": [
            "250km de pistes",
            "Alt 3330m",
            "Alpes du Nord",
            "Forfait 60€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.alpedhuez.com"
    },
    {
        "id": "les-deux-alpes",
        "name": "Les Deux Alpes",
        "lat": 45.0083,
        "lon": 6.1256,
        "region": "Alpes du Nord",
        "altitude": "3600m",
        "slopes": "225km",
        "skiPass": 59,
        "lodging": 98,
        "image": "./images/les-deux-alpes.png",
        "opening": "6 Déc 2025",
        "closing": "26 Avr 2026",
        "description": "Station Alpes du Nord située à 3600m d'altitude avec 225km de pistes. Ski été sur glacier.",
        "advantages": [
            "225km de pistes",
            "Alt 3600m",
            "Alpes du Nord",
            "Forfait 59€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.les2alpes.com"
    },
    {
        "id": "serre-chevalier",
        "name": "Serre Chevalier",
        "lat": 44.9406,
        "lon": 6.5500,
        "region": "Alpes du Sud",
        "altitude": "2830m",
        "slopes": "250km",
        "skiPass": 58,
        "lodging": 95,
        "image": "./images/serre-chevalier.png",
        "opening": "6 Déc 2025",
        "closing": "19 Avr 2026",
        "description": "Station Alpes du Sud située à 2830m d'altitude avec 250km de pistes. Plus grand domaine des Alpes du Sud.",
        "advantages": [
            "250km de pistes",
            "Alt 2830m",
            "Alpes du Sud",
            "Forfait 58€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.serre-chevalier.com"
    },
    {
        "id": "les-orres",
        "name": "Les Orres",
        "lat": 44.5067,
        "lon": 6.5456,
        "region": "Alpes du Sud",
        "altitude": "2720m",
        "slopes": "100km",
        "skiPass": 47,
        "lodging": 85,
        "image": "./images/les-orres.png",
        "opening": "7 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Sud située à 2720m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2720m",
            "Alpes du Sud",
            "Forfait 47€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lesorres.com"
    },
    {
        "id": "vars",
        "name": "Vars",
        "lat": 44.5797,
        "lon": 6.7003,
        "region": "Alpes du Sud",
        "altitude": "2750m",
        "slopes": "185km",
        "skiPass": 55,
        "lodging": 90,
        "image": "./images/vars.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Alpes du Sud située à 2750m d'altitude avec 185km de pistes (Forêt Blanche).",
        "advantages": [
            "185km de pistes",
            "Alt 2750m",
            "Alpes du Sud",
            "Forfait 55€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.vars.com"
    },
    {
        "id": "risoul",
        "name": "Risoul",
        "lat": 44.6236,
        "lon": 6.6342,
        "region": "Alpes du Sud",
        "altitude": "2750m",
        "slopes": "185km",
        "skiPass": 55,
        "lodging": 88,
        "image": "./images/risoul.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Alpes du Sud située à 2750m d'altitude avec 185km de pistes (Forêt Blanche).",
        "advantages": [
            "185km de pistes",
            "Alt 2750m",
            "Alpes du Sud",
            "Forfait 55€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.risoul.com"
    },
    {
        "id": "orcieres-merlette",
        "name": "Orcières Merlette",
        "lat": 44.6897,
        "lon": 6.3250,
        "region": "Alpes du Sud",
        "altitude": "2725m",
        "slopes": "100km",
        "skiPass": 49,
        "lodging": 82,
        "image": "./images/orcieres.png",
        "opening": "13 Déc 2025",
        "closing": "12 Avr 2026",
        "description": "Station Alpes du Sud située à 2725m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2725m",
            "Alpes du Sud",
            "Forfait 49€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.orcieres.com"
    },
    {
        "id": "puy-saint-vincent",
        "name": "Puy Saint Vincent",
        "lat": 44.8289,
        "lon": 6.4864,
        "region": "Alpes du Sud",
        "altitude": "2700m",
        "slopes": "75km",
        "skiPass": 43,
        "lodging": 78,
        "image": "./images/puy-saint-vincent.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Alpes du Sud située à 2700m d'altitude avec 75km de pistes.",
        "advantages": [
            "75km de pistes",
            "Alt 2700m",
            "Alpes du Sud",
            "Forfait 43€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.puysaintvincent.com"
    },
    {
        "id": "montgenevre",
        "name": "Montgenèvre",
        "lat": 44.9314,
        "lon": 6.7239,
        "region": "Alpes du Sud",
        "altitude": "2800m",
        "slopes": "400km",
        "skiPass": 57,
        "lodging": 92,
        "image": "./images/montgenevre.png",
        "opening": "6 Déc 2025",
        "closing": "20 Avr 2026",
        "description": "Station Alpes du Sud située à 2800m d'altitude avec 400km de pistes (liaison Italie - Via Lattea).",
        "advantages": [
            "400km de pistes",
            "Alt 2800m",
            "Alpes du Sud",
            "Forfait 57€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.montgenevre.com"
    },
    {
        "id": "superdevoluy",
        "name": "Superdévoluy",
        "lat": 44.6783,
        "lon": 5.8956,
        "region": "Alpes du Sud",
        "altitude": "2500m",
        "slopes": "100km",
        "skiPass": 46,
        "lodging": 80,
        "image": "./images/superdevoluy.png",
        "opening": "13 Déc 2025",
        "closing": "12 Avr 2026",
        "description": "Station Alpes du Sud située à 2500m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2500m",
            "Alpes du Sud",
            "Forfait 46€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.superdevoluy.com"
    },
    {
        "id": "auron",
        "name": "Auron",
        "lat": 44.2242,
        "lon": 6.9089,
        "region": "Alpes du Sud",
        "altitude": "2450m",
        "slopes": "135km",
        "skiPass": 49,
        "lodging": 85,
        "image": "./images/auron.png",
        "opening": "6 Déc 2025",
        "closing": "12 Avr 2026",
        "description": "Station Alpes du Sud (Mercantour) située à 2450m d'altitude avec 135km de pistes.",
        "advantages": [
            "135km de pistes",
            "Alt 2450m",
            "Alpes du Sud",
            "Forfait 49€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.auron.com"
    },
    {
        "id": "isola-2000",
        "name": "Isola 2000",
        "lat": 44.1814,
        "lon": 7.1500,
        "region": "Alpes du Sud",
        "altitude": "2610m",
        "slopes": "120km",
        "skiPass": 52,
        "lodging": 90,
        "image": "./images/isola-2000.png",
        "opening": "6 Déc 2025",
        "closing": "19 Avr 2026",
        "description": "Station Alpes du Sud (Mercantour) située à 2610m d'altitude avec 120km de pistes.",
        "advantages": [
            "120km de pistes",
            "Alt 2610m",
            "Alpes du Sud",
            "Forfait 52€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.isola2000.com"
    },
    {
        "id": "saint-lary-soulan",
        "name": "Saint-Lary-Soulan",
        "lat": 42.8167,
        "lon": 0.3167,
        "region": "Pyrénées",
        "altitude": "2515m",
        "slopes": "100km",
        "skiPass": 44,
        "lodging": 75,
        "image": "./images/saint-lary.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées située à 2515m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2515m",
            "Pyrénées",
            "Forfait 44€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.saintlary.com"
    },
    {
        "id": "grand-tourmalet",
        "name": "Grand Tourmalet",
        "lat": 42.9128,
        "lon": 0.1450,
        "region": "Pyrénées",
        "altitude": "2500m",
        "slopes": "100km",
        "skiPass": 45,
        "lodging": 78,
        "image": "./images/grand-tourmalet.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées située à 2500m d'altitude avec 100km de pistes (Barèges - La Mongie).",
        "advantages": [
            "100km de pistes",
            "Alt 2500m",
            "Pyrénées",
            "Forfait 45€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.grand-tourmalet.com"
    },
    {
        "id": "peyragudes",
        "name": "Peyragudes",
        "lat": 42.7917,
        "lon": 0.4167,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "60km",
        "skiPass": 42,
        "lodging": 72,
        "image": "./images/peyragudes.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 42€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.peyragudes.com"
    },
    {
        "id": "piau-engaly",
        "name": "Piau Engaly",
        "lat": 42.7811,
        "lon": 0.1567,
        "region": "Pyrénées",
        "altitude": "2600m",
        "slopes": "65km",
        "skiPass": 43,
        "lodging": 75,
        "image": "./images/piau-engaly.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées située à 2600m d'altitude avec 65km de pistes. Station la plus haute des Pyrénées.",
        "advantages": [
            "65km de pistes",
            "Alt 2600m",
            "Pyrénées",
            "Forfait 43€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.piau-engaly.com"
    },
    {
        "id": "cauterets",
        "name": "Cauterets",
        "lat": 42.8856,
        "lon": -0.1106,
        "region": "Pyrénées",
        "altitude": "2415m",
        "slopes": "36km",
        "skiPass": 40,
        "lodging": 70,
        "image": "./images/cauterets.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées située à 2415m d'altitude avec 36km de pistes (Cirque du Lys).",
        "advantages": [
            "36km de pistes",
            "Alt 2415m",
            "Pyrénées",
            "Forfait 40€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.cauterets.com"
    },
    {
        "id": "gourette",
        "name": "Gourette",
        "lat": 42.9583,
        "lon": -0.3333,
        "region": "Pyrénées",
        "altitude": "2450m",
        "slopes": "39km",
        "skiPass": 41,
        "lodging": 72,
        "image": "./images/gourette.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées située à 2450m d'altitude avec 39km de pistes.",
        "advantages": [
            "39km de pistes",
            "Alt 2450m",
            "Pyrénées",
            "Forfait 41€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.gourette.com"
    },
    {
        "id": "la-pierre-saint-martin",
        "name": "La Pierre Saint-Martin",
        "lat": 42.9833,
        "lon": -0.7333,
        "region": "Pyrénées",
        "altitude": "2153m",
        "slopes": "28km",
        "skiPass": 38,
        "lodging": 68,
        "image": "./images/la-pierre-saint-martin.png",
        "opening": "20 Déc 2025",
        "closing": "29 Mar 2026",
        "description": "Station Pyrénées située à 2153m d'altitude avec 28km de pistes.",
        "advantages": [
            "28km de pistes",
            "Alt 2153m",
            "Pyrénées",
            "Forfait 38€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lapierrestmartin.com"
    },
    {
        "id": "font-romeu",
        "name": "Font-Romeu",
        "lat": 42.5,
        "lon": 2.0333,
        "region": "Pyrénées",
        "altitude": "2213m",
        "slopes": "58km",
        "skiPass": 42,
        "lodging": 75,
        "image": "./images/font-romeu.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées Orientales située à 2213m d'altitude avec 58km de pistes.",
        "advantages": [
            "58km de pistes",
            "Alt 2213m",
            "Pyrénées",
            "Forfait 42€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.font-romeu.fr"
    },
    {
        "id": "les-angles",
        "name": "Les Angles",
        "lat": 42.5833,
        "lon": 2.0667,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "55km",
        "skiPass": 40,
        "lodging": 70,
        "image": "./images/les-angles.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées Orientales située à 2400m d'altitude avec 55km de pistes.",
        "advantages": [
            "55km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 40€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lesangles.com"
    },
    {
        "id": "ax-3-domaines",
        "name": "Ax 3 Domaines",
        "lat": 42.7167,
        "lon": 1.8333,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "80km",
        "skiPass": 43,
        "lodging": 72,
        "image": "./images/ax-3-domaines.png",
        "opening": "13 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Pyrénées Ariège située à 2400m d'altitude avec 80km de pistes.",
        "advantages": [
            "80km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 43€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.ax-ski.com"
    },
    {
        "id": "super-besse",
        "name": "Super Besse",
        "lat": 45.5,
        "lon": 2.9333,
        "region": "Massif Central",
        "altitude": "1850m",
        "slopes": "43km",
        "skiPass": 34,
        "lodging": 60,
        "image": "./images/super-besse.png",
        "opening": "19 Déc 2025",
        "closing": "29 Mar 2026",
        "description": "Station Massif Central située à 1850m d'altitude avec 43km de pistes.",
        "advantages": [
            "43km de pistes",
            "Alt 1850m",
            "Massif Central",
            "Forfait 34€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.superbesse.com"
    },
    {
        "id": "le-mont-dore",
        "name": "Le Mont-Dore",
        "lat": 45.5833,
        "lon": 2.8167,
        "region": "Massif Central",
        "altitude": "1846m",
        "slopes": "41km",
        "skiPass": 34,
        "lodging": 58,
        "image": "./images/le-mont-dore.png",
        "opening": "19 Déc 2025",
        "closing": "29 Mar 2026",
        "description": "Station Massif Central située à 1846m d'altitude avec 41km de pistes.",
        "advantages": [
            "41km de pistes",
            "Alt 1846m",
            "Massif Central",
            "Forfait 34€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.sancy.com"
    },
    {
        "id": "le-lioran",
        "name": "Le Lioran",
        "lat": 45.0833,
        "lon": 2.75,
        "region": "Massif Central",
        "altitude": "1855m",
        "slopes": "60km",
        "skiPass": 37,
        "lodging": 62,
        "image": "./images/le-lioran.png",
        "opening": "19 Déc 2025",
        "closing": "29 Mar 2026",
        "description": "Station Massif Central située à 1855m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 1855m",
            "Massif Central",
            "Forfait 37€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lelioran.com"
    },
    {
        "id": "chamrousse",
        "name": "Chamrousse",
        "lat": 45.1167,
        "lon": 5.8833,
        "region": "Alpes du Nord",
        "altitude": "2250m",
        "slopes": "90km",
        "skiPass": 48,
        "lodging": 80,
        "image": "./images/chamrousse.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2250m d'altitude avec 90km de pistes.",
        "advantages": [
            "90km de pistes",
            "Alt 2250m",
            "Alpes du Nord",
            "Forfait 48€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.chamrousse.com"
    },
    {
        "id": "val-cenis",
        "name": "Val Cenis",
        "lat": 45.2917,
        "lon": 6.9167,
        "region": "Alpes du Nord",
        "altitude": "2800m",
        "slopes": "125km",
        "skiPass": 50,
        "lodging": 85,
        "image": "./images/val-cenis.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2800m d'altitude avec 125km de pistes.",
        "advantages": [
            "125km de pistes",
            "Alt 2800m",
            "Alpes du Nord",
            "Forfait 50€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.valcenis.com"
    },
    {
        "id": "la-rosiere",
        "name": "La Rosière",
        "lat": 45.6333,
        "lon": 6.8500,
        "region": "Alpes du Nord",
        "altitude": "2800m",
        "slopes": "160km",
        "skiPass": 55,
        "lodging": 90,
        "image": "./images/la-rosiere.png",
        "opening": "13 Déc 2025",
        "closing": "18 Avr 2026",
        "description": "Station Alpes du Nord située à 2800m d'altitude avec 160km de pistes (Espace San Bernardo - liaison Italie).",
        "advantages": [
            "160km de pistes",
            "Alt 2800m",
            "Alpes du Nord",
            "Forfait 55€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.larosiere.net"
    },
    {
        "id": "valmorel",
        "name": "Valmorel",
        "lat": 45.4500,
        "lon": 6.4667,
        "region": "Alpes du Nord",
        "altitude": "2550m",
        "slopes": "165km",
        "skiPass": 56,
        "lodging": 88,
        "image": "./images/valmorel.png",
        "opening": "20 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2550m d'altitude avec 165km de pistes (Grand Domaine).",
        "advantages": [
            "165km de pistes",
            "Alt 2550m",
            "Alpes du Nord",
            "Forfait 56€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.valmorel.com"
    },
    {
        "id": "les-7-laux",
        "name": "Les 7 Laux",
        "lat": 45.2833,
        "lon": 6.0000,
        "region": "Alpes du Nord",
        "altitude": "2400m",
        "slopes": "120km",
        "skiPass": 48,
        "lodging": 78,
        "image": "./images/les-7-laux.png",
        "opening": "20 Déc 2025",
        "closing": "5 Avr 2026",
        "description": "Station Alpes du Nord située à 2400m d'altitude avec 120km de pistes.",
        "advantages": [
            "120km de pistes",
            "Alt 2400m",
            "Alpes du Nord",
            "Forfait 48€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.les7laux.com"
    },
    {
        "id": "villard-de-lans",
        "name": "Villard-de-Lans",
        "lat": 45.0667,
        "lon": 5.5500,
        "region": "Alpes du Nord",
        "altitude": "2170m",
        "slopes": "125km",
        "skiPass": 46,
        "lodging": 75,
        "image": "./images/villard-de-lans.png",
        "opening": "13 Déc 2025",
        "closing": "29 Mar 2026",
        "description": "Station Alpes du Nord (Vercors) située à 2170m d'altitude avec 125km de pistes.",
        "advantages": [
            "125km de pistes",
            "Alt 2170m",
            "Alpes du Nord",
            "Forfait 46€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.villarddelans.com"
    },
    {
        "id": "aussois",
        "name": "Aussois",
        "lat": 45.2333,
        "lon": 6.7333,
        "region": "Alpes du Nord",
        "altitude": "2750m",
        "slopes": "55km",
        "skiPass": 42,
        "lodging": 70,
        "image": "./images/aussois.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2750m d'altitude avec 55km de pistes.",
        "advantages": [
            "55km de pistes",
            "Alt 2750m",
            "Alpes du Nord",
            "Forfait 42€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.aussois.com"
    },
    {
        "id": "la-norma",
        "name": "La Norma",
        "lat": 45.2167,
        "lon": 6.7000,
        "region": "Alpes du Nord",
        "altitude": "2750m",
        "slopes": "65km",
        "skiPass": 44,
        "lodging": 72,
        "image": "./images/la-norma.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2750m d'altitude avec 65km de pistes.",
        "advantages": [
            "65km de pistes",
            "Alt 2750m",
            "Alpes du Nord",
            "Forfait 44€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lanorma.fr"
    },
    {
        "id": "valfrejus",
        "name": "Valfréjus",
        "lat": 45.2167,
        "lon": 6.6167,
        "region": "Alpes du Nord",
        "altitude": "2737m",
        "slopes": "50km",
        "skiPass": 43,
        "lodging": 70,
        "image": "./images/valfrejus.png",
        "opening": "13 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2737m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2737m",
            "Alpes du Nord",
            "Forfait 43€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.valfrejus.com"
    },
    {
        "id": "pralognan-la-vanoise",
        "name": "Pralognan-la-Vanoise",
        "lat": 45.3833,
        "lon": 6.7167,
        "region": "Alpes du Nord",
        "altitude": "2360m",
        "slopes": "25km",
        "skiPass": 38,
        "lodging": 65,
        "image": "./images/pralognan.png",
        "opening": "20 Déc 2025",
        "closing": "29 Mar 2026",
        "description": "Station Alpes du Nord située à 2360m d'altitude avec 25km de pistes. Village authentique.",
        "advantages": [
            "25km de pistes",
            "Alt 2360m",
            "Alpes du Nord",
            "Forfait 38€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.pralognan.com"
    },
    {
        "id": "bonneval-sur-arc",
        "name": "Bonneval-sur-Arc",
        "lat": 45.3667,
        "lon": 7.0500,
        "region": "Alpes du Nord",
        "altitude": "3000m",
        "slopes": "25km",
        "skiPass": 40,
        "lodging": 68,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "20 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 3000m d'altitude avec 25km de pistes. Plus beau village de France.",
        "advantages": [
            "25km de pistes",
            "Alt 3000m",
            "Alpes du Nord",
            "Forfait 40€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.bonneval-sur-arc.com"
    },
    {
        "id": "les-sybelles",
        "name": "Les Sybelles",
        "lat": 45.2333,
        "lon": 6.3167,
        "region": "Alpes du Nord",
        "altitude": "2620m",
        "slopes": "310km",
        "skiPass": 58,
        "lodging": 88,
        "image": "./images/les-sybelles.png",
        "opening": "20 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2620m d'altitude avec 310km de pistes. 4ème plus grand domaine de France.",
        "advantages": [
            "310km de pistes",
            "Alt 2620m",
            "Alpes du Nord",
            "Forfait 58€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lessybelles.com"
    },
    {
        "id": "valmeinier",
        "name": "Valmeinier",
        "lat": 45.1833,
        "lon": 6.5000,
        "region": "Alpes du Nord",
        "altitude": "2600m",
        "slopes": "150km",
        "skiPass": 52,
        "lodging": 82,
        "image": "./images/valmeinier.png",
        "opening": "20 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2600m d'altitude avec 150km de pistes (Galibier-Thabor).",
        "advantages": [
            "150km de pistes",
            "Alt 2600m",
            "Alpes du Nord",
            "Forfait 52€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.valmeinier.com"
    },
    {
        "id": "valloire",
        "name": "Valloire",
        "lat": 45.1667,
        "lon": 6.4333,
        "region": "Alpes du Nord",
        "altitude": "2600m",
        "slopes": "150km",
        "skiPass": 52,
        "lodging": 80,
        "image": "./images/valloire.png",
        "opening": "20 Déc 2025",
        "closing": "10 Avr 2026",
        "description": "Station Alpes du Nord située à 2600m d'altitude avec 150km de pistes (Galibier-Thabor).",
        "advantages": [
            "150km de pistes",
            "Alt 2600m",
            "Alpes du Nord",
            "Forfait 52€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.valloire.net"
    },
    {
        "id": "les-contamines-montjoie",
        "name": "Les Contamines-Montjoie",
        "lat": 45.8167,
        "lon": 6.7333,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "120km",
        "skiPass": 52,
        "lodging": 85,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "20 Déc 2025",
        "closing": "6 Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 120km de pistes.",
        "advantages": [
            "120km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 52€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lescontamines.com"
    },
    {
        "id": "les-carroz",
        "name": "Les Carroz",
        "lat": 46.0333,
        "lon": 6.6500,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "265km",
        "skiPass": 64,
        "lodging": 88,
        "image": "./images/les-carroz.png",
        "opening": "13 Déc 2025",
        "closing": "12 Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes (Grand Massif).",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 64€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lescarroz.com"
    },
    {
        "id": "samoens",
        "name": "Samoëns",
        "lat": 46.0833,
        "lon": 6.7333,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "265km",
        "skiPass": 64,
        "lodging": 85,
        "image": "./images/samoens.png",
        "opening": "13 Déc 2025",
        "closing": "12 Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes (Grand Massif).",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 64€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Hors-piste",
            "Ski de randonnée",
            "Alpinisme"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.samoens.com"
    },
    {
        "id": "chatel",
        "name": "Châtel",
        "lat": 46.2656,
        "lon": 6.8428,
        "region": "Alpes du Nord",
        "altitude": "2200m",
        "slopes": "650km",
        "skiPass": 69,
        "lodging": 90,
        "image": "./images/chatel.png",
        "opening": "13 Déc 2025",
        "closing": "19 Avr 2026",
        "description": "Station Alpes du Nord située à 2200m d'altitude avec 650km de pistes (Portes du Soleil).",
        "advantages": [
            "650km de pistes",
            "Alt 2200m",
            "Alpes du Nord",
            "Forfait 69€"
        ],
        "level": "Tous niveaux",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.chatel.com"
    },
    {
        "id": "saint-martin-de-belleville",
        "name": "Saint-Martin-de-Belleville",
        "lat": 45.3667,
        "lon": 6.5000,
        "region": "Alpes du Nord",
        "altitude": "2850m",
        "slopes": "600km",
        "skiPass": 79,
        "lodging": 110,
        "image": "./images/saint-martin-de-belleville.png",
        "opening": "13 Déc 2025",
        "closing": "17 Avr 2026",
        "description": "Station Alpes du Nord située à 2850m d'altitude avec 600km de pistes (3 Vallées). Village authentique.",
        "advantages": [
            "600km de pistes",
            "Alt 2850m",
            "Alpes du Nord",
            "Forfait 79€"
        ],
        "level": "Intermédiaire / Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.saint-martin-belleville.com"
    },
    {
        "id": "orelle",
        "name": "Orelle",
        "lat": 45.2333,
        "lon": 6.5333,
        "region": "Alpes du Nord",
        "altitude": "3230m",
        "slopes": "600km",
        "skiPass": 79,
        "lodging": 75,
        "image": "./images/orelle.png",
        "opening": "22 Nov 2025",
        "closing": "3 Mai 2026",
        "description": "Station Alpes du Nord située à 3230m d'altitude avec 600km de pistes (3 Vallées). Accès direct Val Thorens.",
        "advantages": [
            "600km de pistes",
            "Alt 3230m",
            "Alpes du Nord",
            "Forfait 79€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.orelle.net"
    }
];

// Villes principales
const cities = {
    "paris": {lat: 48.8566, lon: 2.3522},
    "marseille": {lat: 43.2965, lon: 5.3698},
    "lyon": {lat: 45.764, lon: 4.8357},
    "toulouse": {lat: 43.6047, lon: 1.4442},
    "nice": {lat: 43.7102, lon: 7.262},
    "grenoble": {lat: 45.1885, lon: 5.7245},
    "annecy": {lat: 45.8992, lon: 6.1294},
    "chambery": {lat: 45.5647, lon: 5.9178},
    "geneve": {lat: 46.2044, lon: 6.1432},
    "gap": {lat: 44.5597, lon: 6.0797},
    "pau": {lat: 43.2951, lon: -0.3708},
    "perpignan": {lat: 42.6886, lon: 2.8948},
    "besancon": {lat: 47.238, lon: 6.0243},
    "clermont-ferrand": {lat: 45.7772, lon: 3.087},
    "strasbourg": {lat: 48.5734, lon: 7.7521}
};
