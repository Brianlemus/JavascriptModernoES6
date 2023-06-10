const activo = true;

let mensaje = '';

if (activo) {
    mensaje = 'activo';
}else{
    mensaje = 'Inactivo'
}

console.log(mensaje);

// forma ternaria
const mensajeTernario = (!activo) ? 'Activo' : 'Inactivo';
console.log(mensajeTernario);

// forma mas corta de hacer un if
// con esta forma es para decir que si es cumple la condicion hace lo que le agregas
const mens = activo && 'Activo';
console.log(mens);