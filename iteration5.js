
//Iteration 5: Calcular promedio de strings
//Crea una función que reciba por parámetro un array, y cuando un valor number lo sume, y de lo contrario, cuenta la longitud del string y lo sume.

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
    
    let valueA = 0;
    
    let valueB = 0;

    for (let value of array) {
        
        let type = typeof value;

        if (type === "string") {
            valueA += value.length;
        } else if (type === "number"){
            valueB += value;
        };
    };

    return valueA + valueB / 2;
};

console.log("El promedio del array dado es", averageWord(mixedElements));