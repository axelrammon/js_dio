let btnAdd = document.querySelector('#adicionar');
let ul = document.querySelector('#ul_lista');
let text = document.querySelector('#text');

var todos = JSON.parse(localStorage.getItem('tarefas_lista')) || [];

function listarTodos() {
  ul.innerHTML = '';

  for (todo of todos) {
    let divTodo = document.createElement('div');
    divTodo.setAttribute('class', 'tarefa');
    let novaTodo = document.createElement('li');
    let textoTarefa = document.createTextNode(todo);
    console.log(textoTarefa)

    let buttonDelete = document.createElement('button');
    buttonDelete.className = 'btnDelete';
    let nomeDelete = document.createTextNode('Excluir');
    buttonDelete.appendChild(nomeDelete);

    let pos = todos.indexOf(todos);
    buttonDelete.setAttribute('onclick', 'deletarTarefa('+ pos +')');

    novaTodo.appendChild(textoTarefa);
    novaTodo.appendChild(buttonDelete);

    if (textoTarefa.length > 0) {
      divTodo.appendChild(novaTodo);
      ul.appendChild(divTodo);
    }
   
  }
  
}

listarTodos();

btnAdd.onclick = () => {
  var novaTodo = text.value;

  todos.push(novaTodo);
  text.value = '';
  listarTodos();
  saveToStorage();
}

function deletarTarefa(pos) {
  todos.splice(pos, 1);
  listarTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('tarefas_lista', JSON.stringify(todos));
}

