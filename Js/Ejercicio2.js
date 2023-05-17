/* Escribe una función llamada mayorArray() que reciba un array de números enteros como parámetro y retorne el número mayor del array.
Dentro de la función, debes utilizar los siguientes ciclos:
Un ciclo for para recorrer el array y comparar cada elemento con el número mayor encontrado hasta el momento.
Un ciclo while para imprimir cada elemento del array.
Un ciclo do-while para contar la cantidad de números impares que tiene el array.
La función debe cumplir con los siguientes requisitos:
Debe recibir un array como parámetro y retornar un número entero.
Si el array está vacío, la función debe retornar el valor null.
Si el array tiene un solo elemento, la función debe retornar ese elemento.

La función debe utilizar un ciclo for para recorrer el array y encontrar el número mayor.
La función debe utilizar un ciclo while para imprimir cada elemento del array en la consola.
La función debe utilizar un ciclo do-while para contar la cantidad de números impares que tiene el array.
La función no debe modificar el array original ni utilizar funciones de orden superior como forEach, map, filter, etc
*/
let array = [1,5,6,8,10,4,11];

function mayorArray(array) {
    let mayor="";

    for(i=0; i< array.length; i++){
        if(array[i]>mayor)
        mayor = array[i];
    
        }
return mayor;
    }

console.log(mayorArray(array))

console.log("********division de partes*****")

let indice =0;

    while( indice < array.length){
        console.log(array[indice]);
        indice++;
    }


    console.log("********division de partes*****")


    let impares = 0;
    let j = 0;
    
    do {
        if (array[j] % 2 !== 0) {
            impares = array[j];
        } 
        console.log(impares);
        j++;
    } while (j < array.length);
