const persona = {
    nombre: 'Brian',
    apellido : 'lemus',
    edad: 45,
    direccion : {
        cuidad: 'new york',
        zip: 654545454,
        lat: 14.3232,
        lng: 34.959595,
    }

}

// para ver en consola los datos del objeto en estilo tabla
// console.table({
//     persona
// });

// operador spread (...)
const persona2 = {...persona};
persona2.nombre = 'prueba';

console.log({
    persona
});

console.log({
    persona2
});