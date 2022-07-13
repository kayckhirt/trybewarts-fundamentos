const buttonLogin = document.querySelector('.entrar');
const checkboxAgreement = document.querySelector('#agreement');

function validaLogin() {
  const login = document.querySelector('.email');
  const senha = document.querySelector('.senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

function validaCheckbox() {
  const buttonEnviar = document.querySelector('#submit-btn');
  if (checkboxAgreement.checked) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

buttonLogin.addEventListener('click', validaLogin);
checkboxAgreement.addEventListener('click', validaCheckbox);
