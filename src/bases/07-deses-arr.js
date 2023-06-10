const { useState } = require("react");

const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, ,p3] = personajes;
console.log(p3);
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const retornaArreglo = () => {
    return ['ABC', 123]
}

const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);


// tarea
const datosPersonajes = ( valor ) => {
    return [ valor, () => { console.log('Hola Mundo')}]
}

const arr = datosPersonajes('goku');
arr[1]();
// console.log(arr);

const [nombre, setNombre] = useState ('goku');
console.log(nombre);
setNombre();