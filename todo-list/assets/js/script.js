let btnAdd = document.querySelector('#adicionar');
let ul = document.querySelector('#ul_lista');
let text = document.querySelector('#text');

btnAdd.addEventListener('click', () => {

  let li = document.createElement('li');
  let caixa = document.createElement('input');
  let labelCaixa = document.createElement('label');
  let auxiliar = text.value

  // labelCaixa.for = 'caixa'
  labelCaixa.textContent = auxiliar
  caixa.type = 'checkbox'
  caixa.name = 'caixa'
  caixa.id = 'caixa'

  ul.appendChild(li)
  li.appendChild(caixa)
  li.appendChild(labelCaixa)

  text.value = ''

});
