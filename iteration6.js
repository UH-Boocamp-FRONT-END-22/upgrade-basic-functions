//Iteration 6: Valores únicos
//Crea una función que reciba como parámetro un array
//y compruebe si existen elementos duplicados.
//en caso que existan los elimina para retornar un array sin elementos duplicados

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

let checked = [];

function removeDuplicates(array) {
  for (let index = 0; index < array.length; index++) {
    if (!checked.includes(array[index])) {
      checked.push(array[index]);
    }
  }
  return checked;
};

console.log("Este sería el array filtrado", removeDuplicates(duplicates));
