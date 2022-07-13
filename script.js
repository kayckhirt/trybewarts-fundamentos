const buttonLogin = document.querySelector('.entrar');

function validaLogin() {
  const login = document.querySelector('.email');
  const senha = document.querySelector('.senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonLogin.addEventListener('click', validaLogin);
