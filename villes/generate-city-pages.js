/**
 * Générateur de pages villes pour le SEO
 * Génère automatiquement des pages optimisées pour chaque ville majeure
 */

const fs = require('fs');
const path = require('path');

// Liste des villes avec leurs coordonnées et informations spécifiques
const cities = [
    {
        id: 'lyon',
        name: 'Lyon',
        lat: 45.7640,
        lon: 4.8357,
        description: 'Capitale des Gaules, Lyon est idéalement située à la porte des Alpes. À seulement 2h des premières stations, c\'est le point de départ idéal pour un weekend ski.',
        emoji: '🦁',
        avgDistance: '150',
        avgTime: '2-3h',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Les 2 Alpes', 'Alpe d\'Huez', 'Chamrousse', 'Les 7 Laux', 'La Plagne'],
        tips: [
            'Partez tôt le samedi matin (6h) pour éviter les bouchons sur l\'A43',
            'La station la plus proche est Chamrousse à seulement 80 km (1h15)',
            'En TGV : Lyon Part-Dieu vers Grenoble puis navette'
        ],
        budgetNote: 'Avec la proximité des Alpes, économisez 100-150€ d\'essence par rapport à Paris !'
    },
    {
        id: 'marseille',
        name: 'Marseille',
        lat: 43.2965,
        lon: 5.3698,
        description: 'De la Méditerranée aux sommets enneigés ! Marseille offre un accès privilégié aux Alpes du Sud, réputées pour leur ensoleillement exceptionnel.',
        emoji: '⛵',
        avgDistance: '250',
        avgTime: '3-4h',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Serre Chevalier', 'Pra-Loup', 'Vars', 'Risoul', 'Isola 2000'],
        tips: [
            'Les Alpes du Sud : 300 jours de soleil par an !',
            'Isola 2000 est à seulement 2h30 via l\'A8 et la vallée de la Tinée',
            'Alternative : Pyrénées (Font-Romeu à 4h)'
        ],
        budgetNote: 'Les stations des Alpes du Sud sont 20-30% moins chères que les Alpes du Nord'
    },
    {
        id: 'toulouse',
        name: 'Toulouse',
        lat: 43.6047,
        lon: 1.4442,
        description: 'La ville rose, porte des Pyrénées ! Toulouse bénéficie d\'un accès rapide aux stations pyrénéennes, authentiques et abordables.',
        emoji: '🏉',
        avgDistance: '180',
        avgTime: '2-3h',
        topRegion: 'Pyrénées',
        nearbyStations: ['Piau-Engaly', 'Saint-Lary', 'Cauterets', 'Peyragudes', 'Ax-les-Thermes'],
        tips: [
            'Piau-Engaly à 2h15, station familiale et ensoleillée',
            'Saint-Lary-Soulan : le plus grand domaine des Pyrénées (100 km)',
            'Budget : 30% moins cher que les Alpes'
        ],
        budgetNote: 'Les Pyrénées offrent le meilleur rapport qualité-prix de France !'
    },
    {
        id: 'grenoble',
        name: 'Grenoble',
        lat: 45.1885,
        lon: 5.7245,
        description: 'Capitale des Alpes ! Grenoble est entourée de montagnes et permet d\'accéder à 20+ stations en moins d\'1h30.',
        emoji: '🏔️',
        avgDistance: '50',
        avgTime: '1-1h30',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Chamrousse', 'Les 2 Alpes', 'Alpe d\'Huez', 'Les 7 Laux', 'Villard-de-Lans'],
        tips: [
            'Chamrousse : 30 min, accessible en bus depuis Grenoble',
            'Les 2 Alpes et Alpe d\'Huez : 1h15, parfait pour un weekend',
            'Station de ski urbaine : prenez le téléphérique !'
        ],
        budgetNote: 'Économisez sur l\'essence, profitez-en pour skier plus souvent !'
    },
    {
        id: 'bordeaux',
        name: 'Bordeaux',
        lat: 44.8378,
        lon: -0.5792,
        description: 'De la capitale mondiale du vin aux sommets pyrénéens. Bordeaux offre un accès aux stations familiales des Pyrénées.',
        emoji: '🍷',
        avgDistance: '250',
        avgTime: '3h30',
        topRegion: 'Pyrénées',
        nearbyStations: ['Saint-Lary', 'Piau-Engaly', 'Cauterets', 'Luz-Ardiden', 'Gourette'],
        tips: [
            'Saint-Lary à 3h15, le plus grand domaine des Pyrénées',
            'Gourette à 3h via l\'A64 et Pau',
            'Alternative proche : station de ski landaise de... non, il faut aller en montagne 😄'
        ],
        budgetNote: 'Combinez vin et ski : achetez votre équipement d\'occasion à bon prix !'
    },
    {
        id: 'lille',
        name: 'Lille',
        lat: 50.6292,
        lon: 3.0573,
        description: 'La capitale des Flandres part à l\'assaut des Alpes ! Même si la distance est conséquente, les stations valent le détour.',
        emoji: '🍺',
        avgDistance: '700',
        avgTime: '7-8h',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Chamonix', 'Megève', 'Les Arcs', 'Avoriaz', 'Val Thorens'],
        tips: [
            'Privilégiez le train : TGV Lille-Europe → Bourg-Saint-Maurice (5h30)',
            'En voiture, partez vendredi soir pour un weekend de 3 jours',
            'Alternative : Vosges à 4h (petit domaine mais proche)'
        ],
        budgetNote: 'Le TGV peut être plus économique et moins fatigant que la voiture'
    },
    {
        id: 'nantes',
        name: 'Nantes',
        lat: 47.2184,
        lon: -1.5536,
        description: 'De la Loire aux sommets ! Nantes est un point de départ pour les Pyrénées ou les Alpes selon vos préférences.',
        emoji: '🏰',
        avgDistance: '450',
        avgTime: '5-6h',
        topRegion: 'Pyrénées / Alpes',
        nearbyStations: ['Font-Romeu', 'Saint-Lary', 'Megève', 'La Plagne', 'Les Arcs'],
        tips: [
            'Pyrénées (Font-Romeu) à 5h via l\'A10 et A62',
            'Alpes (Megève) à 6h30 via l\'A71 et A43',
            'Le train est recommandé : TGV vers Lyon puis Alpes'
        ],
        budgetNote: 'Anticipez votre réservation TGV : billets à 35€ possibles'
    },
    {
        id: 'strasbourg',
        name: 'Strasbourg',
        lat: 48.5734,
        lon: 7.7521,
        description: 'Capitale européenne et porte de l\'Est ! Strasbourg accède facilement aux Vosges et aux stations suisses/autrichiennes.',
        emoji: '🥨',
        avgDistance: '400',
        avgTime: '4-5h',
        topRegion: 'Vosges / Suisse',
        nearbyStations: ['Le Markstein', 'La Bresse', 'Gérardmer', 'Chamonix', 'Megève'],
        tips: [
            'Les Vosges (La Bresse) à 1h30 : parfait pour débuter',
            'Suisse : stations de Verbier, Zermatt accessibles en 3-4h',
            'Alpes du Nord à 5h via la Suisse (beaux paysages)'
        ],
        budgetNote: 'Les Vosges sont économiques : forfait ~30€/jour au lieu de 60€'
    },
    {
        id: 'nice',
        name: 'Nice',
        lat: 43.7102,
        lon: 7.2620,
        description: 'Skier le matin, se baigner l\'après-midi ! Nice offre l\'accès unique aux stations de ski à 1h30 de la Méditerranée.',
        emoji: '🌴',
        avgDistance: '80',
        avgTime: '1-2h',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Isola 2000', 'Auron', 'Valberg', 'Pra-Loup', 'Vars'],
        tips: [
            'Isola 2000 à 1h30 : la plus proche station de la mer !',
            'Expérience unique : ski le matin, plage l\'après-midi',
            'Stations ensoleillées 300 jours par an'
        ],
        budgetNote: 'Profitez du soleil ET de la neige, sans l\'hébergement montagnard obligatoire'
    },
    {
        id: 'montpellier',
        name: 'Montpellier',
        lat: 43.6108,
        lon: 3.8767,
        description: 'Entre mer et montagne ! Montpellier accède aux Pyrénées orientales et aux stations familiales du Languedoc.',
        emoji: '☀️',
        avgDistance: '200',
        avgTime: '2-3h',
        topRegion: 'Pyrénées',
        nearbyStations: ['Font-Romeu', 'Les Angles', 'Ax-les-Thermes', 'Puyvalador', 'Formiguères'],
        tips: [
            'Font-Romeu à 2h30 : station olympique ensoleillée',
            'Les Angles à 2h15 : domaine varié, vue sur la Méditerranée',
            'Pyrénées catalanes : authenticité garantie'
        ],
        budgetNote: 'Stations familiales et abordables, idéales pour débuter'
    },
    // VAGUE 2 - Villes moyennes tier 2
    {
        id: 'annecy',
        name: 'Annecy',
        lat: 45.8992,
        lon: 6.1294,
        description: 'La Venise des Alpes au pied des montagnes ! Annecy accède aux plus belles stations de Haute-Savoie en 30-60 min.',
        emoji: '🏞️',
        avgDistance: '60',
        avgTime: '45min-1h30',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['La Clusaz', 'Le Grand-Bornand', 'Megève', 'Les Contamines', 'Chamonix'],
        tips: [
            'La Clusaz à 30 min : station village authentique',
            'Le Grand-Bornand à 35 min : domaine Aravis',
            'Nombreuses navettes depuis Annecy en saison'
        ],
        budgetNote: 'Position idéale : toutes les grandes stations à moins d\'1h !'
    },
    {
        id: 'chambery',
        name: 'Chambéry',
        lat: 45.5647,
        lon: 5.9214,
        description: 'Capitale historique de la Savoie ! Chambéry est entourée de stations olympiques et authentiques.',
        emoji: '🏰',
        avgDistance: '70',
        avgTime: '1-1h30',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Les Arcs', 'La Plagne', 'Les Saisies', 'Valmorel', 'Val Thorens'],
        tips: [
            'Les Saisies à 45 min : domaine nordique + alpin',
            'Les 3 Vallées à 1h30 : le plus grand domaine du monde',
            'Gare TGV avec navettes vers toutes les stations'
        ],
        budgetNote: 'Hub parfait : accès direct aux stations olympiques !'
    },
    {
        id: 'clermont-ferrand',
        name: 'Clermont-Ferrand',
        lat: 45.7772,
        lon: 3.0870,
        description: 'Capitale auvergnate entre volcans et montagnes ! Accès au Massif Central et aux Alpes.',
        emoji: '🌋',
        avgDistance: '150',
        avgTime: '2-3h',
        topRegion: 'Massif Central / Alpes',
        nearbyStations: ['Super-Besse', 'Le Mont-Dore', 'Les 2 Alpes', 'Alpe d\'Huez', 'Chamrousse'],
        tips: [
            'Super-Besse à 1h : station familiale du Massif Central',
            'Alpes accessibles en 2h30 via l\'A75 et Grenoble',
            'Forfaits Massif Central 50% moins chers que les Alpes'
        ],
        budgetNote: 'Massif Central : stations authentiques et petits prix !'
    },
    {
        id: 'dijon',
        name: 'Dijon',
        lat: 47.3220,
        lon: 5.0415,
        description: 'Capitale des Ducs de Bourgogne ! Dijon accède au Jura proche et aux Alpes du Nord.',
        emoji: '🍇',
        avgDistance: '200',
        avgTime: '2-3h',
        topRegion: 'Jura / Alpes',
        nearbyStations: ['Métabief', 'Les Rousses', 'Chamonix', 'Megève', 'La Clusaz'],
        tips: [
            'Jura à 1h30 : stations familiales et nordiques',
            'Alpes du Nord à 2h30 via Annecy',
            'Bon rapport qualité-prix dans le Jura'
        ],
        budgetNote: 'Jura : ski nordique et petits domaines économiques'
    },
    {
        id: 'reims',
        name: 'Reims',
        lat: 49.2583,
        lon: 4.0317,
        description: 'Capitale du Champagne ! Reims accède aux Vosges et aux Alpes pour des weekends prolongés.',
        emoji: '🍾',
        avgDistance: '450',
        avgTime: '5-6h',
        topRegion: 'Vosges / Alpes',
        nearbyStations: ['La Bresse', 'Gérardmer', 'Chamonix', 'Megève', 'Les Arcs'],
        tips: [
            'Vosges à 3h30 : stations familiales économiques',
            'Alpes à 5-6h : privilégier weekends de 3 jours',
            'Alternative TGV : Reims → Lyon → Alpes'
        ],
        budgetNote: 'Distance importante : covoiturage ou train recommandé'
    },
    {
        id: 'saint-etienne',
        name: 'Saint-Étienne',
        lat: 45.4397,
        lon: 4.3872,
        description: 'Ville stéphanoise proche des Alpes ! Accès rapide aux stations de l\'Isère et de la Savoie.',
        emoji: '⚽',
        avgDistance: '120',
        avgTime: '1h30-2h',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Les 2 Alpes', 'Alpe d\'Huez', 'Chamrousse', 'Les 7 Laux', 'La Plagne'],
        tips: [
            'Chamrousse à 1h30 via Grenoble',
            'Les 2 Alpes et Alpe d\'Huez à 1h45',
            'Position similaire à Lyon, légèrement plus éloignée'
        ],
        budgetNote: 'Proximité des Alpes : excellent pour weekends courts'
    },
    {
        id: 'toulon',
        name: 'Toulon',
        lat: 43.1242,
        lon: 5.9280,
        description: 'Rade méditerranéenne vers les Alpes du Sud ! Toulon accède aux stations ensoleillées du 04 et 06.',
        emoji: '⚓',
        avgDistance: '200',
        avgTime: '2h30-3h30',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Isola 2000', 'Auron', 'Pra-Loup', 'Vars', 'Serre Chevalier'],
        tips: [
            'Isola 2000 à 2h30 via Nice',
            'Alpes du Sud : 300 jours de soleil par an',
            'Mer + montagne : ski le matin, port l\'après-midi'
        ],
        budgetNote: 'Stations du Sud 20-30% moins chères que le Nord'
    },
    {
        id: 'rennes',
        name: 'Rennes',
        lat: 48.1173,
        lon: -1.6778,
        description: 'Capitale bretonne vers les montagnes ! Rennes nécessite un weekend prolongé pour les Alpes ou Pyrénées.',
        emoji: '🥐',
        avgDistance: '600',
        avgTime: '6-7h',
        topRegion: 'Alpes / Pyrénées',
        nearbyStations: ['Chamonix', 'Megève', 'Font-Romeu', 'Saint-Lary', 'Les Arcs'],
        tips: [
            'Privilégier le TGV : Rennes → Lyon puis Alpes (5h)',
            'Alternative : car de nuit vers les Alpes',
            'Weekends de 3-4 jours recommandés'
        ],
        budgetNote: 'Distance importante : anticiper réservations train'
    },
    {
        id: 'perpignan',
        name: 'Perpignan',
        lat: 42.6886,
        lon: 2.8948,
        description: 'Porte catalane des Pyrénées ! Perpignan accède rapidement aux stations des Pyrénées-Orientales.',
        emoji: '🏖️',
        avgDistance: '100',
        avgTime: '1h30-2h',
        topRegion: 'Pyrénées',
        nearbyStations: ['Font-Romeu', 'Les Angles', 'Puyvalador', 'Formiguères', 'Ax-les-Thermes'],
        tips: [
            'Font-Romeu à 1h30 : station olympique ensoleillée',
            'Les Angles à 1h45 : ski + vue Méditerranée',
            'Pyrénées catalanes : culture et authenticité'
        ],
        budgetNote: 'Pyrénées catalanes : excellent rapport qualité-prix'
    },
    {
        id: 'aix-en-provence',
        name: 'Aix-en-Provence',
        lat: 43.5297,
        lon: 5.4474,
        description: 'Ville de Cézanne vers les Alpes du Sud ! Aix accède aux stations ensoleillées en 2-3h.',
        emoji: '🎨',
        avgDistance: '230',
        avgTime: '2h30-3h30',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Serre Chevalier', 'Pra-Loup', 'Vars', 'Risoul', 'Isola 2000'],
        tips: [
            'Isola 2000 à 2h30 via Nice et la Tinée',
            'Serre Chevalier à 3h : grand domaine ensoleillé',
            'Stations du Sud : ensoleillement exceptionnel'
        ],
        budgetNote: 'Position similaire à Marseille, légèrement plus éloignée'
    },
    {
        id: 'valence',
        name: 'Valence',
        lat: 44.9334,
        lon: 4.8924,
        description: 'Porte de la Drôme vers les Alpes ! Valence est sur la route des grandes stations alpines.',
        emoji: '🌻',
        avgDistance: '120',
        avgTime: '1h30-2h',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Les 2 Alpes', 'Alpe d\'Huez', 'Chamrousse', 'Serre Chevalier', 'Les 7 Laux'],
        tips: [
            'Chamrousse à 1h30 via Grenoble',
            'Les 2 Alpes et Alpe d\'Huez à 1h45',
            'Sur l\'A7 : accès direct vers toutes les stations'
        ],
        budgetNote: 'Position centrale : nombreuses stations accessibles'
    },
    {
        id: 'metz',
        name: 'Metz',
        lat: 49.1193,
        lon: 6.1757,
        description: 'Capitale lorraine vers les Vosges ! Metz accède aux stations familiales du massif vosgien.',
        emoji: '🏛️',
        avgDistance: '120',
        avgTime: '1h30-2h',
        topRegion: 'Vosges',
        nearbyStations: ['La Bresse', 'Gérardmer', 'Le Markstein', 'La Planche des Belles Filles', 'Ventron'],
        tips: [
            'La Bresse à 1h30 : plus grande station des Vosges',
            'Gérardmer à 1h45 : ski + lac',
            'Vosges : forfaits 30-35€/jour'
        ],
        budgetNote: 'Vosges : ski familial économique et accessible'
    },
    {
        id: 'nancy',
        name: 'Nancy',
        lat: 48.6921,
        lon: 6.1844,
        description: 'Place Stanislas vers les sommets ! Nancy accède rapidement aux stations vosgiennes.',
        emoji: '👑',
        avgDistance: '90',
        avgTime: '1-1h30',
        topRegion: 'Vosges',
        nearbyStations: ['La Bresse', 'Gérardmer', 'Le Markstein', 'Ventron', 'Le Schnepfenried'],
        tips: [
            'La Bresse à 1h15 : station familiale',
            'Gérardmer à 1h30 : domaine Mauselaine',
            'Ski de fond très développé dans les Vosges'
        ],
        budgetNote: 'Vosges : idéal pour découvrir le ski petit budget'
    },
    {
        id: 'pau',
        name: 'Pau',
        lat: 43.2951,
        lon: -0.3708,
        description: 'Boulevard des Pyrénées ! Pau accède aux stations béarnaises et catalanes.',
        emoji: '🏔️',
        avgDistance: '100',
        avgTime: '1h30-2h',
        topRegion: 'Pyrénées',
        nearbyStations: ['Gourette', 'La Pierre Saint-Martin', 'Artouste', 'Piau-Engaly', 'Cauterets'],
        tips: [
            'Gourette à 1h15 : domaine familial',
            'La Pierre Saint-Martin à 1h30 : grand domaine béarnais',
            'Pyrénées occidentales : stations authentiques'
        ],
        budgetNote: 'Pyrénées béarnaises : excellent rapport qualité-prix'
    },
    {
        id: 'besancon',
        name: 'Besançon',
        lat: 47.2378,
        lon: 6.0241,
        description: 'Capitale comtoise ! Besançon accède au Jura proche et aux stations suisses.',
        emoji: '⌚',
        avgDistance: '80',
        avgTime: '1-1h30',
        topRegion: 'Jura / Suisse',
        nearbyStations: ['Métabief', 'Les Rousses', 'La Dôle (Suisse)', 'Saint-Cergue (Suisse)', 'Chapelle-des-Bois'],
        tips: [
            'Métabief à 1h : plus grand domaine du Jura',
            'Les Rousses à 1h15 : ski nordique + alpin',
            'Stations suisses accessibles (prévoir francs suisses)'
        ],
        budgetNote: 'Jura : ski économique et ski de fond exceptionnel'
    },
    {
        id: 'mulhouse',
        name: 'Mulhouse',
        lat: 47.7508,
        lon: 7.3359,
        description: 'Capitale alsacienne proche des Vosges et de la Suisse ! Mulhouse accède à 3 massifs.',
        emoji: '🚂',
        avgDistance: '80',
        avgTime: '1-1h30',
        topRegion: 'Vosges / Suisse',
        nearbyStations: ['Le Markstein', 'La Bresse', 'Gérardmer', 'Verbier (Suisse)', 'Zermatt (Suisse)'],
        tips: [
            'Le Markstein à 45 min : domaine vosgien',
            'Suisse accessible en 1h30 : Verbier, Zermatt',
            'Forfaits Vosges économiques, Suisse premium'
        ],
        budgetNote: 'Triple choix : Vosges économiques, Suisse premium, Alpes 3h'
    },
    {
        id: 'avignon',
        name: 'Avignon',
        lat: 43.9493,
        lon: 4.8055,
        description: 'Cité des Papes vers les Alpes du Sud ! Avignon accède aux stations ensoleillées en 2-3h.',
        emoji: '🏰',
        avgDistance: '200',
        avgTime: '2h30-3h',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Serre Chevalier', 'Vars', 'Risoul', 'Pra-Loup', 'Isola 2000'],
        tips: [
            'Serre Chevalier à 2h45 : 250 km de pistes',
            'Vars et Risoul à 2h30 : domaine de la Forêt Blanche',
            'Alpes du Sud : soleil garanti'
        ],
        budgetNote: 'Stations ensoleillées et prix doux'
    },
    {
        id: 'brest',
        name: 'Brest',
        lat: 48.3905,
        lon: -4.4860,
        description: 'Bout du monde vers les montagnes ! Brest nécessite un long trajet mais les Alpes valent le détour.',
        emoji: '⚓',
        avgDistance: '750',
        avgTime: '8-9h',
        topRegion: 'Alpes',
        nearbyStations: ['Chamonix', 'Megève', 'Les Arcs', 'Val Thorens', 'Avoriaz'],
        tips: [
            'Privilégier le train : Brest → Paris → Lyon → Alpes',
            'Alternative avion : Brest → Lyon puis navette',
            'Vacances d\'une semaine recommandées (pas weekend)'
        ],
        budgetNote: 'Distance très importante : privilégier train ou avion'
    },
    {
        id: 'le-havre',
        name: 'Le Havre',
        lat: 49.4944,
        lon: 0.1079,
        description: 'Port normand vers les Alpes ! Le Havre nécessite un weekend prolongé pour skier.',
        emoji: '🌊',
        avgDistance: '650',
        avgTime: '7-8h',
        topRegion: 'Alpes',
        nearbyStations: ['Chamonix', 'Megève', 'Les Arcs', 'La Plagne', 'Avoriaz'],
        tips: [
            'Train recommandé : Le Havre → Paris → Alpes (5-6h)',
            'Voiture : départ vendredi soir, arrivée samedi matin',
            'Weekends de 3-4 jours minimum'
        ],
        budgetNote: 'Budget transport important : anticiper réservations'
    },
    // VAGUE 3 - Villes spécifiques et stratégiques
    {
        id: 'geneve',
        name: 'Genève',
        lat: 46.2044,
        lon: 6.1432,
        description: 'Capitale internationale aux portes des Alpes ! Genève accède aux plus beaux domaines franco-suisses.',
        emoji: '🇨🇭',
        avgDistance: '50',
        avgTime: '30min-1h',
        topRegion: 'Alpes / Suisse',
        nearbyStations: ['Chamonix', 'Megève', 'Verbier', 'Les Portes du Soleil', 'Zermatt'],
        tips: [
            'Chamonix à 1h : accès direct par autoroute blanche',
            'Verbier (Suisse) à 1h30 : domaine 4 Vallées',
            'Forfaits suisses : prévoir 70-90 CHF/jour'
        ],
        budgetNote: 'Position exceptionnelle : France et Suisse accessibles'
    },
    {
        id: 'albertville',
        name: 'Albertville',
        lat: 45.6758,
        lon: 6.3917,
        description: 'Ville olympique 1992 au cœur des Alpes ! Albertville accède à toutes les stations en 30-45 min.',
        emoji: '🥇',
        avgDistance: '30',
        avgTime: '30-45min',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Les Arcs', 'La Plagne', 'Les Saisies', 'Valmorel', 'Méribel'],
        tips: [
            'Hub olympique : toutes les stations à moins de 45 min',
            'Gare TGV avec navettes directes',
            'Hébergement en ville 40% moins cher qu\'en station'
        ],
        budgetNote: 'Position centrale idéale : dormez en ville, skiez partout'
    },
    {
        id: 'gap',
        name: 'Gap',
        lat: 44.5590,
        lon: 6.0789,
        description: 'Capitale des Hautes-Alpes ! Gap accède aux stations ensoleillées du Sud en moins d\'1h.',
        emoji: '⛰️',
        avgDistance: '50',
        avgTime: '45min-1h',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Serre Chevalier', 'Vars', 'Risoul', 'Puy-Saint-Vincent', 'Orcières'],
        tips: [
            'Serre Chevalier à 45 min : 250 km de pistes',
            'Vars-Risoul à 1h : domaine de la Forêt Blanche',
            'Ensoleillement exceptionnel toute la saison'
        ],
        budgetNote: 'Alpes du Sud : soleil + prix 30% moins chers'
    },
    {
        id: 'briancon',
        name: 'Briançon',
        lat: 44.8978,
        lon: 6.6433,
        description: 'Plus haute ville d\'Europe ! Briançon est au cœur du domaine Serre Chevalier Vallée.',
        emoji: '🏔️',
        avgDistance: '15',
        avgTime: '15-30min',
        topRegion: 'Alpes du Sud',
        nearbyStations: ['Serre Chevalier', 'Montgenèvre', 'Vars', 'Risoul', 'Puy-Saint-Vincent'],
        tips: [
            'Serre Chevalier accessible en navette (10 min)',
            'Montgenèvre à 20 min : accès Via Lattea (Italie)',
            'Altitude 1326m : ville la plus haute de France'
        ],
        budgetNote: 'Hébergement en ville + ski journée : économie 50%'
    },
    {
        id: 'grenoble-2',
        name: 'Voiron',
        lat: 45.3667,
        lon: 5.5897,
        description: 'Capitale de la Chartreuse ! Voiron accède rapidement aux stations de l\'Isère.',
        emoji: '🌲',
        avgDistance: '60',
        avgTime: '1-1h15',
        topRegion: 'Alpes du Nord',
        nearbyStations: ['Chamrousse', 'Les 7 Laux', 'Alpe d\'Huez', 'Les 2 Alpes', 'Saint-Pierre de Chartreuse'],
        tips: [
            'Chamrousse à 45 min via Grenoble',
            'Stations familiales de Chartreuse à 30 min',
            'Position similaire à Grenoble, moins de bouchons'
        ],
        budgetNote: 'Proximité Grenoble sans les inconvénients urbains'
    }
];


