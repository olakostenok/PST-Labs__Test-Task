function createNewsCard({ image, content, title }) {
  const newsWrapper = document.querySelector('.news-wrapper');
  const newsCard = document.createElement('div');
  newsCard.className = 'news-card';
  newsCard.insertAdjacentHTML(
    'beforeend',
    `
    <div class="news-card__title">${title}</div>
  <div class="news-card__image">
    <img src="${image}" alt="image" />
  </div>
  <div class="news-card__content">${content}</div>
    `
  );

  newsWrapper.insertAdjacentElement('beforeend', newsCard);
}

export default createNewsCard;
