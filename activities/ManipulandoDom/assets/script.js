let botao = document.querySelector('button');
let conteudo = document.querySelector('#container');
let rodape = document.querySelector('#rodape');
let darkMode = false;

botao.addEventListener('click', () => {
  if (darkMode === false) {
    botao.classList = 'bg-light';
    conteudo.classList = 'bg-dark';
    rodape.classList = 'bg-light';

    darkMode = true;
  } else {
    botao.classList = 'bg-dark';
    conteudo.classList = 'bg-light';
    rodape.classList = 'bg-dark';

    darkMode = false;
  }
});