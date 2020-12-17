const baseURL = 'https://rickandmortyapi.com/api/character/';

let div1 = document.createElement('div');
div1.setAttribute("class", "pic1")
document.body.appendChild(div1);

let div2 = document.createElement('div');
div2.setAttribute("class", "pic2")
document.body.appendChild(div2);

fetch(baseURL)
    .then(function (result) {
        return result.json();
    })
    .then(function (json) {
        console.log(json);
        displayResults(json);
    });


function displayResults(json){
    console.log(json)

    let img1 = json.results[0].image;
    console.log(img1);
    let rick = document.createElement('img');
    div1.appendChild(rick);
    rick.src = img1;  
    
    let img2 = json.results[1].image;
    console.log(img2);
    let morty2 = document.createElement('img');
    div2.appendChild(morty2);
    morty2.src = img2;
  
}

