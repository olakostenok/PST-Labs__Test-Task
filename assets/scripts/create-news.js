import createNewsCard from './news-card.js';
import requestEmulate from './request-emulate.js';

function createNews () {
    requestEmulate('assets/json/data.json').then(function(data) {
        data.forEach(createNewsCard);
    });
}

createNews ();