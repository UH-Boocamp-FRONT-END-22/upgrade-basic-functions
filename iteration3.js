
//Iteration 3: Calcular la suma
//Calcular una suma puede ser tan fácil como iterar sobre un array y sumar cada uno de los elementos.
//Implementar la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numArray) {
    
    let sum = 0;

    for (index = 0; index < numArray.length; index++){
        sum += numArray[index];
    }

  return sum;

}

console.log("El resultado de la suma de todos los números del array es", sumAll(numbers));