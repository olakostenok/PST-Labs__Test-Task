const logInButton = document.querySelector('.login-form .button');
const logInInputs = document.querySelectorAll('.login-form input');
let validField = 0;

function resetFields() {
  setTimeout(() => {
    [...logInInputs].forEach((el) => {
      el.value = '';
      el.classList.remove('valid-field');
      el.classList.remove('invalid-field');
    });
  }, 1000);
}
function checkFormFields() {
  const user = {
    login: 'user',
    password: 'user',
  };
  const admin = {
    login: 'admin',
    password: 'admin',
  };

  [...logInInputs].forEach((el, index) => {
    if (index == 0) {
      if (el.value == user.login) {
        el.classList.add('valid-field');
        validField++;
        localStorage.setItem('login as', user.login);
      } else if (el.value == admin.login) {
        el.classList.add('valid-field');
        validField++;
        localStorage.setItem('login as', admin.login);
      } else {
        el.classList.add('invalid-field');
      }
    }
    if (index == 1) {
      if (el.value == user.password || el.value == admin.password) {
        el.classList.add('valid-field');
        validField++;
      } else {
        el.classList.add('invalid-field');
      }
    }
  });

  if (validField == logInInputs.length) {
    setTimeout(function () {
      window.location.href = 'news-page.html';
    }, 1000);
  } else {
    resetFields();
  }
  validField = 0;
}

logInButton.addEventListener('click', () => {
  checkFormFields();
  resetFields();
});
document.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    checkFormFields();
    resetFields();
  }
});
// export default checkFormFields;
