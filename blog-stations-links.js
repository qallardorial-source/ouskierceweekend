/**
 * Mapping entre articles de blog et stations
 * Permet de créer des liens bidirectionnels intelligents
 */

const blogStationsLinks = {
    // Définition des articles de blog
    articles: [
        {
            id: 'top-10-stations-debutants',
            title: 'Top 10 des Meilleures Stations pour Débutants',
            url: 'blog/top-10-stations-debutants.html',
            keywords: ['débutant', 'famille', 'apprentissage'],
            relevantFor: (station) => {
                return station.level && (
                    station.level.includes('Débutant') ||
                    station.level.includes('Tous niveaux')
                );
            }
        },
        {
            id: 'ski-pas-cher-france',
            title: 'Où Skier Pas Cher en France',
            url: 'blog/ski-pas-cher-france.html',
            keywords: ['budget', 'économique', 'pas cher'],
            relevantFor: (station) => {
                const totalPrice = (station.skiPass || 0) + (station.lodging || 0);
                return totalPrice < 180; // Stations économiques
            }
        },
        {
            id: 'ski-printemps-mars-avril',
            title: 'Où Skier au Printemps (Mars-Avril)',
            url: 'blog/ski-printemps-mars-avril.html',
            keywords: ['printemps', 'altitude', 'glacier'],
            relevantFor: (station) => {
                const altitude = parseInt(station.altitude) || 0;
                return altitude > 2500 ||
                       station.name.includes('Val Thorens') ||
                       station.name.includes('Tignes') ||
                       station.name.includes('2 Alpes');
            }
        },
        {
            id: 'alpes-nord-vs-alpes-sud',
            title: 'Alpes du Nord vs Alpes du Sud',
            url: 'blog/alpes-nord-vs-alpes-sud.html',
            keywords: ['alpes', 'comparaison', 'région'],
            relevantFor: (station) => {
                return station.region === 'Alpes du Nord' ||
                       station.region === 'Alpes du Sud';
            }
        },
        {
            id: 'budget-ski-weekend-guide',
            title: 'Budget Ski Weekend : Guide Complet',
            url: 'blog/budget-ski-weekend-guide.html',
            keywords: ['budget', 'weekend', 'tarifs'],
            relevantFor: (station) => {
                return true; // Pertinent pour toutes les stations
            }
        },
        {
            id: 'plus-grands-domaines-france',
            title: 'Top 15 des Plus Grands Domaines Skiables',
            url: 'blog/plus-grands-domaines-france.html',
            keywords: ['grand domaine', 'ski', 'étendu'],
            relevantFor: (station) => {
                const slopes = parseInt(station.slopes) || 0;
                return slopes > 150; // Grands domaines
            }
        },
        {
            id: 'stations-ski-familiales',
            title: 'Top 10 Stations de Ski Familiales',
            url: 'blog/stations-ski-familiales.html',
            keywords: ['famille', 'enfants', 'débutant'],
            relevantFor: (station) => {
                return station.level && (
                    station.level.includes('Débutant') ||
                    station.level.includes('Tous niveaux') ||
                    station.level.includes('Famille')
                ) ||
                station.activities && station.activities.some(act =>
                    act.includes('Enfants') || act.includes('Famille')
                );
            }
        }
    ],

    /**
     * Récupère les articles pertinents pour une station
     */
    getRelevantArticles(station, maxResults = 3) {
        if (!station) return [];

        return this.articles
            .filter(article => article.relevantFor(station))
            .slice(0, maxResults);
    },

    /**
     * Génère le HTML pour afficher les articles liés
     */
    createRelatedArticlesHTML(station) {
        const relatedArticles = this.getRelevantArticles(station);

        if (relatedArticles.length === 0) {
            return '';
        }

        const articlesHTML = relatedArticles.map(article => `
            <div class="related-article-card">
                <h4>
                    <a href="${article.url}" style="color: #4facfe; text-decoration: none;">
                        📖 ${article.title}
                    </a>
                </h4>
                <p style="font-size: 0.9em; opacity: 0.8; margin-top: 8px;">
                    ${this.getArticleDescription(article.id)}
                </p>
                <a href="${article.url}" style="color: #f093fb; font-size: 0.9em; text-decoration: none;">
                    Lire l'article →
                </a>
            </div>
        `).join('');

        return `
            <section class="detail-section" id="articles-blog">
                <h2>📚 Articles de blog recommandés</h2>
                <div class="related-articles-grid">
                    ${articlesHTML}
                </div>
            </section>
        `;
    },

    /**
     * Descriptions des articles
     */
    getArticleDescription(articleId) {
        const descriptions = {
            'top-10-stations-debutants': 'Découvrez les meilleures stations pour apprendre à skier en toute sérénité.',
            'ski-pas-cher-france': 'Conseils et bons plans pour skier sans se ruiner.',
            'ski-printemps-mars-avril': 'Les stations d\'altitude qui offrent les meilleures conditions en fin de saison.',
            'alpes-nord-vs-alpes-sud': 'Comparaison détaillée pour choisir entre les Alpes du Nord et du Sud.',
            'budget-ski-weekend-guide': 'Guide complet pour planifier votre budget ski weekend.',
            'plus-grands-domaines-france': 'Explorez les plus vastes domaines skiables de France.',
            'stations-ski-familiales': 'Les meilleures destinations pour un séjour ski en famille.'
        };
        return descriptions[articleId] || '';
    }
};

// Styles CSS pour les cartes d'articles liés
if (!document.getElementById('blog-links-styles')) {
    const style = document.createElement('style');
    style.id = 'blog-links-styles';
    style.textContent = `
        .related-articles-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .related-article-card {
            background: rgba(255, 255, 255, 0.12);
            padding: 25px;
            border-radius: 12px;
            border-left: 4px solid #4facfe;
            transition: all 0.3s;
        }

        .related-article-card:hover {
            background: rgba(255, 255, 255, 0.12);
            transform: translateY(-3px);
            box-shadow: 0 5px 20px rgba(79, 172, 254, 0.3);
        }

        .related-article-card h4 {
            margin-bottom: 10px;
            font-size: 1.1em;
        }

        .related-article-card h4 a:hover {
            text-decoration: underline !important;
        }

        .related-article-card p {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin: 10px 0;
        }

        @media (max-width: 768px) {
            .related-articles-grid {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
}
