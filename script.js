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

const pname = document.querySelector('#input-name');
const pSobreN = document.querySelector('#input-lastname');
const pEmail = document.getElementById('input-email');
const pCasa = document.getElementById('house');
// https://pt.stackoverflow.com/questions/83463/pegar-valores-checkbox-com-javascript
function pMaterias() {
  let lMaterias = [];
  const materias = document.getElementsByName('materia');
  for (let i = 0; i < materias.length; i += 1) {
    if (materias[i].checked) {
      lMaterias.push(materias[i].value);
    }
  }
  lMaterias = lMaterias.join(', ');
  return lMaterias;
}
botao.addEventListener('click', (e) => {
  const pObs = document.getElementById('textarea');
  const pNota = document.querySelector('input[name="rate"]:checked');
  const pFamilia = document.querySelector('input[name="family"]:checked');
  e.preventDefault();
  formulario.innerHTML = `
  <p>Nome: ${pname.value} ${pSobreN.value}</p>
  <p>Email: ${pEmail.value}</p>
  <p>Casa: ${pCasa.value}</p>
  <p>Família: ${pFamilia.value}</p>
  <p>Matérias: ${pMaterias()}</p>
  <p>Avaliação: ${pNota.value}</p>
  <p>Observações: ${pObs.value}</p>
  `;
});
