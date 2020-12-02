function createNewsCard({ image, content, title, toTrashButton }) {
  if(localStorage.getItem('login as') == 'user') {
    toTrashButton = 'hidden';
  } else {
    toTrashButton = '';
  }
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
  <div class="news-card__content">
  <p>${content}</p>
  <button class="add-to-favorites">Добавить в «Избранное» <i class="fa fa-heart"></i></button>
  <button class="add-to-trash ${toTrashButton}">Удалить новость <i class="fa fa-trash"></i></button>
  </div>
    `
  );

  newsWrapper.insertAdjacentElement('beforeend', newsCard);
}

export default createNewsCard;
