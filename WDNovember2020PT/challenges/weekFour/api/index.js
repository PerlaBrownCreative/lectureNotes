console.log("hello");

const baseURL = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById('jokeButton');

jokeButton.addEventListener("click", fetchJokes);

function fetchJokes() {
    fetch(baseURL)
        .then((res) => res.json())
        .then(json => displayJoke(json.value));
}

function displayJoke(joke) {
    let jokeText = document.getElementById('joke');
    jokeText.innerText = joke;
}

//create and append


//Step One:  Using the base URL below, write a fetch that will console.log a random cat fact.
let baseURL = "https://meowfacts.herokuapp.com/"
fetch(baseURL)
.then(res =>res.json())
.then(json=>displayResults(json))
//Step 2:  Create a function that will allow us to display the results in the browser
function displayResults(json){
    console.log(json)
    let meowFacts = json.data[0]
    document.getElementById('catFacts')
    catFacts.innerHTML = meowFacts
}
