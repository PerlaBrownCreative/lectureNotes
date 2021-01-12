let allMovieData;

document.addEventListener('DOMContentLoaded', async () => {
    await getFilmData();
    await movieOptionTags(allMovieData);

    const selectTag = document.querySelector('select');

    selectTag.onchange = () => {
        for (let i = 0; i < allMovieData.length; i++){
            if (allMovieData[i].title === selectTag.value){
                selectedMovieDetails(allMovieData[i]);
                return;
            }
        }
    };

    console.dir(selectTag);
    console.log(allMovieData);
})

const getFilmData = async() => {
    let url = 'https://ghibliapi.herokuapp.com/films';
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            allMovieData = data;
        })
}

const movieOptionTags = (movieObj) => {
    for (let i = 0; i < movieObj.length; i++) {
        let optionTag = document.createElement('option')
        optionTag.value = movieObj[i].title;
        optionTag.innerText = movieObj[i].title;
        document.querySelector('#select-movies').appendChild(optionTag);
    }
}

const selectedMovieDetails = (selectedMovie) => {
    const title = document.createElement('h4')
    const director = document.createElement('h6')
    const description = document.createElement('p')
    
    

    title.innerText = selectedMovie.title;
    director.innerText = selectedMovie.director;
    description.innerText = selectedMovie.description;
    

    const movieDetailTag = document.querySelector('#movie-details');
    movieDetailTag.innerHTML = '';

    movieDetailTag.appendChild(title)
    movieDetailTag.appendChild(director)
    movieDetailTag.appendChild(description)
    

}



