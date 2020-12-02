function createUserFeatures() {
  const mainContainer = document.querySelector('.main-container');
  const userString = document.createElement('div');
  userString.className = 'user-page';
  userString.innerHTML = `you are logged in as ${localStorage.getItem(
    'login as'
  )}`.toUpperCase();
  mainContainer.appendChild(userString);
 
  const favoritesLink = document.createElement('a');
  favoritesLink.setAttribute('href', '#')
  favoritesLink.className = 'favorites';
  favoritesLink.innerHTML = 'Избранное ';
  mainContainer.appendChild(favoritesLink);

  const heartIcon = document.createElement('i');
  heartIcon.className = 'fa fa-heart';
  favoritesLink.appendChild(heartIcon);
}

export default createUserFeatures;
