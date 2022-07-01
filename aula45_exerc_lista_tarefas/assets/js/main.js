const inputTarefa = document.querySelector('.inputTarefa');
const adicionarTarefa = document.querySelector('.adicionarTarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const tarefasArray = [];
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('apagar', '').trim();
    tarefasArray.push(tarefaTexto);
  }
  const tarefasString = JSON.stringify(tarefasArray);
  localStorage.setItem('tarefas', tarefasString);
}

inputTarefa.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
})

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerHTML = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

adicionarTarefa.addEventListener('click', function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);

}
);

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const botaoApagar = document.createElement('button');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'apagar essa tarefa');
  botaoApagar.innerText = 'apagar';
  li.appendChild(botaoApagar);

}

document.addEventListener('click', function (e) {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function carregarTarefas() {
  const tarefasString = localStorage.getItem('tarefas');
  const tarefasArray = JSON.parse(tarefasString);
  for (let tarefa of tarefasArray) {
    criaTarefa(tarefa);
  }
}

carregarTarefas();