// Seleccionar el método GET
// Pasar la URL http://localhost:8080/movies


fetch("http://localhost:8080/movies")
.then((respuesta) => { // Parsear la respuesta a JSON
    return respuesta.json()
})
.then((data) => {
    console.log(data);
})