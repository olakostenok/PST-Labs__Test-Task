function deleteNews() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-trash')) {
      e.target.parentElement.parentElement.remove();
    }
  });
}

export default deleteNews;
