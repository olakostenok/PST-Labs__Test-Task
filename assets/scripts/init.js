import tabSwitcher from './tabs-switcher.js';
import checkFormFields from './check-form-fields.js';

function init() {
  tabSwitcher();
  localStorage.clear();
  new WOW().init();
}

init();
