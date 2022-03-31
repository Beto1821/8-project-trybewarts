const btn = document.getElementById('entrar');
const email = document.getElementById('login');
const senha = document.getElementById('password');

function valida(msg) {
  if (email.value !== 'tryber@teste.com' || senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  return msg;
}

btn.addEventListener('click', valida);
