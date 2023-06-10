// template sting
const nombre = 'Brian';
const apellido = 'Lemus';

// const nombreCompleto = nombre + ' '  + apellido;

// ventajas de los template string es que todo lo que este dentro de esa manera se presentara
const nombreCompleto = ` 
${nombre} 
${apellido} 
`;
console.log(nombreCompleto);

// function getSaludo() {
//     return 'Hola mundo';
// }

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `este es un texto : ${getSaludo(nombre)}`);