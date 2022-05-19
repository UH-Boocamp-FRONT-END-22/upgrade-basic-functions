//Iteration 8: Contador de repeticiones
//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(array) {
  let counter = {};

  array.forEach(function (num) {
    counter[num] = (counter[num] || 0) + 1;
  });

  return counter;
}

console.log(
  "Este es el número de veces que se repite cada string en el array dado",
  repeatCounter(counterWords)
);
