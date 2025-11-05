// Données des stations de ski avec rotation des 25 images
const stations = [
  {
    id: 1,
    name: "Avoriaz",
    image: "avoriaz.png",
    altitude: "1800m",
    domain: "Portes du Soleil",
    slopes: "650 km"
  },
  {
    id: 2,
    name: "Bonneval-sur-Arc",
    image: "bonneval-sur-arc.png",
    altitude: "1800m",
    domain: "Haute Maurienne",
    slopes: "25 km"
  },
  {
    id: 3,
    name: "Combloux",
    image: "combloux.png",
    altitude: "1000m",
    domain: "Évasion Mont-Blanc",
    slopes: "100 km"
  },
  {
    id: 4,
    name: "Crest-Voland Cohennoz",
    image: "crest-voland-cohennoz.png",
    altitude: "1230m",
    domain: "Espace Diamant",
    slopes: "192 km"
  },
  {
    id: 5,
    name: "Les Karellis",
    image: "karellis.png",
    altitude: "1600m",
    domain: "Maurienne",
    slopes: "60 km"
  },
  {
    id: 6,
    name: "La Clusaz",
    image: "la-clusaz.png",
    altitude: "1100m",
    domain: "Aravis",
    slopes: "132 km"
  },
  {
    id: 7,
    name: "La Plagne",
    image: "la-plagne.png",
    altitude: "2100m",
    domain: "Paradiski",
    slopes: "425 km"
  },
  {
    id: 8,
    name: "Le Grand-Bornand",
    image: "le-grand-bornand.png",
    altitude: "1000m",
    domain: "Aravis",
    slopes: "90 km"
  },
  {
    id: 9,
    name: "Les Arcs",
    image: "les-arcs.png",
    altitude: "1600m",
    domain: "Paradiski",
    slopes: "425 km"
  },
  {
    id: 10,
    name: "Les Carroz",
    image: "les-carroz.png",
    altitude: "1140m",
    domain: "Grand Massif",
    slopes: "265 km"
  },
  {
    id: 11,
    name: "Les Contamines-Montjoie",
    image: "les-contamines-montjoie.png",
    altitude: "1164m",
    domain: "Évasion Mont-Blanc",
    slopes: "120 km"
  },
  {
    id: 12,
    name: "Les Gets",
    image: "les-gets.png",
    altitude: "1172m",
    domain: "Portes du Soleil",
    slopes: "650 km"
  },
  {
    id: 13,
    name: "Les Saisies",
    image: "les-saisies.png",
    altitude: "1650m",
    domain: "Espace Diamant",
    slopes: "192 km"
  },
  {
    id: 14,
    name: "Megève",
    image: "megeve.png",
    altitude: "1113m",
    domain: "Évasion Mont-Blanc",
    slopes: "400 km"
  },
  {
    id: 15,
    name: "Morzine",
    image: "morzine.png",
    altitude: "1000m",
    domain: "Portes du Soleil",
    slopes: "650 km"
  },
  {
    id: 16,
    name: "Notre-Dame-de-Bellecombe",
    image: "notre-dame-de-bellecombe.png",
    altitude: "1150m",
    domain: "Espace Diamant",
    slopes: "192 km"
  },
  {
    id: 17,
    name: "Peisey-Vallandry",
    image: "peisey-vallandry.png",
    altitude: "1600m",
    domain: "Paradiski",
    slopes: "425 km"
  },
  {
    id: 18,
    name: "Praz-sur-Arly",
    image: "praz-sur-arly.png",
    altitude: "1036m",
    domain: "Espace Diamant",
    slopes: "192 km"
  },
  {
    id: 19,
    name: "Saint-Gervais",
    image: "saint-gervais.png",
    altitude: "1400m",
    domain: "Évasion Mont-Blanc",
    slopes: "445 km"
  },
  {
    id: 20,
    name: "Samoëns",
    image: "samoens.png",
    altitude: "720m",
    domain: "Grand Massif",
    slopes: "265 km"
  },
  {
    id: 21,
    name: "La Toussuire",
    image: "toussuire.png",
    altitude: "1750m",
    domain: "Les Sybelles",
    slopes: "310 km"
  },
  {
    id: 22,
    name: "Val Cenis",
    image: "val-cenis.png",
    altitude: "1400m",
    domain: "Haute Maurienne",
    slopes: "125 km"
  },
  {
    id: 23,
    name: "Valloire",
    image: "valloire.png",
    altitude: "1430m",
    domain: "Galibier Thabor",
    slopes: "150 km"
  },
  {
    id: 24,
    name: "Valmeinier",
    image: "valmeinier.png",
    altitude: "1500m",
    domain: "Galibier Thabor",
    slopes: "150 km"
  },
  {
    id: 25,
    name: "Valmorel",
    image: "valmorel.png",
    altitude: "1400m",
    domain: "Grand Domaine",
    slopes: "165 km"
  }
];

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = stations;
}
