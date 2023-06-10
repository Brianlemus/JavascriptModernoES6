/////////////////////////////IMPORT Y EXPORT Y FUNCIONES COMUNES DE ARREGLOS. //////////////////////////////////

// import { heroes } from './data/heroes';
// import {heroes} from './data/heroes'
// console.log(heroes);

import heroes, {owners} from '../data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find((heroe) =>{
//         if (heroe.id === id) {
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

// funcion find
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

console.log(getHeroeById(2));

// funcion para filtrar po campo con filtrer para poder filtrar dentro de un arreglo y traer las coincidencias
const getHereosByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
// console.log(getHereosByOwner('Marvel'));
// console.log(owners);
///////////////////////// MULTIPLES EXPORTACIONES Y EXPORTACIONES POR DEFECTO /////////////////
console.log(getHereosByOwner('Marvel'));
console.log(owners);