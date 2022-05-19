//Iteration 7: Buscardor de nombre
//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array.
//Comprueba si existe el elemento, en caso que existan, nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

let ourName = prompt(
  "Introduce el nombre que quieres buscar dentro del array: "
);

function finderName(array, nameAsked) {

  let search = nameAsked;

  for (search in array) {
    if (array.includes(nameAsked)) {
      console.log(`El nombre ${nameAsked} está incluido en el array`);
    } else {
      console.log(`El nombre ${nameAsked} no está incluido en el array`);
    }
  }

  //Una manera más simple de hacerlo...
  //return `El nombre ${search} ${array.includes(search) ? 'está' : 'no está'} en el array`;
}

finderName(nameFinder, ourName);
