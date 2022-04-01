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

// requsisito 21

function pNomeComp() {
  const nome = document.querySelector('#input-name').value;
  const sobren = document.querySelector('#input-lastname').value;

  return `Nome: ${nome} ${sobren}`;
}

function pEmail() {
  const email = document.getElementById('input-email').value;

  return `email: ${email}`;

}

function pCasa() {
  const casa = document.getElementById('house').value;

  return `Casa: ${casa}`;
}

function pFamilia() {
  const familia = document.querySelector('input[name="family"]:checked').value;

  return `Familia: ${familia}`;
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
  const nota = document.querySelector('input[name="rate"]:checked').value;

  return `Avaliação: ${nota}`;
}

function pObs() {
  const obs = document.getElementById('texarea').value;

  return `Observações: ${obs}`;
}



function registro() {
const materias = document.getElementById('label-content').value;
const avaliacao = document.getElementById('avalia').value;

function clean() {

}

}


botao.addEventListener('click', enviar);