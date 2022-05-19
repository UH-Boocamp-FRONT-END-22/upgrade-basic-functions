
//Iteration 2: Buscar la palabra más larga
//Completa la función que tomando un array de strings como argumento, devuelva el más largo, en caso de que dos strings tenga la misma longitud, deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(strings) {
    let longest = strings[0];

    for(let index = 1; index < strings.length; index++){
        if (strings[index].length > strings.length) {
            longest = strings[index];
        };
    };

    console.log("La palabra más larga del array es", longest); 
};

findLongestWord(avengers);