// Documentacion sobre promesas y resolucion de dudas.
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

import { getHeroeById } from "./bases/08-imp-exp-Promesa";

// Primer ejemplo de promesas

// const promesa = new Promise((resolve, reject) => {
// setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe); // para enviar la respuesta al then.
//     // reject('No se pudo encotrar el dato') // es para capturar un error y manejar el error en el catch
// }, 2000);

// });



// promesa.then ( (heroe) => {
//     console.log('Then de la promesa', heroe);
// })
// .catch( err => console.warn(err));

// segundo ejemplo de promesas.
const getHeroeByIdAsync = ( id ) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe); // para enviar la respuesta al then.
            }else{
                reject('No se pudo encotrar el dato') // es para capturar un error y manejar el error en el catch
            }
        }, 2000);
        
    });

}

getHeroeByIdAsync(4)
// .then( heroe => console.log('Heroe', heroe))
// .catch( err => console.warn(err))

// si quieren capturar el puro valor que devuelve la promesa para mandar en alguna otra funcion por variable
.then( console.log)
.catch( console.warn)