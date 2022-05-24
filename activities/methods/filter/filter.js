function filtrarPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 === 0;
}

const meuArray = [1, 32, 54, 33, 64, 2, 3, 93, 45];

console.log(filtrarPares(meuArray));
