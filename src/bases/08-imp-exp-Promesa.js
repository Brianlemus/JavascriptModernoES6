// Este archivo es un ejemplo para exportar 
// datos a la promesa
// import heroes, {owners} from '../data/heroes';
import heroes from '../data/heroes';

// funcion find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(getHeroeById(2));

// funcion para filtrar po campo con filtrer para poder filtrar dentro de un arreglo y traer las coincidencias
export const getHereosByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
// console.log(getHereosByOwner('Marvel'));
// console.log(owners);
///////////////////////// MULTIPLES EXPORTACIONES Y EXPORTACIONES POR DEFECTO /////////////////
// console.log(getHereosByOwner('Marvel'));
// console.log(owners);