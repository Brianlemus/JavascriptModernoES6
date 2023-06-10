// desestructuracion
// asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    // rango: 'soldado'
}

// const { nombre, edad, clave, } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// desestruturamos el objeto y obtenemos unicamente lo que necesitamos utilizar
// tambien podemos agregar campos al objeto
// si rango no viene por ejemplo pone el valor pr defecto si no pone el que trae
// const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => {
//     console.log(nombre, edad, rango);
// }

// extrar objetos añadidos y extraer en constante
const retornaPersona = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nomnbreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const {nomnbreClave,anios, latlng: {lat, lng},} = retornaPersona(persona);
console.log(nomnbreClave, anios);
console.log(lat, lng);