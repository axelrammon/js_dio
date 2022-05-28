let botao = document.querySelector('button');
let conteudo = document.querySelector('#container');
let rodape = document.querySelector('#rodape');

let estiloBtn = true;

botao.addEventListener('click', () => {
  if (estiloBtn === true) {
    botao.style.backgroundColor = '#ecf0f1';
    botao.style.color = '#121212';

    conteudo.style.backgroundColor = '#121212';
    conteudo.style.color = '#ecf0f1';

    rodape.style.backgroundColor = '#ecf0f1';
    rodape.style.color = '#121212';

    estiloBtn = false;
  } else {
    botao.style.backgroundColor = '#121212';
    botao.style.color = '#ecf0f1';

    conteudo.style.backgroundColor = '#ecf0f1';
    conteudo.style.color = '#121212';

    rodape.style.backgroundColor = '#121212';
    rodape.style.color = '#ecf0f1';

    estiloBtn = true;
  }
});