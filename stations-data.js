// Données complètes des stations françaises - Images locales PNG
const skiResorts = [
    {
        "id": "chamonix-mont-blanc",
        "name": "Chamonix Mont-Blanc",
        "lat": 45.9237,
        "lon": 6.8694,
        "region": "Alpes du Nord",
        "altitude": "3842m",
        "slopes": "115km",
        "skiPass": 62,
        "lodging": 110,
        "image": "./images/chamonix.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3842m d'altitude avec 115km de pistes.",
        "advantages": [
            "115km de pistes",
            "Alt 3842m",
            "Alpes du Nord",
            "Forfait 62€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.chamonix.com"
    },
    {
        "id": "meg-ve",
        "name": "Megève",
        "lat": 45.8564,
        "lon": 6.6169,
        "region": "Alpes du Nord",
        "altitude": "2350m",
        "slopes": "445km",
        "skiPass": 59,
        "lodging": 135,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2350m d'altitude avec 445km de pistes.",
        "advantages": [
            "445km de pistes",
            "Alt 2350m",
            "Alpes du Nord",
            "Forfait 59€"
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
        "skiPass": 58,
        "lodging": 98,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2466m d'altitude avec 650km de pistes.",
        "advantages": [
            "650km de pistes",
            "Alt 2466m",
            "Alpes du Nord",
            "Forfait 58€"
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
        "skiPass": 54,
        "lodging": 92,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2600m d'altitude avec 132km de pistes.",
        "advantages": [
            "132km de pistes",
            "Alt 2600m",
            "Alpes du Nord",
            "Forfait 54€"
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
        "skiPass": 52,
        "lodging": 88,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2100m d'altitude avec 90km de pistes.",
        "advantages": [
            "90km de pistes",
            "Alt 2100m",
            "Alpes du Nord",
            "Forfait 52€"
        ],
        "level": "Expert",
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
        "skiPass": 56,
        "lodging": 95,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes.",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 56€"
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
        "skiPass": 57,
        "lodging": 90,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2466m d'altitude avec 650km de pistes.",
        "advantages": [
            "650km de pistes",
            "Alt 2466m",
            "Alpes du Nord",
            "Forfait 57€"
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
        "skiPass": 56,
        "lodging": 87,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2002m d'altitude avec 650km de pistes.",
        "advantages": [
            "650km de pistes",
            "Alt 2002m",
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lesgets.com"
    },
    {
        "id": "saint-gervais",
        "name": "Saint-Gervais",
        "lat": 45.8933,
        "lon": 6.7133,
        "region": "Alpes du Nord",
        "altitude": "2350m",
        "slopes": "445km",
        "skiPass": 58,
        "lodging": 105,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2350m d'altitude avec 445km de pistes.",
        "advantages": [
            "445km de pistes",
            "Alt 2350m",
            "Alpes du Nord",
            "Forfait 58€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.saintgervais.com"
    },
    {
        "id": "les-contamines-montjoie",
        "name": "Les Contamines-Montjoie",
        "lat": 45.8217,
        "lon": 6.7281,
        "region": "Alpes du Nord",
        "altitude": "2487m",
        "slopes": "120km",
        "skiPass": 53,
        "lodging": 89,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2487m d'altitude avec 120km de pistes.",
        "advantages": [
            "120km de pistes",
            "Alt 2487m",
            "Alpes du Nord",
            "Forfait 53€"
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
        "officialWebsite": "https://www.lescontamines.com"
    },
    {
        "id": "ch-tel",
        "name": "Châtel",
        "lat": 46.265,
        "lon": 6.8408,
        "region": "Alpes du Nord",
        "altitude": "2200m",
        "slopes": "650km",
        "skiPass": 55,
        "lodging": 86,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2200m d'altitude avec 650km de pistes.",
        "advantages": [
            "650km de pistes",
            "Alt 2200m",
            "Alpes du Nord",
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.chatel.com"
    },
    {
        "id": "les-houches",
        "name": "Les Houches",
        "lat": 45.8933,
        "lon": 6.7975,
        "region": "Alpes du Nord",
        "altitude": "1900m",
        "slopes": "55km",
        "skiPass": 50,
        "lodging": 95,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1900m d'altitude avec 55km de pistes.",
        "advantages": [
            "55km de pistes",
            "Alt 1900m",
            "Alpes du Nord",
            "Forfait 50€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.leshouches.com"
    },
    {
        "id": "combloux",
        "name": "Combloux",
        "lat": 45.8956,
        "lon": 6.6453,
        "region": "Alpes du Nord",
        "altitude": "1850m",
        "slopes": "100km",
        "skiPass": 49,
        "lodging": 92,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1850m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 1850m",
            "Alpes du Nord",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.combloux.com"
    },
    {
        "id": "samo-ns",
        "name": "Samoëns",
        "lat": 46.0847,
        "lon": 6.7303,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "265km",
        "skiPass": 55,
        "lodging": 88,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes.",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.samoens.com"
    },
    {
        "id": "morillon",
        "name": "Morillon",
        "lat": 46.0833,
        "lon": 6.6833,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "265km",
        "skiPass": 53,
        "lodging": 75,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes.",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 53€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.morillon.com"
    },
    {
        "id": "sixt-fer-cheval",
        "name": "Sixt-Fer-à-Cheval",
        "lat": 46.05,
        "lon": 6.7667,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "265km",
        "skiPass": 54,
        "lodging": 80,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 265km de pistes.",
        "advantages": [
            "265km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 54€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.sixtferacheval.com"
    },
    {
        "id": "praz-sur-arly",
        "name": "Praz-sur-Arly",
        "lat": 45.8333,
        "lon": 6.5667,
        "region": "Alpes du Nord",
        "altitude": "1850m",
        "slopes": "445km",
        "skiPass": 50,
        "lodging": 85,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1850m d'altitude avec 445km de pistes.",
        "advantages": [
            "445km de pistes",
            "Alt 1850m",
            "Alpes du Nord",
            "Forfait 50€"
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
        "officialWebsite": "https://www.prazsurarly.com"
    },
    {
        "id": "notre-dame-de-bellecombe",
        "name": "Notre-Dame-de-Bellecombe",
        "lat": 45.7833,
        "lon": 6.5167,
        "region": "Alpes du Nord",
        "altitude": "1850m",
        "slopes": "100km",
        "skiPass": 48,
        "lodging": 78,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1850m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 1850m",
            "Alpes du Nord",
            "Forfait 48€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.notredamedebellecombe.com"
    },
    {
        "id": "la-giettaz",
        "name": "La Giettaz",
        "lat": 45.8333,
        "lon": 6.4833,
        "region": "Alpes du Nord",
        "altitude": "1850m",
        "slopes": "50km",
        "skiPass": 42,
        "lodging": 70,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1850m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 1850m",
            "Alpes du Nord",
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.lagiettaz.com"
    },
    {
        "id": "bernex",
        "name": "Bernex",
        "lat": 46.35,
        "lon": 6.6833,
        "region": "Alpes du Nord",
        "altitude": "2000m",
        "slopes": "50km",
        "skiPass": 45,
        "lodging": 72,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2000m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2000m",
            "Alpes du Nord",
            "Forfait 45€"
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
        "officialWebsite": "https://www.bernex.com"
    },
    {
        "id": "val-d-is-re",
        "name": "Val d'Isère",
        "lat": 45.4486,
        "lon": 6.9797,
        "region": "Alpes du Nord",
        "altitude": "3456m",
        "slopes": "300km",
        "skiPass": 65,
        "lodging": 120,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3456m d'altitude avec 300km de pistes.",
        "advantages": [
            "300km de pistes",
            "Alt 3456m",
            "Alpes du Nord",
            "Forfait 65€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.valdisere.com"
    },
    {
        "id": "tignes",
        "name": "Tignes",
        "lat": 45.4667,
        "lon": 6.9,
        "region": "Alpes du Nord",
        "altitude": "3456m",
        "slopes": "300km",
        "skiPass": 64,
        "lodging": 100,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3456m d'altitude avec 300km de pistes.",
        "advantages": [
            "300km de pistes",
            "Alt 3456m",
            "Alpes du Nord",
            "Forfait 64€"
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
        "officialWebsite": "https://www.tignes.net"
    },
    {
        "id": "val-thorens",
        "name": "Val Thorens",
        "lat": 45.2975,
        "lon": 6.5797,
        "region": "Alpes du Nord",
        "altitude": "3230m",
        "slopes": "600km",
        "skiPass": 66,
        "lodging": 115,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3230m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 3230m",
            "Alpes du Nord",
            "Forfait 66€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.valthorens.com"
    },
    {
        "id": "courchevel",
        "name": "Courchevel",
        "lat": 45.4167,
        "lon": 6.6333,
        "region": "Alpes du Nord",
        "altitude": "2738m",
        "slopes": "600km",
        "skiPass": 70,
        "lodging": 150,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2738m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 2738m",
            "Alpes du Nord",
            "Forfait 70€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.courchevel.com"
    },
    {
        "id": "m-ribel",
        "name": "Méribel",
        "lat": 45.4008,
        "lon": 6.5672,
        "region": "Alpes du Nord",
        "altitude": "2952m",
        "slopes": "600km",
        "skiPass": 60,
        "lodging": 105,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2952m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 2952m",
            "Alpes du Nord",
            "Forfait 60€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.meribel.net"
    },
    {
        "id": "les-menuires",
        "name": "Les Menuires",
        "lat": 45.3333,
        "lon": 6.5333,
        "region": "Alpes du Nord",
        "altitude": "2850m",
        "slopes": "600km",
        "skiPass": 55,
        "lodging": 85,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2850m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 2850m",
            "Alpes du Nord",
            "Forfait 55€"
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
        "officialWebsite": "https://www.lesmenuires.com"
    },
    {
        "id": "saint-martin-de-belleville",
        "name": "Saint-Martin-de-Belleville",
        "lat": 45.3667,
        "lon": 6.5167,
        "region": "Alpes du Nord",
        "altitude": "2850m",
        "slopes": "600km",
        "skiPass": 57,
        "lodging": 98,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2850m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 2850m",
            "Alpes du Nord",
            "Forfait 57€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.st-martin-belleville.com"
    },
    {
        "id": "la-plagne",
        "name": "La Plagne",
        "lat": 45.5133,
        "lon": 6.6794,
        "region": "Alpes du Nord",
        "altitude": "3250m",
        "slopes": "425km",
        "skiPass": 58,
        "lodging": 95,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3250m d'altitude avec 425km de pistes.",
        "advantages": [
            "425km de pistes",
            "Alt 3250m",
            "Alpes du Nord",
            "Forfait 58€"
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
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.la-plagne.com"
    },
    {
        "id": "les-arcs",
        "name": "Les Arcs",
        "lat": 45.5717,
        "lon": 6.8014,
        "region": "Alpes du Nord",
        "altitude": "3226m",
        "slopes": "425km",
        "skiPass": 57,
        "lodging": 93,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3226m d'altitude avec 425km de pistes.",
        "advantages": [
            "425km de pistes",
            "Alt 3226m",
            "Alpes du Nord",
            "Forfait 57€"
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
        "officialWebsite": "https://www.lesarcs.com"
    },
    {
        "id": "peisey-vallandry",
        "name": "Peisey-Vallandry",
        "lat": 45.55,
        "lon": 6.7667,
        "region": "Alpes du Nord",
        "altitude": "3226m",
        "slopes": "425km",
        "skiPass": 54,
        "lodging": 82,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3226m d'altitude avec 425km de pistes.",
        "advantages": [
            "425km de pistes",
            "Alt 3226m",
            "Alpes du Nord",
            "Forfait 54€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.peiseyvallandry.com"
    },
    {
        "id": "la-rosi-re",
        "name": "La Rosière",
        "lat": 45.6336,
        "lon": 6.8494,
        "region": "Alpes du Nord",
        "altitude": "2800m",
        "slopes": "160km",
        "skiPass": 54,
        "lodging": 89,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2800m d'altitude avec 160km de pistes.",
        "advantages": [
            "160km de pistes",
            "Alt 2800m",
            "Alpes du Nord",
            "Forfait 54€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.larosiere.net"
    },
    {
        "id": "valmorel",
        "name": "Valmorel",
        "lat": 45.4592,
        "lon": 6.4739,
        "region": "Alpes du Nord",
        "altitude": "2550m",
        "slopes": "165km",
        "skiPass": 53,
        "lodging": 88,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2550m d'altitude avec 165km de pistes.",
        "advantages": [
            "165km de pistes",
            "Alt 2550m",
            "Alpes du Nord",
            "Forfait 53€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.valmorel.com"
    },
    {
        "id": "saint-fran-ois-longchamp",
        "name": "Saint-François-Longchamp",
        "lat": 45.4167,
        "lon": 6.3667,
        "region": "Alpes du Nord",
        "altitude": "2550m",
        "slopes": "165km",
        "skiPass": 50,
        "lodging": 80,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2550m d'altitude avec 165km de pistes.",
        "advantages": [
            "165km de pistes",
            "Alt 2550m",
            "Alpes du Nord",
            "Forfait 50€"
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
        "officialWebsite": "https://www.st-francois-longchamp.com"
    },
    {
        "id": "val-cenis",
        "name": "Val Cenis",
        "lat": 45.2833,
        "lon": 6.95,
        "region": "Alpes du Nord",
        "altitude": "2800m",
        "slopes": "125km",
        "skiPass": 52,
        "lodging": 82,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2800m d'altitude avec 125km de pistes.",
        "advantages": [
            "125km de pistes",
            "Alt 2800m",
            "Alpes du Nord",
            "Forfait 52€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.valcenis.com"
    },
    {
        "id": "la-norma",
        "name": "La Norma",
        "lat": 45.2333,
        "lon": 6.75,
        "region": "Alpes du Nord",
        "altitude": "2750m",
        "slopes": "65km",
        "skiPass": 46,
        "lodging": 78,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2750m d'altitude avec 65km de pistes.",
        "advantages": [
            "65km de pistes",
            "Alt 2750m",
            "Alpes du Nord",
            "Forfait 46€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.lanorma.com"
    },
    {
        "id": "aussois",
        "name": "Aussois",
        "lat": 45.2333,
        "lon": 6.7333,
        "region": "Alpes du Nord",
        "altitude": "2750m",
        "slopes": "55km",
        "skiPass": 44,
        "lodging": 72,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2750m d'altitude avec 55km de pistes.",
        "advantages": [
            "55km de pistes",
            "Alt 2750m",
            "Alpes du Nord",
            "Forfait 44€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.aussois.com"
    },
    {
        "id": "pralognan-la-vanoise",
        "name": "Pralognan-la-Vanoise",
        "lat": 45.3808,
        "lon": 6.7208,
        "region": "Alpes du Nord",
        "altitude": "2360m",
        "slopes": "25km",
        "skiPass": 38,
        "lodging": 75,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2360m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 2360m",
            "Alpes du Nord",
            "Forfait 38€"
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
        "officialWebsite": "https://www.pralognan.com"
    },
    {
        "id": "les-saisies",
        "name": "Les Saisies",
        "lat": 45.7583,
        "lon": 6.5333,
        "region": "Alpes du Nord",
        "altitude": "1950m",
        "slopes": "192km",
        "skiPass": 54,
        "lodging": 88,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1950m d'altitude avec 192km de pistes.",
        "advantages": [
            "192km de pistes",
            "Alt 1950m",
            "Alpes du Nord",
            "Forfait 54€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.lessaisies.com"
    },
    {
        "id": "la-tania",
        "name": "La Tania",
        "lat": 45.45,
        "lon": 6.5833,
        "region": "Alpes du Nord",
        "altitude": "2738m",
        "slopes": "600km",
        "skiPass": 65,
        "lodging": 95,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2738m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 2738m",
            "Alpes du Nord",
            "Forfait 65€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.latania.com"
    },
    {
        "id": "brides-les-bains",
        "name": "Brides-les-Bains",
        "lat": 45.45,
        "lon": 6.5667,
        "region": "Alpes du Nord",
        "altitude": "2850m",
        "slopes": "600km",
        "skiPass": 58,
        "lodging": 90,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2850m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 2850m",
            "Alpes du Nord",
            "Forfait 58€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.brideslesbains.com"
    },
    {
        "id": "orelle",
        "name": "Orelle",
        "lat": 45.2167,
        "lon": 6.5333,
        "region": "Alpes du Nord",
        "altitude": "3230m",
        "slopes": "600km",
        "skiPass": 55,
        "lodging": 75,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3230m d'altitude avec 600km de pistes.",
        "advantages": [
            "600km de pistes",
            "Alt 3230m",
            "Alpes du Nord",
            "Forfait 55€"
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
        "officialWebsite": "https://www.orelle.com"
    },
    {
        "id": "bonneval-sur-arc",
        "name": "Bonneval-sur-Arc",
        "lat": 45.3667,
        "lon": 7.0167,
        "region": "Alpes du Nord",
        "altitude": "3000m",
        "slopes": "30km",
        "skiPass": 40,
        "lodging": 70,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3000m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 3000m",
            "Alpes du Nord",
            "Forfait 40€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.bonneval-sur-arc.com"
    },
    {
        "id": "bessans",
        "name": "Bessans",
        "lat": 45.3167,
        "lon": 6.9833,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "20km",
        "skiPass": 35,
        "lodging": 65,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 35€"
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
        "officialWebsite": "https://www.bessans.com"
    },
    {
        "id": "termignon",
        "name": "Termignon",
        "lat": 45.2833,
        "lon": 6.8167,
        "region": "Alpes du Nord",
        "altitude": "2500m",
        "slopes": "15km",
        "skiPass": 32,
        "lodging": 60,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2500m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 2500m",
            "Alpes du Nord",
            "Forfait 32€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.termignon.com"
    },
    {
        "id": "la-l-ch-re",
        "name": "La Léchère",
        "lat": 45.5333,
        "lon": 6.4833,
        "region": "Alpes du Nord",
        "altitude": "2000m",
        "slopes": "50km",
        "skiPass": 42,
        "lodging": 68,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2000m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2000m",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lalechere.com"
    },
    {
        "id": "montchavin-les-coches",
        "name": "Montchavin-Les Coches",
        "lat": 45.5333,
        "lon": 6.7167,
        "region": "Alpes du Nord",
        "altitude": "3250m",
        "slopes": "425km",
        "skiPass": 56,
        "lodging": 88,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3250m d'altitude avec 425km de pistes.",
        "advantages": [
            "425km de pistes",
            "Alt 3250m",
            "Alpes du Nord",
            "Forfait 56€"
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
        "officialWebsite": "https://www.montchavinlescoches.com"
    },
    {
        "id": "champagny-en-vanoise",
        "name": "Champagny-en-Vanoise",
        "lat": 45.4667,
        "lon": 6.6833,
        "region": "Alpes du Nord",
        "altitude": "3250m",
        "slopes": "425km",
        "skiPass": 54,
        "lodging": 82,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3250m d'altitude avec 425km de pistes.",
        "advantages": [
            "425km de pistes",
            "Alt 3250m",
            "Alpes du Nord",
            "Forfait 54€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.champagnyenvanoise.com"
    },
    {
        "id": "le-corbier",
        "name": "Le Corbier",
        "lat": 45.25,
        "lon": 6.2833,
        "region": "Alpes du Nord",
        "altitude": "2620m",
        "slopes": "310km",
        "skiPass": 52,
        "lodging": 78,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2620m d'altitude avec 310km de pistes.",
        "advantages": [
            "310km de pistes",
            "Alt 2620m",
            "Alpes du Nord",
            "Forfait 52€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lecorbier.com"
    },
    {
        "id": "la-toussuire",
        "name": "La Toussuire",
        "lat": 45.25,
        "lon": 6.3,
        "region": "Alpes du Nord",
        "altitude": "2620m",
        "slopes": "310km",
        "skiPass": 50,
        "lodging": 75,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2620m d'altitude avec 310km de pistes.",
        "advantages": [
            "310km de pistes",
            "Alt 2620m",
            "Alpes du Nord",
            "Forfait 50€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.latoussuire.com"
    },
    {
        "id": "les-botti-res",
        "name": "Les Bottières",
        "lat": 45.2667,
        "lon": 6.3167,
        "region": "Alpes du Nord",
        "altitude": "2620m",
        "slopes": "310km",
        "skiPass": 48,
        "lodging": 72,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2620m d'altitude avec 310km de pistes.",
        "advantages": [
            "310km de pistes",
            "Alt 2620m",
            "Alpes du Nord",
            "Forfait 48€"
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
        "officialWebsite": "https://www.lesbottieres.com"
    },
    {
        "id": "saint-jean-d-arves",
        "name": "Saint-Jean-d'Arves",
        "lat": 45.2333,
        "lon": 6.25,
        "region": "Alpes du Nord",
        "altitude": "2620m",
        "slopes": "310km",
        "skiPass": 49,
        "lodging": 73,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2620m d'altitude avec 310km de pistes.",
        "advantages": [
            "310km de pistes",
            "Alt 2620m",
            "Alpes du Nord",
            "Forfait 49€"
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
        "officialWebsite": "https://www.saintjeandarves.com"
    },
    {
        "id": "saint-sorlin-d-arves",
        "name": "Saint-Sorlin-d'Arves",
        "lat": 45.2167,
        "lon": 6.2667,
        "region": "Alpes du Nord",
        "altitude": "2620m",
        "slopes": "310km",
        "skiPass": 48,
        "lodging": 72,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2620m d'altitude avec 310km de pistes.",
        "advantages": [
            "310km de pistes",
            "Alt 2620m",
            "Alpes du Nord",
            "Forfait 48€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.saintsorlindarves.com"
    },
    {
        "id": "la-joue-du-loup",
        "name": "La Joue du Loup",
        "lat": 44.7167,
        "lon": 5.8667,
        "region": "Alpes du Nord",
        "altitude": "2000m",
        "slopes": "50km",
        "skiPass": 40,
        "lodging": 65,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2000m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2000m",
            "Alpes du Nord",
            "Forfait 40€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lajoueduloup.com"
    },
    {
        "id": "albiez-montrond",
        "name": "Albiez-Montrond",
        "lat": 45.2333,
        "lon": 6.3833,
        "region": "Alpes du Nord",
        "altitude": "2100m",
        "slopes": "80km",
        "skiPass": 45,
        "lodging": 68,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2100m d'altitude avec 80km de pistes.",
        "advantages": [
            "80km de pistes",
            "Alt 2100m",
            "Alpes du Nord",
            "Forfait 45€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.albiezmontrond.com"
    },
    {
        "id": "valloire",
        "name": "Valloire",
        "lat": 45.1667,
        "lon": 6.4333,
        "region": "Alpes du Nord",
        "altitude": "2600m",
        "slopes": "150km",
        "skiPass": 54,
        "lodging": 85,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2600m d'altitude avec 150km de pistes.",
        "advantages": [
            "150km de pistes",
            "Alt 2600m",
            "Alpes du Nord",
            "Forfait 54€"
        ],
        "level": "Expert",
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
        "id": "valmeinier",
        "name": "Valmeinier",
        "lat": 45.1833,
        "lon": 6.5,
        "region": "Alpes du Nord",
        "altitude": "2600m",
        "slopes": "150km",
        "skiPass": 52,
        "lodging": 82,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2600m d'altitude avec 150km de pistes.",
        "advantages": [
            "150km de pistes",
            "Alt 2600m",
            "Alpes du Nord",
            "Forfait 52€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.valmeinier.com"
    },
    {
        "id": "l-alpe-d-huez",
        "name": "L'Alpe d'Huez",
        "lat": 45.0908,
        "lon": 6.0672,
        "region": "Alpes du Nord",
        "altitude": "3330m",
        "slopes": "250km",
        "skiPass": 60,
        "lodging": 102,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3330m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 3330m",
            "Alpes du Nord",
            "Forfait 60€"
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
        "officialWebsite": "https://www.alpedhuez.com"
    },
    {
        "id": "les-deux-alpes",
        "name": "Les Deux Alpes",
        "lat": 45.0167,
        "lon": 6.1167,
        "region": "Alpes du Nord",
        "altitude": "3600m",
        "slopes": "200km",
        "skiPass": 56,
        "lodging": 89,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3600m d'altitude avec 200km de pistes.",
        "advantages": [
            "200km de pistes",
            "Alt 3600m",
            "Alpes du Nord",
            "Forfait 56€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.les2alpes.com"
    },
    {
        "id": "chamrousse",
        "name": "Chamrousse",
        "lat": 45.1147,
        "lon": 5.8861,
        "region": "Alpes du Nord",
        "altitude": "2250m",
        "slopes": "90km",
        "skiPass": 48,
        "lodging": 82,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
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
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.chamrousse.com"
    },
    {
        "id": "les-7-laux",
        "name": "Les 7 Laux",
        "lat": 45.2811,
        "lon": 6.0464,
        "region": "Alpes du Nord",
        "altitude": "2400m",
        "slopes": "120km",
        "skiPass": 50,
        "lodging": 80,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2400m d'altitude avec 120km de pistes.",
        "advantages": [
            "120km de pistes",
            "Alt 2400m",
            "Alpes du Nord",
            "Forfait 50€"
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
        "officialWebsite": "https://www.les7laux.com"
    },
    {
        "id": "villard-de-lans",
        "name": "Villard-de-Lans",
        "lat": 45.0667,
        "lon": 5.55,
        "region": "Alpes du Nord",
        "altitude": "2170m",
        "slopes": "125km",
        "skiPass": 47,
        "lodging": 76,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2170m d'altitude avec 125km de pistes.",
        "advantages": [
            "125km de pistes",
            "Alt 2170m",
            "Alpes du Nord",
            "Forfait 47€"
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
        "officialWebsite": "https://www.villarddelans.com"
    },
    {
        "id": "vaujany",
        "name": "Vaujany",
        "lat": 45.1567,
        "lon": 6.06,
        "region": "Alpes du Nord",
        "altitude": "3330m",
        "slopes": "250km",
        "skiPass": 54,
        "lodging": 85,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3330m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 3330m",
            "Alpes du Nord",
            "Forfait 54€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.vaujany.com"
    },
    {
        "id": "oz-en-oisans",
        "name": "Oz-en-Oisans",
        "lat": 45.1333,
        "lon": 6.0667,
        "region": "Alpes du Nord",
        "altitude": "3330m",
        "slopes": "250km",
        "skiPass": 53,
        "lodging": 82,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3330m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 3330m",
            "Alpes du Nord",
            "Forfait 53€"
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
        "officialWebsite": "https://www.oz-en-oisans.com"
    },
    {
        "id": "auris-en-oisans",
        "name": "Auris-en-Oisans",
        "lat": 45.0667,
        "lon": 6.0833,
        "region": "Alpes du Nord",
        "altitude": "3330m",
        "slopes": "250km",
        "skiPass": 52,
        "lodging": 80,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 3330m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 3330m",
            "Alpes du Nord",
            "Forfait 52€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.aurisenoisans.com"
    },
    {
        "id": "l-alpe-du-grand-serre",
        "name": "L'Alpe du Grand Serre",
        "lat": 44.8833,
        "lon": 5.8667,
        "region": "Alpes du Nord",
        "altitude": "2115m",
        "slopes": "50km",
        "skiPass": 40,
        "lodging": 68,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2115m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2115m",
            "Alpes du Nord",
            "Forfait 40€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lalpedugrandserre.com"
    },
    {
        "id": "corren-on-en-vercors",
        "name": "Corrençon-en-Vercors",
        "lat": 45.0167,
        "lon": 5.5333,
        "region": "Alpes du Nord",
        "altitude": "2050m",
        "slopes": "30km",
        "skiPass": 38,
        "lodging": 65,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2050m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 2050m",
            "Alpes du Nord",
            "Forfait 38€"
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
        "officialWebsite": "https://www.correnconenvercors.com"
    },
    {
        "id": "m-audre",
        "name": "Méaudre",
        "lat": 45.1333,
        "lon": 5.5333,
        "region": "Alpes du Nord",
        "altitude": "1600m",
        "slopes": "25km",
        "skiPass": 35,
        "lodging": 60,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1600m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1600m",
            "Alpes du Nord",
            "Forfait 35€"
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
        "officialWebsite": "https://www.meaudre.com"
    },
    {
        "id": "autrans",
        "name": "Autrans",
        "lat": 45.1833,
        "lon": 5.5333,
        "region": "Alpes du Nord",
        "altitude": "1650m",
        "slopes": "20km",
        "skiPass": 33,
        "lodging": 58,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1650m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1650m",
            "Alpes du Nord",
            "Forfait 33€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.autrans.com"
    },
    {
        "id": "lans-en-vercors",
        "name": "Lans-en-Vercors",
        "lat": 45.1333,
        "lon": 5.5833,
        "region": "Alpes du Nord",
        "altitude": "1700m",
        "slopes": "22km",
        "skiPass": 34,
        "lodging": 59,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1700m d'altitude avec 22km de pistes.",
        "advantages": [
            "22km de pistes",
            "Alt 1700m",
            "Alpes du Nord",
            "Forfait 34€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lansenvercors.com"
    },
    {
        "id": "saint-pierre-de-chartreuse",
        "name": "Saint-Pierre-de-Chartreuse",
        "lat": 45.3333,
        "lon": 5.8,
        "region": "Alpes du Nord",
        "altitude": "1800m",
        "slopes": "35km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1800m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 1800m",
            "Alpes du Nord",
            "Forfait 38€"
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
        "officialWebsite": "https://www.saintpierredechartreuse.com"
    },
    {
        "id": "le-collet-d-allevard",
        "name": "Le Collet d'Allevard",
        "lat": 45.3833,
        "lon": 6.0833,
        "region": "Alpes du Nord",
        "altitude": "2100m",
        "slopes": "40km",
        "skiPass": 40,
        "lodging": 66,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2100m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2100m",
            "Alpes du Nord",
            "Forfait 40€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lecolletdallevard.com"
    },
    {
        "id": "col-de-porte",
        "name": "Col de Porte",
        "lat": 45.2833,
        "lon": 5.7667,
        "region": "Alpes du Nord",
        "altitude": "1700m",
        "slopes": "18km",
        "skiPass": 30,
        "lodging": 55,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1700m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1700m",
            "Alpes du Nord",
            "Forfait 30€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.coldeporte.com"
    },
    {
        "id": "gresse-en-vercors",
        "name": "Gresse-en-Vercors",
        "lat": 44.9,
        "lon": 5.55,
        "region": "Alpes du Nord",
        "altitude": "1800m",
        "slopes": "25km",
        "skiPass": 35,
        "lodging": 60,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1800m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1800m",
            "Alpes du Nord",
            "Forfait 35€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.gresseenvercors.com"
    },
    {
        "id": "font-d-urle",
        "name": "Font d'Urle",
        "lat": 44.9167,
        "lon": 5.4333,
        "region": "Alpes du Nord",
        "altitude": "1650m",
        "slopes": "15km",
        "skiPass": 28,
        "lodging": 52,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1650m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1650m",
            "Alpes du Nord",
            "Forfait 28€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.fontdurle.com"
    },
    {
        "id": "herbouilly",
        "name": "Herbouilly",
        "lat": 45.0833,
        "lon": 5.5,
        "region": "Alpes du Nord",
        "altitude": "1650m",
        "slopes": "12km",
        "skiPass": 25,
        "lodging": 50,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1650m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1650m",
            "Alpes du Nord",
            "Forfait 25€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.herbouilly.com"
    },
    {
        "id": "col-de-marcieu",
        "name": "Col de Marcieu",
        "lat": 45.35,
        "lon": 5.75,
        "region": "Alpes du Nord",
        "altitude": "1500m",
        "slopes": "10km",
        "skiPass": 22,
        "lodging": 48,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1500m d'altitude avec 10km de pistes.",
        "advantages": [
            "10km de pistes",
            "Alt 1500m",
            "Alpes du Nord",
            "Forfait 22€"
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
        "officialWebsite": "https://www.coldemarcieu.com"
    },
    {
        "id": "montagne-de-lans",
        "name": "Montagne de Lans",
        "lat": 45.1,
        "lon": 5.6,
        "region": "Alpes du Nord",
        "altitude": "1700m",
        "slopes": "15km",
        "skiPass": 28,
        "lodging": 52,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1700m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1700m",
            "Alpes du Nord",
            "Forfait 28€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.montagnedelans.com"
    },
    {
        "id": "signal-de-l-homme",
        "name": "Signal de l'Homme",
        "lat": 45.3667,
        "lon": 6.1167,
        "region": "Alpes du Nord",
        "altitude": "2050m",
        "slopes": "20km",
        "skiPass": 32,
        "lodging": 58,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 2050m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 2050m",
            "Alpes du Nord",
            "Forfait 32€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.signaldelhomme.com"
    },
    {
        "id": "cr-t-du-poulet",
        "name": "Crêt du Poulet",
        "lat": 45.3167,
        "lon": 5.8333,
        "region": "Alpes du Nord",
        "altitude": "1600m",
        "slopes": "18km",
        "skiPass": 30,
        "lodging": 56,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1600m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1600m",
            "Alpes du Nord",
            "Forfait 30€"
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
        "officialWebsite": "https://www.cretdupoulet.com"
    },
    {
        "id": "charmant-som",
        "name": "Charmant Som",
        "lat": 45.3,
        "lon": 5.7833,
        "region": "Alpes du Nord",
        "altitude": "1700m",
        "slopes": "16km",
        "skiPass": 29,
        "lodging": 54,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1700m d'altitude avec 16km de pistes.",
        "advantages": [
            "16km de pistes",
            "Alt 1700m",
            "Alpes du Nord",
            "Forfait 29€"
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
        "officialWebsite": "https://www.charmantsom.com"
    },
    {
        "id": "m-audre-nordic",
        "name": "Méaudre Nordic",
        "lat": 45.1167,
        "lon": 5.5167,
        "region": "Alpes du Nord",
        "altitude": "1600m",
        "slopes": "12km",
        "skiPass": 26,
        "lodging": 51,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Nord située à 1600m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1600m",
            "Alpes du Nord",
            "Forfait 26€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.meaudrenordic.com"
    },
    {
        "id": "serre-chevalier",
        "name": "Serre Chevalier",
        "lat": 44.9417,
        "lon": 6.55,
        "region": "Alpes du Sud",
        "altitude": "2830m",
        "slopes": "250km",
        "skiPass": 56,
        "lodging": 88,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2830m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 2830m",
            "Alpes du Sud",
            "Forfait 56€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.serre-chevalier.com"
    },
    {
        "id": "vars",
        "name": "Vars",
        "lat": 44.5781,
        "lon": 6.7042,
        "region": "Alpes du Sud",
        "altitude": "2750m",
        "slopes": "185km",
        "skiPass": 54,
        "lodging": 84,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2750m d'altitude avec 185km de pistes.",
        "advantages": [
            "185km de pistes",
            "Alt 2750m",
            "Alpes du Sud",
            "Forfait 54€"
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
        "officialWebsite": "https://www.vars.com"
    },
    {
        "id": "risoul",
        "name": "Risoul",
        "lat": 44.6217,
        "lon": 6.6328,
        "region": "Alpes du Sud",
        "altitude": "2750m",
        "slopes": "185km",
        "skiPass": 53,
        "lodging": 82,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2750m d'altitude avec 185km de pistes.",
        "advantages": [
            "185km de pistes",
            "Alt 2750m",
            "Alpes du Sud",
            "Forfait 53€"
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
        "officialWebsite": "https://www.risoul.com"
    },
    {
        "id": "les-orres",
        "name": "Les Orres",
        "lat": 44.4881,
        "lon": 6.5514,
        "region": "Alpes du Sud",
        "altitude": "2720m",
        "slopes": "100km",
        "skiPass": 50,
        "lodging": 79,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2720m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2720m",
            "Alpes du Sud",
            "Forfait 50€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.lesorres.com"
    },
    {
        "id": "montgen-vre",
        "name": "Montgenèvre",
        "lat": 44.9311,
        "lon": 6.725,
        "region": "Alpes du Sud",
        "altitude": "2700m",
        "slopes": "400km",
        "skiPass": 55,
        "lodging": 86,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2700m d'altitude avec 400km de pistes.",
        "advantages": [
            "400km de pistes",
            "Alt 2700m",
            "Alpes du Sud",
            "Forfait 55€"
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
        "officialWebsite": "https://www.montgenevre.com"
    },
    {
        "id": "puy-saint-vincent",
        "name": "Puy-Saint-Vincent",
        "lat": 44.8333,
        "lon": 6.4833,
        "region": "Alpes du Sud",
        "altitude": "2700m",
        "slopes": "75km",
        "skiPass": 44,
        "lodging": 72,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2700m d'altitude avec 75km de pistes.",
        "advantages": [
            "75km de pistes",
            "Alt 2700m",
            "Alpes du Sud",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.puysaintvincent.com"
    },
    {
        "id": "orci-res-merlette",
        "name": "Orcières Merlette",
        "lat": 44.6889,
        "lon": 6.3256,
        "region": "Alpes du Sud",
        "altitude": "2725m",
        "slopes": "100km",
        "skiPass": 49,
        "lodging": 78,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
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
        "officialWebsite": "https://www.orcieres.com"
    },
    {
        "id": "r-allon",
        "name": "Réallon",
        "lat": 44.6,
        "lon": 6.3833,
        "region": "Alpes du Sud",
        "altitude": "2450m",
        "slopes": "30km",
        "skiPass": 36,
        "lodging": 65,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2450m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 2450m",
            "Alpes du Sud",
            "Forfait 36€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.reallon.com"
    },
    {
        "id": "ancelle",
        "name": "Ancelle",
        "lat": 44.6333,
        "lon": 6.2167,
        "region": "Alpes du Sud",
        "altitude": "1800m",
        "slopes": "20km",
        "skiPass": 32,
        "lodging": 58,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1800m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1800m",
            "Alpes du Sud",
            "Forfait 32€"
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
        "officialWebsite": "https://www.ancelle.com"
    },
    {
        "id": "c-ze",
        "name": "Céüze",
        "lat": 44.5167,
        "lon": 6.3833,
        "region": "Alpes du Sud",
        "altitude": "1850m",
        "slopes": "25km",
        "skiPass": 34,
        "lodging": 60,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1850m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1850m",
            "Alpes du Sud",
            "Forfait 34€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.ceuze.com"
    },
    {
        "id": "chaillol",
        "name": "Chaillol",
        "lat": 44.7,
        "lon": 6.2833,
        "region": "Alpes du Sud",
        "altitude": "2000m",
        "slopes": "30km",
        "skiPass": 35,
        "lodging": 62,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2000m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 2000m",
            "Alpes du Sud",
            "Forfait 35€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.chaillol.com"
    },
    {
        "id": "cr-voux",
        "name": "Crévoux",
        "lat": 44.5833,
        "lon": 6.6,
        "region": "Alpes du Sud",
        "altitude": "2250m",
        "slopes": "35km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2250m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 2250m",
            "Alpes du Sud",
            "Forfait 38€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.crevoux.com"
    },
    {
        "id": "superd-voluy",
        "name": "Superdévoluy",
        "lat": 44.6833,
        "lon": 5.9167,
        "region": "Alpes du Sud",
        "altitude": "2500m",
        "slopes": "100km",
        "skiPass": 48,
        "lodging": 75,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2500m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2500m",
            "Alpes du Sud",
            "Forfait 48€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.superdevoluy.com"
    },
    {
        "id": "la-joue-du-loup",
        "name": "La Joue du Loup",
        "lat": 44.7167,
        "lon": 5.8667,
        "region": "Alpes du Sud",
        "altitude": "2007m",
        "slopes": "100km",
        "skiPass": 46,
        "lodging": 73,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2007m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2007m",
            "Alpes du Sud",
            "Forfait 46€"
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
        "officialWebsite": "https://www.lajoueduloup.com"
    },
    {
        "id": "saint-l-ger-les-m-l-zes",
        "name": "Saint-Léger-les-Mélèzes",
        "lat": 44.6667,
        "lon": 6.1833,
        "region": "Alpes du Sud",
        "altitude": "1800m",
        "slopes": "25km",
        "skiPass": 33,
        "lodging": 59,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1800m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1800m",
            "Alpes du Sud",
            "Forfait 33€"
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
        "officialWebsite": "https://www.saintlegerlesmelezes.com"
    },
    {
        "id": "pelvoux",
        "name": "Pelvoux",
        "lat": 44.8833,
        "lon": 6.5,
        "region": "Alpes du Sud",
        "altitude": "2000m",
        "slopes": "20km",
        "skiPass": 30,
        "lodging": 56,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2000m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 2000m",
            "Alpes du Sud",
            "Forfait 30€"
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
        "officialWebsite": "https://www.pelvoux.com"
    },
    {
        "id": "saint-jean-montclar",
        "name": "Saint-Jean-Montclar",
        "lat": 44.3833,
        "lon": 6.3167,
        "region": "Alpes du Sud",
        "altitude": "2200m",
        "slopes": "40km",
        "skiPass": 40,
        "lodging": 68,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2200m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2200m",
            "Alpes du Sud",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.saintjeanmontclar.com"
    },
    {
        "id": "grand-puy",
        "name": "Grand Puy",
        "lat": 44.4,
        "lon": 6.2833,
        "region": "Alpes du Sud",
        "altitude": "1850m",
        "slopes": "22km",
        "skiPass": 32,
        "lodging": 58,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1850m d'altitude avec 22km de pistes.",
        "advantages": [
            "22km de pistes",
            "Alt 1850m",
            "Alpes du Sud",
            "Forfait 32€"
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
        "officialWebsite": "https://www.grandpuy.com"
    },
    {
        "id": "ch-teau-ville-vieille",
        "name": "Château-Ville-Vieille",
        "lat": 44.7667,
        "lon": 6.85,
        "region": "Alpes du Sud",
        "altitude": "2100m",
        "slopes": "15km",
        "skiPass": 28,
        "lodging": 54,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2100m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 2100m",
            "Alpes du Sud",
            "Forfait 28€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.chateauvillevieille.com"
    },
    {
        "id": "abri-s",
        "name": "Abriès",
        "lat": 44.7833,
        "lon": 6.9167,
        "region": "Alpes du Sud",
        "altitude": "2000m",
        "slopes": "18km",
        "skiPass": 30,
        "lodging": 56,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2000m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 2000m",
            "Alpes du Sud",
            "Forfait 30€"
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
        "officialWebsite": "https://www.abries.com"
    },
    {
        "id": "molines-en-queyras",
        "name": "Molines-en-Queyras",
        "lat": 44.7333,
        "lon": 6.85,
        "region": "Alpes du Sud",
        "altitude": "2100m",
        "slopes": "20km",
        "skiPass": 31,
        "lodging": 57,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2100m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 2100m",
            "Alpes du Sud",
            "Forfait 31€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.molinesenqueyras.com"
    },
    {
        "id": "arvieux",
        "name": "Arvieux",
        "lat": 44.7833,
        "lon": 6.7333,
        "region": "Alpes du Sud",
        "altitude": "1900m",
        "slopes": "12km",
        "skiPass": 25,
        "lodging": 52,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1900m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1900m",
            "Alpes du Sud",
            "Forfait 25€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.arvieux.com"
    },
    {
        "id": "la-grave",
        "name": "La Grave",
        "lat": 45.05,
        "lon": 6.3,
        "region": "Alpes du Sud",
        "altitude": "3550m",
        "slopes": "60km",
        "skiPass": 52,
        "lodging": 85,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 3550m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 3550m",
            "Alpes du Sud",
            "Forfait 52€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lagrave.com"
    },
    {
        "id": "n-vache",
        "name": "Névache",
        "lat": 45.0167,
        "lon": 6.6167,
        "region": "Alpes du Sud",
        "altitude": "2100m",
        "slopes": "15km",
        "skiPass": 28,
        "lodging": 54,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2100m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 2100m",
            "Alpes du Sud",
            "Forfait 28€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.nevache.com"
    },
    {
        "id": "ceillac",
        "name": "Ceillac",
        "lat": 44.6833,
        "lon": 6.7833,
        "region": "Alpes du Sud",
        "altitude": "2100m",
        "slopes": "25km",
        "skiPass": 34,
        "lodging": 60,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2100m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 2100m",
            "Alpes du Sud",
            "Forfait 34€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.ceillac.com"
    },
    {
        "id": "saint-v-ran",
        "name": "Saint-Véran",
        "lat": 44.7,
        "lon": 6.8667,
        "region": "Alpes du Sud",
        "altitude": "2100m",
        "slopes": "20km",
        "skiPass": 32,
        "lodging": 58,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2100m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 2100m",
            "Alpes du Sud",
            "Forfait 32€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.saintveran.com"
    },
    {
        "id": "ristolas",
        "name": "Ristolas",
        "lat": 44.7667,
        "lon": 6.9667,
        "region": "Alpes du Sud",
        "altitude": "1950m",
        "slopes": "10km",
        "skiPass": 24,
        "lodging": 50,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1950m d'altitude avec 10km de pistes.",
        "advantages": [
            "10km de pistes",
            "Alt 1950m",
            "Alpes du Sud",
            "Forfait 24€"
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
        "officialWebsite": "https://www.ristolas.com"
    },
    {
        "id": "villeneuve-la-salle",
        "name": "Villeneuve-la-Salle",
        "lat": 44.95,
        "lon": 6.5667,
        "region": "Alpes du Sud",
        "altitude": "2700m",
        "slopes": "250km",
        "skiPass": 54,
        "lodging": 82,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2700m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 2700m",
            "Alpes du Sud",
            "Forfait 54€"
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
        "officialWebsite": "https://www.villeneuvelasalle.com"
    },
    {
        "id": "brian-on",
        "name": "Briançon",
        "lat": 44.8972,
        "lon": 6.6431,
        "region": "Alpes du Sud",
        "altitude": "2800m",
        "slopes": "250km",
        "skiPass": 55,
        "lodging": 84,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2800m d'altitude avec 250km de pistes.",
        "advantages": [
            "250km de pistes",
            "Alt 2800m",
            "Alpes du Sud",
            "Forfait 55€"
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
        "officialWebsite": "https://www.briancon.com"
    },
    {
        "id": "col-du-lautaret",
        "name": "Col du Lautaret",
        "lat": 45.0333,
        "lon": 6.4,
        "region": "Alpes du Sud",
        "altitude": "2500m",
        "slopes": "20km",
        "skiPass": 30,
        "lodging": 55,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2500m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 2500m",
            "Alpes du Sud",
            "Forfait 30€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.coldulautaret.com"
    },
    {
        "id": "isola-2000",
        "name": "Isola 2000",
        "lat": 44.1833,
        "lon": 7.15,
        "region": "Alpes du Sud",
        "altitude": "2610m",
        "slopes": "120km",
        "skiPass": 52,
        "lodging": 85,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2610m d'altitude avec 120km de pistes.",
        "advantages": [
            "120km de pistes",
            "Alt 2610m",
            "Alpes du Sud",
            "Forfait 52€"
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
        "officialWebsite": "https://www.isola2000.com"
    },
    {
        "id": "auron",
        "name": "Auron",
        "lat": 44.2206,
        "lon": 6.9081,
        "region": "Alpes du Sud",
        "altitude": "2450m",
        "slopes": "135km",
        "skiPass": 50,
        "lodging": 82,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2450m d'altitude avec 135km de pistes.",
        "advantages": [
            "135km de pistes",
            "Alt 2450m",
            "Alpes du Sud",
            "Forfait 50€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.auron.com"
    },
    {
        "id": "valberg",
        "name": "Valberg",
        "lat": 44.0928,
        "lon": 6.9331,
        "region": "Alpes du Sud",
        "altitude": "2066m",
        "slopes": "90km",
        "skiPass": 47,
        "lodging": 76,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2066m d'altitude avec 90km de pistes.",
        "advantages": [
            "90km de pistes",
            "Alt 2066m",
            "Alpes du Sud",
            "Forfait 47€"
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
        "officialWebsite": "https://www.valberg.com"
    },
    {
        "id": "la-colmiane",
        "name": "La Colmiane",
        "lat": 43.9833,
        "lon": 7.2167,
        "region": "Alpes du Sud",
        "altitude": "1800m",
        "slopes": "30km",
        "skiPass": 38,
        "lodging": 65,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1800m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 1800m",
            "Alpes du Sud",
            "Forfait 38€"
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
        "officialWebsite": "https://www.lacolmiane.com"
    },
    {
        "id": "roubion-les-buisses",
        "name": "Roubion-Les Buisses",
        "lat": 44.0833,
        "lon": 7.0167,
        "region": "Alpes du Sud",
        "altitude": "1800m",
        "slopes": "35km",
        "skiPass": 40,
        "lodging": 68,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1800m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 1800m",
            "Alpes du Sud",
            "Forfait 40€"
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
        "officialWebsite": "https://www.roubionlesbuisses.com"
    },
    {
        "id": "gr-oli-res-les-neiges",
        "name": "Gréolières-les-Neiges",
        "lat": 43.8,
        "lon": 6.8333,
        "region": "Alpes du Sud",
        "altitude": "1800m",
        "slopes": "25km",
        "skiPass": 36,
        "lodging": 62,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1800m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1800m",
            "Alpes du Sud",
            "Forfait 36€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.greoliereslesneiges.com"
    },
    {
        "id": "turini-camp-d-argent",
        "name": "Turini Camp d'Argent",
        "lat": 43.9833,
        "lon": 7.3833,
        "region": "Alpes du Sud",
        "altitude": "1700m",
        "slopes": "20km",
        "skiPass": 34,
        "lodging": 60,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1700m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1700m",
            "Alpes du Sud",
            "Forfait 34€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.turinicampdargent.com"
    },
    {
        "id": "beuil-les-launes",
        "name": "Beuil-Les Launes",
        "lat": 44.0833,
        "lon": 6.9333,
        "region": "Alpes du Sud",
        "altitude": "2000m",
        "slopes": "90km",
        "skiPass": 45,
        "lodging": 72,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2000m d'altitude avec 90km de pistes.",
        "advantages": [
            "90km de pistes",
            "Alt 2000m",
            "Alpes du Sud",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.beuilleslaunes.com"
    },
    {
        "id": "le-bor-on",
        "name": "Le Boréon",
        "lat": 44.05,
        "lon": 7.2667,
        "region": "Alpes du Sud",
        "altitude": "1700m",
        "slopes": "15km",
        "skiPass": 30,
        "lodging": 58,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 1700m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1700m",
            "Alpes du Sud",
            "Forfait 30€"
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
        "officialWebsite": "https://www.leboreon.com"
    },
    {
        "id": "limone-piemonte",
        "name": "Limone Piemonte",
        "lat": 44.2,
        "lon": 7.5667,
        "region": "Alpes du Sud",
        "altitude": "2100m",
        "slopes": "80km",
        "skiPass": 48,
        "lodging": 75,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Alpes du Sud située à 2100m d'altitude avec 80km de pistes.",
        "advantages": [
            "80km de pistes",
            "Alt 2100m",
            "Alpes du Sud",
            "Forfait 48€"
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
        "officialWebsite": "https://www.limonepiemonte.com"
    },
    {
        "id": "grand-tourmalet",
        "name": "Grand Tourmalet",
        "lat": 42.9117,
        "lon": 0.1447,
        "region": "Pyrénées",
        "altitude": "2500m",
        "slopes": "100km",
        "skiPass": 48,
        "lodging": 75,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2500m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2500m",
            "Pyrénées",
            "Forfait 48€"
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
        "officialWebsite": "https://www.grand-tourmalet.com"
    },
    {
        "id": "saint-lary-soulan",
        "name": "Saint-Lary-Soulan",
        "lat": 42.8167,
        "lon": 0.3167,
        "region": "Pyrénées",
        "altitude": "2515m",
        "slopes": "100km",
        "skiPass": 49,
        "lodging": 77,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2515m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2515m",
            "Pyrénées",
            "Forfait 49€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.saintlary.com"
    },
    {
        "id": "peyragudes",
        "name": "Peyragudes",
        "lat": 42.7917,
        "lon": 0.4083,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "60km",
        "skiPass": 45,
        "lodging": 72,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 45€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.peyragudes.com"
    },
    {
        "id": "cauterets",
        "name": "Cauterets",
        "lat": 42.8858,
        "lon": -0.1164,
        "region": "Pyrénées",
        "altitude": "2415m",
        "slopes": "36km",
        "skiPass": 42,
        "lodging": 70,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2415m d'altitude avec 36km de pistes.",
        "advantages": [
            "36km de pistes",
            "Alt 2415m",
            "Pyrénées",
            "Forfait 42€"
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
        "officialWebsite": "https://www.cauterets.com"
    },
    {
        "id": "luz-ardiden",
        "name": "Luz Ardiden",
        "lat": 42.875,
        "lon": -0.0167,
        "region": "Pyrénées",
        "altitude": "2500m",
        "slopes": "60km",
        "skiPass": 44,
        "lodging": 71,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2500m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 2500m",
            "Pyrénées",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.luz.org"
    },
    {
        "id": "font-romeu",
        "name": "Font-Romeu",
        "lat": 42.5,
        "lon": 2.0333,
        "region": "Pyrénées",
        "altitude": "2213m",
        "slopes": "58km",
        "skiPass": 43,
        "lodging": 69,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2213m d'altitude avec 58km de pistes.",
        "advantages": [
            "58km de pistes",
            "Alt 2213m",
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
        "officialWebsite": "https://www.font-romeu.fr"
    },
    {
        "id": "les-angles",
        "name": "Les Angles",
        "lat": 42.5667,
        "lon": 2.0667,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "55km",
        "skiPass": 42,
        "lodging": 68,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 55km de pistes.",
        "advantages": [
            "55km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 42€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.lesangles.com"
    },
    {
        "id": "piau-engaly",
        "name": "Piau-Engaly",
        "lat": 42.7833,
        "lon": 0.1667,
        "region": "Pyrénées",
        "altitude": "2528m",
        "slopes": "65km",
        "skiPass": 46,
        "lodging": 73,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2528m d'altitude avec 65km de pistes.",
        "advantages": [
            "65km de pistes",
            "Alt 2528m",
            "Pyrénées",
            "Forfait 46€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.piau-engaly.com"
    },
    {
        "id": "gourette",
        "name": "Gourette",
        "lat": 42.9583,
        "lon": -0.3333,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "40km",
        "skiPass": 41,
        "lodging": 67,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 41€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.gourette.com"
    },
    {
        "id": "la-pierre-saint-martin",
        "name": "La Pierre Saint-Martin",
        "lat": 42.9833,
        "lon": -0.75,
        "region": "Pyrénées",
        "altitude": "2153m",
        "slopes": "25km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2153m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 2153m",
            "Pyrénées",
            "Forfait 38€"
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
        "officialWebsite": "https://www.lapierrestmartin.com"
    },
    {
        "id": "ax-3-domaines",
        "name": "Ax 3 Domaines",
        "lat": 42.7167,
        "lon": 1.8333,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "80km",
        "skiPass": 47,
        "lodging": 74,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 80km de pistes.",
        "advantages": [
            "80km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 47€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.ax-ski.com"
    },
    {
        "id": "peyresourde",
        "name": "Peyresourde",
        "lat": 42.7917,
        "lon": 0.5083,
        "region": "Pyrénées",
        "altitude": "2002m",
        "slopes": "50km",
        "skiPass": 40,
        "lodging": 66,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2002m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2002m",
            "Pyrénées",
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
        "officialWebsite": "https://www.peyresourde.com"
    },
    {
        "id": "val-louron",
        "name": "Val Louron",
        "lat": 42.7667,
        "lon": 0.4167,
        "region": "Pyrénées",
        "altitude": "2100m",
        "slopes": "45km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2100m d'altitude avec 45km de pistes.",
        "advantages": [
            "45km de pistes",
            "Alt 2100m",
            "Pyrénées",
            "Forfait 38€"
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
        "officialWebsite": "https://www.vallouron.com"
    },
    {
        "id": "gavarnie-g-dre",
        "name": "Gavarnie-Gèdre",
        "lat": 42.7333,
        "lon": -0.0167,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "35km",
        "skiPass": 39,
        "lodging": 65,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 39€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.gavarniegedre.com"
    },
    {
        "id": "hautacam",
        "name": "Hautacam",
        "lat": 42.9667,
        "lon": -0.05,
        "region": "Pyrénées",
        "altitude": "1850m",
        "slopes": "25km",
        "skiPass": 36,
        "lodging": 62,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1850m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1850m",
            "Pyrénées",
            "Forfait 36€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.hautacam.com"
    },
    {
        "id": "val-d-azun",
        "name": "Val d'Azun",
        "lat": 42.9833,
        "lon": -0.1333,
        "region": "Pyrénées",
        "altitude": "1800m",
        "slopes": "20km",
        "skiPass": 34,
        "lodging": 60,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1800m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1800m",
            "Pyrénées",
            "Forfait 34€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.valdazun.com"
    },
    {
        "id": "cauterets-pont-d-espagne",
        "name": "Cauterets-Pont d'Espagne",
        "lat": 42.8667,
        "lon": -0.15,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "30km",
        "skiPass": 40,
        "lodging": 66,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 40€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.cauteretspontdespagne.com"
    },
    {
        "id": "artouste",
        "name": "Artouste",
        "lat": 42.85,
        "lon": -0.4167,
        "region": "Pyrénées",
        "altitude": "2100m",
        "slopes": "15km",
        "skiPass": 32,
        "lodging": 58,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2100m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 2100m",
            "Pyrénées",
            "Forfait 32€"
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
        "officialWebsite": "https://www.artouste.com"
    },
    {
        "id": "issarbe",
        "name": "Issarbe",
        "lat": 43.0667,
        "lon": -0.9167,
        "region": "Pyrénées",
        "altitude": "1600m",
        "slopes": "12km",
        "skiPass": 28,
        "lodging": 54,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1600m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1600m",
            "Pyrénées",
            "Forfait 28€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.issarbe.com"
    },
    {
        "id": "la-mongie",
        "name": "La Mongie",
        "lat": 42.9167,
        "lon": 0.1833,
        "region": "Pyrénées",
        "altitude": "2500m",
        "slopes": "100km",
        "skiPass": 46,
        "lodging": 73,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2500m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2500m",
            "Pyrénées",
            "Forfait 46€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.lamongie.com"
    },
    {
        "id": "bar-ges",
        "name": "Barèges",
        "lat": 42.8833,
        "lon": 0.0667,
        "region": "Pyrénées",
        "altitude": "2350m",
        "slopes": "100km",
        "skiPass": 45,
        "lodging": 71,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2350m d'altitude avec 100km de pistes.",
        "advantages": [
            "100km de pistes",
            "Alt 2350m",
            "Pyrénées",
            "Forfait 45€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.bareges.com"
    },
    {
        "id": "luchon-superbagn-res",
        "name": "Luchon-Superbagnères",
        "lat": 42.7667,
        "lon": 0.6333,
        "region": "Pyrénées",
        "altitude": "2260m",
        "slopes": "32km",
        "skiPass": 40,
        "lodging": 68,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2260m d'altitude avec 32km de pistes.",
        "advantages": [
            "32km de pistes",
            "Alt 2260m",
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.luchonsuperbagneres.com"
    },
    {
        "id": "le-mourtis",
        "name": "Le Mourtis",
        "lat": 42.8333,
        "lon": 0.7167,
        "region": "Pyrénées",
        "altitude": "1850m",
        "slopes": "25km",
        "skiPass": 35,
        "lodging": 62,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1850m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1850m",
            "Pyrénées",
            "Forfait 35€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Snowboard",
            "Snowpark",
            "Freestyle"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lemourtis.com"
    },
    {
        "id": "bourg-d-oueil",
        "name": "Bourg d'Oueil",
        "lat": 42.75,
        "lon": 0.5667,
        "region": "Pyrénées",
        "altitude": "1800m",
        "slopes": "15km",
        "skiPass": 30,
        "lodging": 56,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1800m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1800m",
            "Pyrénées",
            "Forfait 30€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.bourgdoueil.com"
    },
    {
        "id": "guzet",
        "name": "Guzet",
        "lat": 42.7833,
        "lon": 1.3,
        "region": "Pyrénées",
        "altitude": "2100m",
        "slopes": "40km",
        "skiPass": 42,
        "lodging": 70,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2100m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2100m",
            "Pyrénées",
            "Forfait 42€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.guzet.com"
    },
    {
        "id": "ascou-pailh-res",
        "name": "Ascou-Pailhères",
        "lat": 42.7,
        "lon": 1.8667,
        "region": "Pyrénées",
        "altitude": "2000m",
        "slopes": "30km",
        "skiPass": 38,
        "lodging": 65,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2000m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 2000m",
            "Pyrénées",
            "Forfait 38€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.ascoupailheres.com"
    },
    {
        "id": "ax-bonascre",
        "name": "Ax-Bonascre",
        "lat": 42.7333,
        "lon": 1.8333,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "80km",
        "skiPass": 45,
        "lodging": 72,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 80km de pistes.",
        "advantages": [
            "80km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 45€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.axbonascre.com"
    },
    {
        "id": "mijan-s-donezan",
        "name": "Mijanès-Donezan",
        "lat": 42.7833,
        "lon": 2.0333,
        "region": "Pyrénées",
        "altitude": "1800m",
        "slopes": "20km",
        "skiPass": 32,
        "lodging": 58,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1800m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1800m",
            "Pyrénées",
            "Forfait 32€"
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
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.mijanesdonezan.com"
    },
    {
        "id": "formigu-res",
        "name": "Formiguères",
        "lat": 42.6333,
        "lon": 2.1,
        "region": "Pyrénées",
        "altitude": "2000m",
        "slopes": "18km",
        "skiPass": 30,
        "lodging": 56,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2000m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 2000m",
            "Pyrénées",
            "Forfait 30€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.formigueres.com"
    },
    {
        "id": "port-puymorens",
        "name": "Porté-Puymorens",
        "lat": 42.55,
        "lon": 1.8333,
        "region": "Pyrénées",
        "altitude": "2500m",
        "slopes": "45km",
        "skiPass": 40,
        "lodging": 68,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2500m d'altitude avec 45km de pistes.",
        "advantages": [
            "45km de pistes",
            "Alt 2500m",
            "Pyrénées",
            "Forfait 40€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.portepuymorens.com"
    },
    {
        "id": "puigmal",
        "name": "Puigmal",
        "lat": 42.4167,
        "lon": 2.0833,
        "region": "Pyrénées",
        "altitude": "2700m",
        "slopes": "50km",
        "skiPass": 42,
        "lodging": 70,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2700m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 2700m",
            "Pyrénées",
            "Forfait 42€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.puigmal.com"
    },
    {
        "id": "espace-cambre-d-aze",
        "name": "Espace Cambre d'Aze",
        "lat": 42.5,
        "lon": 2.1,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "40km",
        "skiPass": 40,
        "lodging": 67,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 40€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.espacecambredaze.com"
    },
    {
        "id": "eyne-saint-pierre-dels-forcats",
        "name": "Eyne-Saint-Pierre-dels-Forcats",
        "lat": 42.4667,
        "lon": 2.0667,
        "region": "Pyrénées",
        "altitude": "2200m",
        "slopes": "35km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2200m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 2200m",
            "Pyrénées",
            "Forfait 38€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.eynesaintpierredelsforcats.com"
    },
    {
        "id": "pyr-n-es-2000",
        "name": "Pyrénées 2000",
        "lat": 42.5,
        "lon": 2.0833,
        "region": "Pyrénées",
        "altitude": "2200m",
        "slopes": "45km",
        "skiPass": 41,
        "lodging": 68,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2200m d'altitude avec 45km de pistes.",
        "advantages": [
            "45km de pistes",
            "Alt 2200m",
            "Pyrénées",
            "Forfait 41€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.pyrenees2000.com"
    },
    {
        "id": "bolqu-re-pyren-es-2000",
        "name": "Bolquère-Pyrenées 2000",
        "lat": 42.5167,
        "lon": 2.0667,
        "region": "Pyrénées",
        "altitude": "2213m",
        "slopes": "58km",
        "skiPass": 42,
        "lodging": 68,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2213m d'altitude avec 58km de pistes.",
        "advantages": [
            "58km de pistes",
            "Alt 2213m",
            "Pyrénées",
            "Forfait 42€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.bolquerepyrenees2000.com"
    },
    {
        "id": "err-puigmal",
        "name": "Err-Puigmal",
        "lat": 42.4667,
        "lon": 2.0333,
        "region": "Pyrénées",
        "altitude": "2400m",
        "slopes": "40km",
        "skiPass": 39,
        "lodging": 66,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2400m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2400m",
            "Pyrénées",
            "Forfait 39€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.errpuigmal.com"
    },
    {
        "id": "porte-puymorens",
        "name": "Porte-Puymorens",
        "lat": 42.55,
        "lon": 1.85,
        "region": "Pyrénées",
        "altitude": "2500m",
        "slopes": "40km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 2500m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 2500m",
            "Pyrénées",
            "Forfait 38€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.portepuymorens.com"
    },
    {
        "id": "saint-jean-de-verges",
        "name": "Saint-Jean-de-Verges",
        "lat": 43,
        "lon": 1.6167,
        "region": "Pyrénées",
        "altitude": "1400m",
        "slopes": "8km",
        "skiPass": 22,
        "lodging": 48,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1400m d'altitude avec 8km de pistes.",
        "advantages": [
            "8km de pistes",
            "Alt 1400m",
            "Pyrénées",
            "Forfait 22€"
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
        "officialWebsite": "https://www.saintjeandeverges.com"
    },
    {
        "id": "monts-d-olmes",
        "name": "Monts d'Olmes",
        "lat": 42.8667,
        "lon": 1.7833,
        "region": "Pyrénées",
        "altitude": "1800m",
        "slopes": "25km",
        "skiPass": 35,
        "lodging": 60,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1800m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1800m",
            "Pyrénées",
            "Forfait 35€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.montsdolmes.com"
    },
    {
        "id": "plateau-de-beille",
        "name": "Plateau de Beille",
        "lat": 42.7833,
        "lon": 1.7167,
        "region": "Pyrénées",
        "altitude": "1800m",
        "slopes": "15km",
        "skiPass": 28,
        "lodging": 54,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Pyrénées située à 1800m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1800m",
            "Pyrénées",
            "Forfait 28€"
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
        "officialWebsite": "https://www.plateaudebeille.com"
    },
    {
        "id": "les-rousses",
        "name": "Les Rousses",
        "lat": 46.4833,
        "lon": 6.0667,
        "region": "Jura",
        "altitude": "1680m",
        "slopes": "50km",
        "skiPass": 36,
        "lodging": 62,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1680m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 1680m",
            "Jura",
            "Forfait 36€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Parapente",
            "Via ferrata",
            "Escalade"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lesrousses.com"
    },
    {
        "id": "m-tabief",
        "name": "Métabief",
        "lat": 46.7667,
        "lon": 6.35,
        "region": "Jura",
        "altitude": "1463m",
        "slopes": "40km",
        "skiPass": 34,
        "lodging": 58,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1463m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 1463m",
            "Jura",
            "Forfait 34€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.metabief.com"
    },
    {
        "id": "monts-jura",
        "name": "Monts Jura",
        "lat": 46.3667,
        "lon": 6.0167,
        "region": "Jura",
        "altitude": "1720m",
        "slopes": "60km",
        "skiPass": 38,
        "lodging": 64,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1720m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 1720m",
            "Jura",
            "Forfait 38€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.montsjura.com"
    },
    {
        "id": "les-molunes",
        "name": "Les Molunes",
        "lat": 46.4167,
        "lon": 6.05,
        "region": "Jura",
        "altitude": "1280m",
        "slopes": "15km",
        "skiPass": 28,
        "lodging": 52,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1280m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1280m",
            "Jura",
            "Forfait 28€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lesmolunes.com"
    },
    {
        "id": "bellefontaine",
        "name": "Bellefontaine",
        "lat": 46.5667,
        "lon": 6.0667,
        "region": "Jura",
        "altitude": "1150m",
        "slopes": "12km",
        "skiPass": 25,
        "lodging": 48,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1150m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1150m",
            "Jura",
            "Forfait 25€"
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
        "officialWebsite": "https://www.bellefontaine.com"
    },
    {
        "id": "la-pesse",
        "name": "La Pesse",
        "lat": 46.2833,
        "lon": 5.85,
        "region": "Jura",
        "altitude": "1200m",
        "slopes": "10km",
        "skiPass": 24,
        "lodging": 46,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1200m d'altitude avec 10km de pistes.",
        "advantages": [
            "10km de pistes",
            "Alt 1200m",
            "Jura",
            "Forfait 24€"
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
        "officialWebsite": "https://www.lapesse.com"
    },
    {
        "id": "foncine-le-haut",
        "name": "Foncine-le-Haut",
        "lat": 46.65,
        "lon": 6.05,
        "region": "Jura",
        "altitude": "1100m",
        "slopes": "8km",
        "skiPass": 22,
        "lodging": 45,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1100m d'altitude avec 8km de pistes.",
        "advantages": [
            "8km de pistes",
            "Alt 1100m",
            "Jura",
            "Forfait 22€"
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
        "officialWebsite": "https://www.foncinelehaut.com"
    },
    {
        "id": "chamrousse-jura",
        "name": "Chamrousse-Jura",
        "lat": 46.7,
        "lon": 6.3,
        "region": "Jura",
        "altitude": "1400m",
        "slopes": "18km",
        "skiPass": 30,
        "lodging": 54,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1400m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1400m",
            "Jura",
            "Forfait 30€"
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
        "officialWebsite": "https://www.chamroussejura.com"
    },
    {
        "id": "la-faucille",
        "name": "La Faucille",
        "lat": 46.3667,
        "lon": 6.0333,
        "region": "Jura",
        "altitude": "1720m",
        "slopes": "30km",
        "skiPass": 36,
        "lodging": 60,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1720m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 1720m",
            "Jura",
            "Forfait 36€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.lafaucille.com"
    },
    {
        "id": "l-lex-crozet",
        "name": "Lélex-Crozet",
        "lat": 46.3,
        "lon": 5.95,
        "region": "Jura",
        "altitude": "1680m",
        "slopes": "50km",
        "skiPass": 37,
        "lodging": 62,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Jura située à 1680m d'altitude avec 50km de pistes.",
        "advantages": [
            "50km de pistes",
            "Alt 1680m",
            "Jura",
            "Forfait 37€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.lelexcrozet.com"
    },
    {
        "id": "la-bresse-hohneck",
        "name": "La Bresse Hohneck",
        "lat": 48,
        "lon": 6.8667,
        "region": "Vosges",
        "altitude": "1350m",
        "slopes": "35km",
        "skiPass": 32,
        "lodging": 55,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1350m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 1350m",
            "Vosges",
            "Forfait 32€"
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
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.labresse.net"
    },
    {
        "id": "g-rardmer",
        "name": "Gérardmer",
        "lat": 48.0667,
        "lon": 6.8833,
        "region": "Vosges",
        "altitude": "1350m",
        "slopes": "40km",
        "skiPass": 33,
        "lodging": 56,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1350m d'altitude avec 40km de pistes.",
        "advantages": [
            "40km de pistes",
            "Alt 1350m",
            "Vosges",
            "Forfait 33€"
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
        "officialWebsite": "https://www.gerardmer-ski.com"
    },
    {
        "id": "le-markstein",
        "name": "Le Markstein",
        "lat": 47.9333,
        "lon": 7.0333,
        "region": "Vosges",
        "altitude": "1265m",
        "slopes": "20km",
        "skiPass": 28,
        "lodging": 52,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1265m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1265m",
            "Vosges",
            "Forfait 28€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.lemarkstein.com"
    },
    {
        "id": "la-schlucht",
        "name": "La Schlucht",
        "lat": 48.05,
        "lon": 7.0167,
        "region": "Vosges",
        "altitude": "1250m",
        "slopes": "15km",
        "skiPass": 26,
        "lodging": 50,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1250m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1250m",
            "Vosges",
            "Forfait 26€"
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
        "officialWebsite": "https://www.laschlucht.com"
    },
    {
        "id": "le-schnepfenried",
        "name": "Le Schnepfenried",
        "lat": 48.0167,
        "lon": 7.05,
        "region": "Vosges",
        "altitude": "1258m",
        "slopes": "18km",
        "skiPass": 27,
        "lodging": 51,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1258m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1258m",
            "Vosges",
            "Forfait 27€"
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
        "officialWebsite": "https://www.leschnepfenried.com"
    },
    {
        "id": "xonrupt",
        "name": "Xonrupt",
        "lat": 48.1,
        "lon": 6.9,
        "region": "Vosges",
        "altitude": "1200m",
        "slopes": "12km",
        "skiPass": 24,
        "lodging": 48,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1200m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1200m",
            "Vosges",
            "Forfait 24€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.xonrupt.com"
    },
    {
        "id": "le-valtin",
        "name": "Le Valtin",
        "lat": 48.0833,
        "lon": 7,
        "region": "Vosges",
        "altitude": "1150m",
        "slopes": "10km",
        "skiPass": 22,
        "lodging": 46,
        "image": "./images/les-saisies.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1150m d'altitude avec 10km de pistes.",
        "advantages": [
            "10km de pistes",
            "Alt 1150m",
            "Vosges",
            "Forfait 22€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.levaltin.com"
    },
    {
        "id": "le-champ-du-feu",
        "name": "Le Champ du Feu",
        "lat": 48.4,
        "lon": 7.2,
        "region": "Vosges",
        "altitude": "1100m",
        "slopes": "14km",
        "skiPass": 25,
        "lodging": 49,
        "image": "./images/megeve.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1100m d'altitude avec 14km de pistes.",
        "advantages": [
            "14km de pistes",
            "Alt 1100m",
            "Vosges",
            "Forfait 25€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lechampdufeu.com"
    },
    {
        "id": "le-gaschney",
        "name": "Le Gaschney",
        "lat": 48.05,
        "lon": 7,
        "region": "Vosges",
        "altitude": "1200m",
        "slopes": "16km",
        "skiPass": 26,
        "lodging": 50,
        "image": "./images/morzine.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1200m d'altitude avec 16km de pistes.",
        "advantages": [
            "16km de pistes",
            "Alt 1200m",
            "Vosges",
            "Forfait 26€"
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
        "officialWebsite": "https://www.legaschney.com"
    },
    {
        "id": "rouge-gazon",
        "name": "Rouge Gazon",
        "lat": 47.9167,
        "lon": 6.95,
        "region": "Vosges",
        "altitude": "1150m",
        "slopes": "15km",
        "skiPass": 25,
        "lodging": 48,
        "image": "./images/notre-dame-de-bellecombe.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1150m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1150m",
            "Vosges",
            "Forfait 25€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.rougegazon.com"
    },
    {
        "id": "ventron",
        "name": "Ventron",
        "lat": 47.95,
        "lon": 6.9333,
        "region": "Vosges",
        "altitude": "1200m",
        "slopes": "16km",
        "skiPass": 26,
        "lodging": 50,
        "image": "./images/peisey-vallandry.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1200m d'altitude avec 16km de pistes.",
        "advantages": [
            "16km de pistes",
            "Alt 1200m",
            "Vosges",
            "Forfait 26€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.ventron.com"
    },
    {
        "id": "le-tanet",
        "name": "Le Tanet",
        "lat": 48.05,
        "lon": 7.05,
        "region": "Vosges",
        "altitude": "1292m",
        "slopes": "18km",
        "skiPass": 27,
        "lodging": 51,
        "image": "./images/praz-sur-arly.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1292m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1292m",
            "Vosges",
            "Forfait 27€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.letanet.com"
    },
    {
        "id": "lac-blanc",
        "name": "Lac Blanc",
        "lat": 48.1333,
        "lon": 7.0833,
        "region": "Vosges",
        "altitude": "1200m",
        "slopes": "15km",
        "skiPass": 25,
        "lodging": 49,
        "image": "./images/saint-gervais.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1200m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1200m",
            "Vosges",
            "Forfait 25€"
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
        "officialWebsite": "https://www.lacblanc.com"
    },
    {
        "id": "bussang",
        "name": "Bussang",
        "lat": 47.8833,
        "lon": 6.85,
        "region": "Vosges",
        "altitude": "1100m",
        "slopes": "12km",
        "skiPass": 24,
        "lodging": 47,
        "image": "./images/samoens.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1100m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1100m",
            "Vosges",
            "Forfait 24€"
        ],
        "level": "Débutant / Intermédiaire",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.bussang.com"
    },
    {
        "id": "la-bresse-brabant",
        "name": "La Bresse-Brabant",
        "lat": 48.0333,
        "lon": 6.8833,
        "region": "Vosges",
        "altitude": "1300m",
        "slopes": "20km",
        "skiPass": 30,
        "lodging": 54,
        "image": "./images/toussuire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Vosges située à 1300m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1300m",
            "Vosges",
            "Forfait 30€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.labressebrabant.com"
    },
    {
        "id": "super-besse",
        "name": "Super Besse",
        "lat": 45.4833,
        "lon": 2.8333,
        "region": "Massif Central",
        "altitude": "1850m",
        "slopes": "45km",
        "skiPass": 35,
        "lodging": 60,
        "image": "./images/val-cenis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1850m d'altitude avec 45km de pistes.",
        "advantages": [
            "45km de pistes",
            "Alt 1850m",
            "Massif Central",
            "Forfait 35€"
        ],
        "level": "Expert",
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
        "officialWebsite": "https://www.super-besse.com"
    },
    {
        "id": "le-mont-dore",
        "name": "Le Mont-Dore",
        "lat": 45.5667,
        "lon": 2.8167,
        "region": "Massif Central",
        "altitude": "1850m",
        "slopes": "42km",
        "skiPass": 34,
        "lodging": 59,
        "image": "./images/valloire.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1850m d'altitude avec 42km de pistes.",
        "advantages": [
            "42km de pistes",
            "Alt 1850m",
            "Massif Central",
            "Forfait 34€"
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
        "officialWebsite": "https://www.sancy.com"
    },
    {
        "id": "le-lioran",
        "name": "Le Lioran",
        "lat": 45.0833,
        "lon": 2.75,
        "region": "Massif Central",
        "altitude": "1850m",
        "slopes": "60km",
        "skiPass": 37,
        "lodging": 63,
        "image": "./images/valmeinier.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1850m d'altitude avec 60km de pistes.",
        "advantages": [
            "60km de pistes",
            "Alt 1850m",
            "Massif Central",
            "Forfait 37€"
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
            "Garderie",
            "Piscine",
            "Patinoire"
        ],
        "officialWebsite": "https://www.lelioran.com"
    },
    {
        "id": "chastreix-sancy",
        "name": "Chastreix-Sancy",
        "lat": 45.5167,
        "lon": 2.8,
        "region": "Massif Central",
        "altitude": "1750m",
        "slopes": "35km",
        "skiPass": 33,
        "lodging": 58,
        "image": "./images/avoriaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1750m d'altitude avec 35km de pistes.",
        "advantages": [
            "35km de pistes",
            "Alt 1750m",
            "Massif Central",
            "Forfait 33€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.chastreixsancy.com"
    },
    {
        "id": "la-bourboule",
        "name": "La Bourboule",
        "lat": 45.5833,
        "lon": 2.75,
        "region": "Massif Central",
        "altitude": "1500m",
        "slopes": "12km",
        "skiPass": 24,
        "lodging": 48,
        "image": "./images/bonneval-sur-arc.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1500m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1500m",
            "Massif Central",
            "Forfait 24€"
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
        "officialWebsite": "https://www.labourboule.com"
    },
    {
        "id": "prabour-",
        "name": "Prabouré",
        "lat": 45.0833,
        "lon": 2.7833,
        "region": "Massif Central",
        "altitude": "1680m",
        "slopes": "25km",
        "skiPass": 30,
        "lodging": 54,
        "image": "./images/combloux.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1680m d'altitude avec 25km de pistes.",
        "advantages": [
            "25km de pistes",
            "Alt 1680m",
            "Massif Central",
            "Forfait 30€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.praboure.com"
    },
    {
        "id": "le-pas-de-peyrol",
        "name": "Le Pas de Peyrol",
        "lat": 45.0667,
        "lon": 2.7333,
        "region": "Massif Central",
        "altitude": "1700m",
        "slopes": "18km",
        "skiPass": 28,
        "lodging": 52,
        "image": "./images/crest-voland-cohennoz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1700m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1700m",
            "Massif Central",
            "Forfait 28€"
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
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.lepasdepeyrol.com"
    },
    {
        "id": "pailherols",
        "name": "Pailherols",
        "lat": 45.0333,
        "lon": 2.6667,
        "region": "Massif Central",
        "altitude": "1600m",
        "slopes": "15km",
        "skiPass": 26,
        "lodging": 50,
        "image": "./images/karellis.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1600m d'altitude avec 15km de pistes.",
        "advantages": [
            "15km de pistes",
            "Alt 1600m",
            "Massif Central",
            "Forfait 26€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.pailherols.com"
    },
    {
        "id": "brameloup",
        "name": "Brameloup",
        "lat": 44.1833,
        "lon": 2.75,
        "region": "Massif Central",
        "altitude": "1400m",
        "slopes": "10km",
        "skiPass": 22,
        "lodging": 46,
        "image": "./images/la-clusaz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1400m d'altitude avec 10km de pistes.",
        "advantages": [
            "10km de pistes",
            "Alt 1400m",
            "Massif Central",
            "Forfait 22€"
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
        "officialWebsite": "https://www.brameloup.com"
    },
    {
        "id": "laguiole",
        "name": "Laguiole",
        "lat": 44.6833,
        "lon": 2.85,
        "region": "Massif Central",
        "altitude": "1450m",
        "slopes": "12km",
        "skiPass": 24,
        "lodging": 48,
        "image": "./images/la-plagne.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1450m d'altitude avec 12km de pistes.",
        "advantages": [
            "12km de pistes",
            "Alt 1450m",
            "Massif Central",
            "Forfait 24€"
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
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.laguiole.com"
    },
    {
        "id": "les-estables",
        "name": "Les Estables",
        "lat": 45.0167,
        "lon": 4.1667,
        "region": "Massif Central",
        "altitude": "1600m",
        "slopes": "18km",
        "skiPass": 28,
        "lodging": 52,
        "image": "./images/le-grand-bornand.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1600m d'altitude avec 18km de pistes.",
        "advantages": [
            "18km de pistes",
            "Alt 1600m",
            "Massif Central",
            "Forfait 28€"
        ],
        "level": "Expert",
        "activities": [
            "Ski alpin",
            "Ski de fond",
            "Raquettes",
            "Luge"
        ],
        "equipment": [
            "ESF",
            "Location",
            "Refuge",
            "Restaurant altitude"
        ],
        "officialWebsite": "https://www.lesestables.com"
    },
    {
        "id": "chalmazel",
        "name": "Chalmazel",
        "lat": 45.7,
        "lon": 3.8,
        "region": "Massif Central",
        "altitude": "1600m",
        "slopes": "20km",
        "skiPass": 30,
        "lodging": 54,
        "image": "./images/les-arcs.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1600m d'altitude avec 20km de pistes.",
        "advantages": [
            "20km de pistes",
            "Alt 1600m",
            "Massif Central",
            "Forfait 30€"
        ],
        "level": "Débutant / Intermédiaire",
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
        "officialWebsite": "https://www.chalmazel.com"
    },
    {
        "id": "prabour-lioran",
        "name": "Prabouré-Lioran",
        "lat": 45.1,
        "lon": 2.75,
        "region": "Massif Central",
        "altitude": "1680m",
        "slopes": "30km",
        "skiPass": 32,
        "lodging": 56,
        "image": "./images/les-carroz.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1680m d'altitude avec 30km de pistes.",
        "advantages": [
            "30km de pistes",
            "Alt 1680m",
            "Massif Central",
            "Forfait 32€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.prabourelioran.com"
    },
    {
        "id": "le-bessat",
        "name": "Le Bessat",
        "lat": 45.3667,
        "lon": 4.5333,
        "region": "Massif Central",
        "altitude": "1200m",
        "slopes": "8km",
        "skiPass": 20,
        "lodging": 44,
        "image": "./images/les-contamines-montjoie.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1200m d'altitude avec 8km de pistes.",
        "advantages": [
            "8km de pistes",
            "Alt 1200m",
            "Massif Central",
            "Forfait 20€"
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
            "Snowpark",
            "Location",
            "Spa"
        ],
        "officialWebsite": "https://www.lebessat.com"
    },
    {
        "id": "saint-urcize",
        "name": "Saint-Urcize",
        "lat": 44.75,
        "lon": 2.95,
        "region": "Massif Central",
        "altitude": "1400m",
        "slopes": "10km",
        "skiPass": 22,
        "lodging": 46,
        "image": "./images/les-gets.png",
        "opening": "Déc 2025",
        "closing": "Avr 2026",
        "description": "Station Massif Central située à 1400m d'altitude avec 10km de pistes.",
        "advantages": [
            "10km de pistes",
            "Alt 1400m",
            "Massif Central",
            "Forfait 22€"
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
            "Location",
            "Garderie",
            "Restaurants"
        ],
        "officialWebsite": "https://www.sainturcize.com"
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