// Template de page
function generateCityPage(city) {
    return `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO OPTIMISÉ -->
    <title>Où Skier depuis ${city.name} ? Meilleures Stations de Ski (2025)</title>
    <meta name="description" content="Découvrez les stations de ski accessibles depuis ${city.name}. Distances, prix, conseils pratiques. ${city.nearbyStations.slice(0, 3).join(', ')} et plus !">
    <meta name="keywords" content="ski depuis ${city.name.toLowerCase()}, station ski ${city.name.toLowerCase()}, weekend ski ${city.name.toLowerCase()}, ski proche ${city.name.toLowerCase()}">

    <!-- Open Graph -->
    <meta property="og:title" content="Stations de Ski depuis ${city.name} - Weekend & Vacances">
    <meta property="og:description" content="Top stations de ski accessibles depuis ${city.name}. ${city.description}">
    <meta property="og:type" content="website">

    <!-- Canonical -->
    <link rel="canonical" href="https://ouskierceweeekend.fr/villes/${city.id}.html">
    <link rel="icon" href="../favicon.ico" type="image/x-icon">

    <link rel="stylesheet" href="../styles.css">

    <!-- Schema.org -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Stations de ski depuis ${city.name}",
      "description": "${city.description}",
      "url": "https://ouskierceweeekend.fr/villes/${city.id}.html"
    }
    </script>

    <style>
        .city-hero {
            background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(240, 147, 251, 0.2) 100%);
            backdrop-filter: blur(20px);
            padding: 60px 40px;
            border-radius: 20px;
            margin-bottom: 40px;
            text-align: center;
            border: 2px solid rgba(79, 172, 254, 0.3);
        }

        .city-hero h1 {
            font-size: 2.5em;
            margin-bottom: 15px;
            background: linear-gradient(135deg, #4facfe 0%, #f093fb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .city-stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }

        .city-stat {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 25px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid rgba(79, 172, 254, 0.2);
        }

        .city-stat-number {
            font-size: 2.5em;
            font-weight: 800;
            color: #4facfe;
            display: block;
            margin-bottom: 10px;
        }

        .city-stat-label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95em;
        }

        .seo-content {
            background: white;
            padding: 40px;
            border-radius: 15px;
            margin: 40px 0;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .seo-content h2 {
            color: #2c3e50;
            font-size: 1.8em;
            margin-bottom: 20px;
        }

        .seo-content h3 {
            color: #4facfe;
            font-size: 1.3em;
            margin: 30px 0 15px;
        }

        .seo-content p, .seo-content li {
            color: #555;
            line-height: 1.8;
            margin-bottom: 15px;
        }

        .quick-filters {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin: 30px 0;
        }

        .quick-filter-btn {
            padding: 12px 20px;
            background: rgba(79, 172, 254, 0.1);
            border: 2px solid rgba(79, 172, 254, 0.3);
            border-radius: 25px;
            color: white;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 600;
        }

        .quick-filter-btn:hover,
        .quick-filter-btn.active {
            background: linear-gradient(135deg, #4facfe 0%, #f093fb 100%);
            border-color: #4facfe;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="../index.html" class="nav-logo">⛷️ Où skier ce weekend</a>
            <div class="nav-menu">
                <a href="../index.html" class="nav-link">Recherche</a>
                <a href="../stations.html" class="nav-link">Toutes les stations</a>
                <a href="../blog/index.html" class="nav-link">Blog</a>
                <a href="../favorites.html" class="nav-link">
                    Favoris <span class="favorites-counter">0</span>
                </a>
                <a href="../about.html" class="nav-link">À propos</a>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="city-hero">
            <h1>${city.emoji} Où Skier depuis ${city.name} ?</h1>
            <p class="subtitle" style="font-size: 1.2em; max-width: 700px; margin: 0 auto;">
                ${city.description}
            </p>
        </div>

        <div class="city-stats" id="cityStats">
            <div class="city-stat">
                <span class="city-stat-number" id="stationsCount">0</span>
                <span class="city-stat-label">stations accessibles</span>
            </div>
            <div class="city-stat">
                <span class="city-stat-number" id="closestDistance">0 km</span>
                <span class="city-stat-label">station la plus proche</span>
            </div>
            <div class="city-stat">
                <span class="city-stat-number" id="avgPrice">0€</span>
                <span class="city-stat-label">prix moyen weekend</span>
            </div>
            <div class="city-stat">
                <span class="city-stat-number">${city.avgTime}</span>
                <span class="city-stat-label">temps de trajet moyen</span>
            </div>
        </div>

        <div class="quick-filters">
            <button class="quick-filter-btn active" onclick="filterDistance('all')">🎿 Toutes les stations</button>
            <button class="quick-filter-btn" onclick="filterDistance('200')">🚗 Moins de 200 km</button>
            <button class="quick-filter-btn" onclick="filterDistance('300')">⛰️ Moins de 300 km</button>
            <button class="quick-filter-btn" onclick="filterBudget()">💰 Petit budget</button>
            <button class="quick-filter-btn" onclick="filterLarge()">🎯 Grands domaines</button>
        </div>

        <div id="results" class="results"></div>

        <!-- CONTENU SEO -->
        <section class="seo-content">
            <h2>Skier depuis ${city.name} : le guide complet 2025</h2>

            <p>${city.description}</p>

            <h3>🏔️ Top stations depuis ${city.name}</h3>
            <ul>
                ${city.nearbyStations.map(station => `<li><strong>${station}</strong></li>`).join('')}
            </ul>

            <h3>💡 Conseils pratiques</h3>
            <ul>
                ${city.tips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 25px 0;">
                <strong style="color: #4facfe;">💰 Bon à savoir</strong><br>
                ${city.budgetNote}
            </div>

            <h3>📍 Distance moyenne : ~${city.avgDistance} km</h3>
            <p>Depuis ${city.name}, vous accédez principalement aux stations ${city.topRegion}. Le temps de trajet moyen est de ${city.avgTime}.</p>
        </section>
    </div>

    <footer class="footer">
        <p>&copy; 2025 Où skier ce weekend - <a href="../legal.html" style="color: white; text-decoration: underline;">Mentions légales</a></p>
    </footer>

    <script src="../config.js"></script>
    <script src="../stations-data.js"></script>
    <script src="../favorites.js"></script>

    <script>
        const cityLocation = {
            name: '${city.name}',
            lat: ${city.lat},
            lon: ${city.lon}
        };

        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                     Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                     Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return Math.round(R * c);
        }

        let allStationsWithDistance = [];

        function loadStations() {
            allStationsWithDistance = skiResorts.map(station => ({
                ...station,
                distance: calculateDistance(
                    cityLocation.lat,
                    cityLocation.lon,
                    station.lat,
                    station.lon
                )
            })).sort((a, b) => a.distance - b.distance);

            updateCityStats();
            displayStations(allStationsWithDistance);
        }

        function updateCityStats() {
            const accessible = allStationsWithDistance.filter(s => s.distance <= 500);
            document.getElementById('stationsCount').textContent = accessible.length;
            document.getElementById('closestDistance').textContent = allStationsWithDistance[0].distance + ' km';

            const avgPrice = Math.round(
                accessible.reduce((sum, s) => sum + (s.skiPass || 0) + (s.lodging || 0), 0) / accessible.length
            );
            document.getElementById('avgPrice').textContent = avgPrice + '€';
        }

        function displayStations(stations) {
            const resultsContainer = document.getElementById('results');

            if (stations.length === 0) {
                resultsContainer.innerHTML = '<p style="text-align: center; color: white; padding: 40px;">Aucune station ne correspond à vos critères.</p>';
                return;
            }

            const html = stations.map(station => {
                const totalPrice = (station.skiPass || 0) + (station.lodging || 0);
                const travelTime = Math.round(station.distance / 90);

                return \`
                    <div class="resort-card">
                        <div class="card-top-actions">
                            <button class="favorite-btn-card" onclick="toggleFavorite('\${station.id}')" aria-label="Ajouter aux favoris">
                                \${typeof favoritesManager !== 'undefined' && favoritesManager.isFavorite(station.id) ? '❤️' : '🤍'}
                            </button>
                        </div>
                        <img src="../\${station.image}" alt="\${station.name}" onerror="this.src='../images/default-station.jpg'">
                        <div class="card-content">
                            <div class="card-header">
                                <h3>\${station.name}</h3>
                                <span class="region-badge">\${station.region}</span>
                            </div>
                            <p class="description">\${station.description || ''}</p>
                            <div class="metrics">
                                <div class="metric">
                                    <span class="metric-icon">🚗</span>
                                    <span class="metric-value">\${station.distance} km</span>
                                    <span class="metric-label">~\${travelTime}h de route</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-icon">⛷️</span>
                                    <span class="metric-value">\${station.slopes}</span>
                                    <span class="metric-label">de pistes</span>
                                </div>
                                <div class="metric">
                                    <span class="metric-icon">🏔️</span>
                                    <span class="metric-value">\${station.altitude}</span>
                                    <span class="metric-label">altitude</span>
                                </div>
                                <div class="metric highlight">
                                    <span class="metric-icon">💰</span>
                                    <span class="metric-value">\${totalPrice}€</span>
                                    <span class="metric-label">forfait + logement/jour</span>
                                </div>
                            </div>
                            <div class="advantages">
                                \${station.advantages ? station.advantages.map(adv => \`<span class="advantage-tag">\${adv}</span>\`).join('') : ''}
                            </div>
                            <a href="../station-detail.html?id=\${station.id}" class="btn-primary">Voir les détails</a>
                        </div>
                    </div>
                \`;
            }).join('');

            resultsContainer.innerHTML = html;
        }

        function filterDistance(maxDistance) {
            document.querySelectorAll('.quick-filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            let filtered = allStationsWithDistance;
            if (maxDistance !== 'all') {
                filtered = allStationsWithDistance.filter(s => s.distance <= parseInt(maxDistance));
            }
            displayStations(filtered);
        }

        function filterBudget() {
            document.querySelectorAll('.quick-filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const filtered = allStationsWithDistance.filter(s => {
                const total = (s.skiPass || 0) + (s.lodging || 0);
                return total < 160;
            }).sort((a, b) => {
                const priceA = (a.skiPass || 0) + (a.lodging || 0);
                const priceB = (b.skiPass || 0) + (b.lodging || 0);
                return priceA - priceB;
            });
            displayStations(filtered);
        }

        function filterLarge() {
            document.querySelectorAll('.quick-filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const filtered = allStationsWithDistance.filter(s => {
                const slopes = parseInt(s.slopes) || 0;
                return slopes >= 150;
            });
            displayStations(filtered);
        }

        function toggleFavorite(stationId) {
            if (typeof favoritesManager !== 'undefined') {
                favoritesManager.toggleFavorite(stationId);
                loadStations();
            }
        }

        document.addEventListener('DOMContentLoaded', loadStations);
    </script>
</body>
</html>`;
}

// Générer toutes les pages
cities.forEach(city => {
    const content = generateCityPage(city);
    const fileName = path.join(__dirname, `${city.id}.html`);
    fs.writeFileSync(fileName, content, 'utf8');
    console.log(`✓ Page générée : ${city.name} (${city.id}.html)`);
});

console.log(`\n✅ ${cities.length} pages villes générées avec succès !`);
