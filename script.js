const btn = document.getElementById('entrar');
const email = document.getElementById('login');
const senha = document.getElementById('password');
const textArea = document.getElementById('textarea');
const textoContador = document.getElementById('counter');
const botao = document.getElementById('submit-btn');
const check = document.getElementById('agreement');
const formulario = document.getElementById('evaluation-form');

function valida() {
  if (email.value !== 'tryber@teste.com' && senha.value !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

btn.addEventListener('click', valida);

check.addEventListener('change', () => {
  if (check.checked) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
});

botao.disabled = true;
function contador() {
  let count = 500;
  count -= textArea.value.length;
  textoContador.innerText = `${count}`;
}

textArea.addEventListener('input', contador);

function pNome() {
  const name = document.querySelector('#input-name').value;
  const lname = document.querySelector('#input-lastname').value;

  return `Nome: ${name} ${lname}`;
}

function pEmail() {
  return `email: ${document.getElementById('input-email').value}`;
}

function pCasa() {
  return `Casa: ${document.getElementById('house').value}`;
}

function pFamilia() {
  return `Familia: ${
    document.querySelector('input[name="family"]:checked').value
  }`;
}
// https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
function pMaterias() {
  const lMaterias = [];
  const materias = document.getElementsByName('materia');
  for (let m = 0; m < materias.length; m += 1) {
    if (materias[m].checked) {
      lMaterias.push(materias[m].value);
    }
  }
  return `Matérias: ${lMaterias}`;
}

function pNota() {
  return `Avaliação: ${
    document.querySelector('input[name="rate"]:checked').value
  }`;
}

function pObs() {
  return `Observações: ${document.getElementById('texarea').value}`;
}

function enviar(event) {
const construcao = [
  pNome(),
  pEmail(),
  pCasa(),
  pFamilia(),
  pMaterias(),
  pNota(),
  pObs(),
];}
//   formulario.innerHTML = '';
// }

botao.addEventListener('click', enviar);
