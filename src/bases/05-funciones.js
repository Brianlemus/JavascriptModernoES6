// funciones en js

// funcion 1
// function saludar(nombre) {
//     return `Hola, ${nombre}`
// }



// de esta manera no es reconmendable
// por con facilidadad se puede sustituir la funcion 1
// saludar = 30;
// console.log(saludar);

// console.log( saludar('goku'));

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, mundo`;

console.log(saludar2);
console.log(saludar3('vegeta'));
console.log(saludar4());

// funcion return fase 1 normal
// const getUser = () => {
//     return {
//         uid: 'ABC',
//         username: 'paso'
//     }
// }

// fase 2 return de funcion en objeto
const getUser = () =>
    ( {
        uid: 'ABC',
        username: 'paso'
    })

console.log( getUser());

// Ejercicio #1
// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABCDEF',
//         username : nombre,
//     }
// }

// return implicito en función flecha
const getUsuarioActivo = (nombre) =>
    ( {
        uid: 'ABCDEF',
        username : nombre,
    })

const usuarioActivo = getUsuarioActivo('Brian Lemus');
console.log(usuarioActivo);