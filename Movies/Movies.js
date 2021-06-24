


document.getElementById("btnSearch").addEventListener("click",function (event) {
    event.preventDefault()
    // resetMovies()
    getMovie()

})

// const movieUrl = document.getElementById('imgUrl')
// const movieTitle = document.getElementById('movieTitle')
// const moviePlot = document.getElementById('moviePlot')
// const imdbRating = document.getElementById('imdbRating')


var count = 0

function getMovie() {
    var mname = document.getElementById("movieName").value
    var movie = mname.length > 0 ? mname : "Avengers"
    if (count > 0) {
        document.getElementById("Movies").innerText = ""
    }
    fetch(`http://www.omdbapi.com/?s=${movie}&apikey=7abd6720&plot=short`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            if (json.Response != "False") {
                // resetMovies()
                count++
                json.Search.forEach((Movie) => {
                    // console.log(Movie)
                    var col = document.createElement('div')
                    col.className = "col"
                    var div = document.createElement('div')
                    div.classList = "card h-100"
                    col.appendChild(div)

                    var img = document.createElement('img')
                    img.className = "card-img-top"
                    img.height = "250"
                    img.width = "200"
                    img.alt = "Image"

                    img.src = Movie.Poster
                    div.appendChild(img)

                    var divContent = document.createElement('div')
                    divContent.className = "card-body"

                    var movieNameh4 = document.createElement('h4')
                    movieNameh4.className = "card-title"

                    movieNameh4.textContent = Movie.Title

                    var plotPara = document.createElement('p')
                    plotPara.className = "card-text"

                    var rating = document.createElement('p')

                    fetch(`http://www.omdbapi.com/?i=${Movie.imdbID}&apikey=7abd6720`)
                        .then(response => response.json())
                        .then(json => {
                            plotPara.textContent = json.Plot
                            rating.textContent = `Rating : ${json.imdbRating}`
                        })

                    divContent.appendChild(movieNameh4)
                    divContent.appendChild(plotPara)
                    divContent.appendChild(rating)

                    div.appendChild(divContent)

                    document.getElementById("Movies").appendChild(col)
                })



                // console.log(movieName)
                // document.getElementById('Movies').style.display = "block"
                // document.getElementById('MoviesList').style.display = "none"
                // movieUrl.src = json.Poster
                // movieTitle.textContent = json.Title
                // moviePlot.textContent = json.Plot
                // imdbRating.textContent = "Rating : " + json.imdbRating



            } else {
                alert("Movie not found!!!!!!!!")
            }
        }).catch((err) => console.log(err))

}


// function resetMovies() {
//     var Movies = document.getElementById('Movies')
//     Movies.outerHTML = ""
// }