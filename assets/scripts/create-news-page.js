import createNewsCard from './news-card.js';
import requestEmulate from './request-emulate.js';
import createUserFeatures from './add-user-features.js';

function createNewsPage () {
    requestEmulate('assets/json/data.json').then(function(data) {
        data.forEach(createNewsCard);
    });
    if(localStorage.getItem('login as') == 'user') {
        createUserFeatures ();
    } else {
        createUserFeatures ();
    }
}

createNewsPage ();