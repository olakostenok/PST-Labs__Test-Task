function tabSwitcher() {
  const tabs = document.querySelector('#tabs');
  const forms = document.querySelector('#forms');
  tabs.addEventListener('click', (e) => {
    tabs
      .querySelectorAll('.tab')
      .forEach((el) => el.classList.remove('active-tab'));
    e.target.classList.add('active-tab');
    forms
      .querySelectorAll('.form')
      .forEach((el) => el.classList.remove('hidden'));
    if (e.target.getAttribute('title') == 'Tab 1') {
      forms.children[1].classList.remove('active-form');
      forms.children[0].classList.add('active-form');
    } else {
      forms.children[0].classList.remove('active-form');
      forms.children[1].classList.add('active-form');
    }
  });
}

export default tabSwitcher;
