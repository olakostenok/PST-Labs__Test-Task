function addNewsToFavorites() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-favorites')) {
      e.target.parentElement.parentElement.classList.add('favorite-news');
    }
    if (e.target.classList.contains('favorites')) {
      const newsCard = document.querySelectorAll('.news-card');
      [...newsCard].forEach((el) => {
        if (!el.classList.contains('favorite-news')) {
          el.remove();
        }
      });
    }
  });
}
export default addNewsToFavorites;
