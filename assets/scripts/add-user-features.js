function createUserFeatures() {
  const mainContainer = document.querySelector('.main-container');
  const userString = document.createElement('div');
  userString.className = 'user-page';
  userString.innerHTML = `you are logged in as ${localStorage.getItem(
    'login as'
  )}`.toUpperCase();
  mainContainer.appendChild(userString);
}

export default createUserFeatures;
