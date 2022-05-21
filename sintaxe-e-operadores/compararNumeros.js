function comparar(n1, n2) {
  if (!n1 || !n2) return 'Defina dois números' 

  var iguais = 'não';
  var soma = n1 + n2;
  var somaDez = 'menor';
  var somaVinte = 'maior';

  if (n1 == n2) {
    iguais = 'são';
  }

  if (soma > 10) {
    somaDez = 'maior';
  }

  if (soma < 20) {
    somaVinte = 'menor';
  }

  return `Os números ${n1} e ${n2} ${iguais} iguais. Sua soma é ${soma}, que é ${somaDez} que 10 e ${somaVinte} que 20`;
}

console.log(comparar(1, 3))