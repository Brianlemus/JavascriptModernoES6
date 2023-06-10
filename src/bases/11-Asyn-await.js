// async await 
// para poner la funcion asyncrona
// vamos a convertir la promesa del fetch a una funcion async await

const getImagen = async() => {

    try {

        const apiKey = 'r3c6qxXrPAcu29LJmrjH8BTUEtCeYQvZ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const { url } = data.images.original
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        // manejo del error aqui ya no se maneja el error como la promesa original
        console.log(error);
    }

   

}

getImagen();

// 

// 

// // esto se conoce como promesas en cadena
// // desestructuramos la data
// peticion
// .then( resp => resp.json())
// .then( ({data}) => {
//     // console.log(data.images.original.url); // entre la data buscamos lo que queremos
//     
//     

// })
// .catch( console.warn)