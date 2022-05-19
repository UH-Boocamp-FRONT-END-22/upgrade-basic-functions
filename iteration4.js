//Iteration 4: Calcular el promedio
//Calcular un promedio a través del array dado

const numbers = [12, 21, 38, 5, 45, 37, 6];

let suma = 0;

let contador = 0;

function average(arrayNum) {
  for (const iterator of arrayNum) {
      suma += iterator;
      contador++;
  }

  return suma / contador;

};

console.log("El promedio del array es", average(numbers));
