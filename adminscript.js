function printMoviesList () {;
    fetch("https://localhost:8080/movies")
    .then((respuesta) => {
    return respuesta.json ()
    })

.then((moviesData) => {
    console.log(moviesData)

    let moviesListElement = document.getElementById('movies');

    for (let i = 0; i < moviesData.length; i++) {

        let nuevoElementoHtml = 
        <div class="movie">
        <h1 style="color: red;">${moviesData[i].title}</h1>
        <p style="color: white;">${moviesData[i].title}</p>
        </div>

        moviesListElement.innerHTML += nuevoElementoHtml;
    }
})}

function printMovies(data) {

    data.forEach(movie => {

        let moviesListElement = document.getElementById("main");

        let ulElement = document.createElement("div");
        ulElement.setAttribute('class','card');

        moviesListElement.appendChild(ulElement);

    }
        )
}