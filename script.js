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

const areaDeTexto = document.querySelector('#textarea');


function decrementaCaracteres() {
  const contador = document.querySelector('#counter');
  let valorText = areaDeTexto.value.length;
  let tamanhoTexto = valorText + 1;
  contador.innerText = 500 - valorText;
  
}
console.log(areaDeTexto)

buttonLogin.addEventListener('click', validaLogin);
checkboxAgreement.addEventListener('click', validaCheckbox);
areaDeTexto.addEventListener('keypress', decrementaCaracteres)
