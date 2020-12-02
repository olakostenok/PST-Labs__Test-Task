import createNewsCard from './news-card.js';
import requestEmulate from './request-emulate.js';
import createUserFeatures from './add-user-features.js';
import addNewsToFavorites from './add-news-to-favorites.js';
import deleteNews from './delete-news.js';

function createNewsPage () {
    requestEmulate('assets/json/data.json').then(function(data) {
        data.forEach(createNewsCard);
    });
    if(localStorage.getItem('login as') == 'user') {
        createUserFeatures ();
    } else {
        createUserFeatures ();
        deleteNews ();
    }
    addNewsToFavorites ();
}

createNewsPage ();