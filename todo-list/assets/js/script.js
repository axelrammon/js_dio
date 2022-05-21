let btnAdd = document.querySelector('#adicionar');
let ul = document.querySelector('#ul_lista');
let text = document.querySelector('#text');

btnAdd.addEventListener('click', () => {

  if (text.value != '') {
    let div_tarefas = document.createElement('div');
    let li = document.createElement('li');
    let caixa = document.createElement('input');
    let labelCaixa = document.createElement('label');
    let auxiliar = text.value;
  
    // labelCaixa.for = 'caixa'
    labelCaixa.textContent = auxiliar;
    caixa.type = 'checkbox';
    caixa.name = 'caixa';
    div_tarefas.className = 'div_tarefas';
    caixa.className = 'caixa';
    labelCaixa.className = 'label_caixa';
  
    ul.appendChild(div_tarefas);
    div_tarefas.appendChild(li);
    li.appendChild(caixa);
    li.appendChild(labelCaixa);
  
    text.value = '';

  }
  
});



