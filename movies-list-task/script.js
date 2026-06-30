let movies = [];

function addMovie() {

    let movieInput = document.getElementById("movieInput");//getting the entire movieinput from ui

    let movie = movieInput.value.trim();//trim if user sends extra spaces between in the text

    if(movie === "") {
        alert("Please Enter Movie Name");//if user enters empty inout give him alert
        return;
    }

    movies.push(movie);//pushing or adding user added movie into movies[] array

    movieInput.value = "";//after adding mobvie input becoems empty

    displayMovies();//we are calling diaoplaymovies() function here to  diaplay all the movies of an arary
}

function displayMovies() {

    let movieList = document.getElementById("movieList");//storing the ul element tag in movielist variable

    movieList.innerHTML = "";//ot removes old list and adds total arrays lista gaoin on every add 

    for(let i = 0; i < movies.length; i++) { //it iterates all the movies froma an movies array

        movieList.innerHTML += `
        
        <li>

            <span>${movies[i]}</span>  
            
            <div class="movie-buttons">

                <button class="edit" onclick="editMovie(${i})">
                    Edit
                </button>

                <button class="delete" onclick="deleteMovie(${i})">
                    Delete
                </button>

            </div>

        </li>

        `;
    }

}

function deleteMovie(index){

    movies.splice(index,1);

    displayMovies();

}

function editMovie(index){

    let updatedMovie = prompt("Enter New Movie Name");

    if(updatedMovie !== null && updatedMovie.trim() !== ""){

        movies[index] = updatedMovie;

        displayMovies();

    }

}

















































function searchMovie(){

    let searchValue =
    document.getElementById("searchMovie")
    .value
    .toLowerCase();

    let items =
    document.querySelectorAll("#movieList li");

    for(let i=0;i<items.length;i++){

        let movieName =
        items[i]
        .querySelector("span")
        .innerHTML
        .toLowerCase();

        if(movieName.includes(searchValue)){

            items[i].style.display = "flex";

        }
        else{

            items[i].style.display = "none";

        }

    }

}

function hideMovies(){

    document.getElementById("movieList").style.display = "none";

}

function showMovies(){

    document.getElementById("movieList").style.display = "block";

}