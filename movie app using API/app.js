let api = "https://www.omdbapi.com/?apikey=a0614e38&t="




let title = document.querySelector("#title");
let disc = document.querySelector("#disc");
let actors = document.querySelector("#actors");
let directors = document.querySelector("#directors");
let awards = document.querySelector("#awards");
let collection = document.querySelector("#collection");
let ln = document.querySelector("#ln");
let ratings = document.querySelector("#rating");
let genre = document.querySelector("#genre");
let poster = document.querySelector("#poster");
let container = document.querySelector('#container');
let error = document.querySelector('#error');
let suggestion = document.querySelector('.suggestion');
container.classList.add('hidden');



function search() {
    let movieInput = document.querySelector('#movieName');
    let query = api + movieInput.value
    fetch(query).then(data => data.json()).then(data => {
        error.innerText = ""
        if (data.Error === "Movie not found!") {
            error.innerText = "Movie Not Found!"

        }

        else {
            container.classList.remove('hidden')
            title.innerText = data.Title;
            disc.innerText = data.Plot;
            actors.innerText = data.Actors;
            directors.innerText = data.Director;
            awards.innerText = data.Awards;
            collection.innerText = data.BoxOffice;
            ln.innerText = data.Language;
            ratings.innerText = data.imdbRating;
            genre.innerText = data.Genre;
            poster.src = data.Poster;
            if (data.imdbRating > 7) {
                suggestion.innerText = "Woth watching"
            } else if (data.imdbRating > 6 && data.imdbRating > 7) {
                suggestion.innerText = "Can Watch";

            } else {
                suggestion.innerText = "Its Time Waste";

            }

        }
    })

}