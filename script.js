const btn = document.getElementById('entrar');
const email = document.getElementById('login');
const senha = document.getElementById('password');

function valida() {
  if (email.value !== 'tryber@teste.com' && senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btn.addEventListener('click', valida);

// const submitButton = document.getElementById('submit-btn');
// const check = document.getElementById('agreement');
// submitButton.disable = true;

// check.addEventListener('click', () => {
//   if (check.select === true) {
//     submitButton.disable = false;
//   } else {
//     submitButton.disable = true;
//   }
// });

const botao = document.getElementById('submit-btn');
const check = document.getElementById('agreement');
botao.disabled = true;

check.addEventListener('change', () => {
  if (check.checked) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});
