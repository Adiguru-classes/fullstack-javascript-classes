let movies = [];


function addMovie() {

    let movieInput =
        document.getElementById("movieInput");

    let movie =
        movieInput.value.trim();


    if (movie === "") {

        alert("Please Enter Movie Name");

        return;
    }


    movies.push(movie);

    movieInput.value = "";

    displayMovies();
}



function displayMovies() {

    let movieList =
        document.getElementById("movieList");


    movieList.innerHTML = "";


    for (let i = 0; i < movies.length; i++) {


        movieList.innerHTML += `

            <li>

                <span>
                    ${movies[i]}
                </span>


                <div class="movie-buttons">


                    <button
                        class="edit"
                        onclick="editMovie(${i})">

                        Edit

                    </button>


                    <button
                        class="delete"
                        onclick="deleteMovie(${i})">

                        Delete

                    </button>


                </div>

            </li>

        `;

    }

}



function deleteMovie(index) {

    movies.splice(index, 1);

    displayMovies();
}



function editMovie(index) {

    let updatedMovie =
        prompt(
            "Enter New Movie Name",
            movies[index]
        );


    if (
        updatedMovie !== null &&
        updatedMovie.trim() !== ""
    ) {

        movies[index] = updatedMovie.trim();

        displayMovies();

    }

}



function searchMovies() {

    let searchText =
        document
            .getElementById("searchMovie")
            .value
            .trim()
            .toLowerCase();


    let movieList =
        document.getElementById("movieList");


    movieList.innerHTML = "";


    for (let i = 0; i < movies.length; i++) {


        let movieName =
            movies[i].toLowerCase();


        if (movieName.includes(searchText)) {


            movieList.innerHTML += `

                <li>

                    <span>
                        ${movies[i]}
                    </span>


                    <div class="movie-buttons">


                        <button
                            class="edit"
                            onclick="editMovie(${i})">

                            Edit

                        </button>


                        <button
                            class="delete"
                            onclick="deleteMovie(${i})">

                            Delete

                        </button>


                    </div>

                </li>

            `;

        }

    }

}



function hideMovies() {

    let movieList =
        document.getElementById("movieList");


    movieList.style.display = "none";

}



function showMovies() {

    let movieList =
        document.getElementById("movieList");


    movieList.style.display = "block";


    displayMovies();

}