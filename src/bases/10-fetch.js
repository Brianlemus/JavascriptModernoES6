// documentacion sobre fetch api : 
    // https://developer.mozilla.org/es/docs/Web/API/Fetch_API

//  gyphy es para traer gif animados para consumir y mostrar en pantalla
//  ocuparemos crear una cuenta para poder obtener un autenticador
//  siempre cuando creen la app elegir el API porque trabajaremos con endpoint no con un SDK
// https://developers.giphy.com/

const apiKey = 'r3c6qxXrPAcu29LJmrjH8BTUEtCeYQvZ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// esto se conoce como promesas en cadena
// desestructuramos la data
peticion
.then( resp => resp.json())
.then( ({data}) => {
    // console.log(data.images.original.url); // entre la data buscamos lo que queremos
    const { url } = data.images.original

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );

})
.catch( console.warn)