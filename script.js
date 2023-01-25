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

function decrementaCaracteres(e) {
  const contador = document.querySelector('#counter');
  const valorText = areaDeTexto.value.length;
  const maiorValor = 500;
  if (valorText >= maiorValor) {
    e.preventDefault();
  } else {
    contador.innerText = 500 - valorText;
  }
}

const butaoEnviar = document.querySelector('#submit-btn');
const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelectorAll('input[name="family"]');
const conteudos = document.querySelectorAll('.subject');
const avaliacao = document.querySelectorAll('input[name="rate"]');
const form = document.querySelector('#form');
const formEvaluation = document.querySelector('#evaluation-form');

const createP = (text) => {
  const p = document.createElement('p');
  p.innerText = text;
  return p;
};

function checkboxAndRadio(array) {
  let familiaValor = '';
  for (let indice = 0; indice < array.length; indice += 1) {
    const input = array[indice];
    if (input.checked) {
      familiaValor += `${input.value}, `;
    }
  }
  return familiaValor.slice(0, -2);
}

function retornaResultados() {
  formEvaluation.innerHTML = '';
  formEvaluation.classList.add('hidden');
  const formData = document.createElement('form');
  form.appendChild(formData);
  formData.id = 'form-data';
  formData.appendChild(createP(`Nome: ${nome.value} ${sobrenome.value}`));
  formData.appendChild(createP(`Email: ${email.value}`));
  formData.appendChild(createP(`Casa: ${casa.options[casa.selectedIndex].value}`));
  formData.appendChild(createP(`Família: ${checkboxAndRadio(familia)}`));
  formData.appendChild(createP(`Matérias: ${checkboxAndRadio(conteudos)}`));
  formData.appendChild(createP(`Avaliação: ${checkboxAndRadio(avaliacao)}`));
  formData.appendChild(createP(`Observações: ${areaDeTexto.value}`));
}

butaoEnviar.addEventListener('click', retornaResultados);
buttonLogin.addEventListener('click', validaLogin);
checkboxAgreement.addEventListener('click', validaCheckbox);
areaDeTexto.addEventListener('keyup', decrementaCaracteres);