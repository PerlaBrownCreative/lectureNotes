let group = [ {
    name: "Perla",
    age: 38,
    graduatedHSYear: 2001,
    pets: true,
    petNames: ["Mika", "BellaBob"],
    mostRecentMovieWatched: "Queen's Gambit",
    carsOwned: [{
        make: "Honda",
        model: "Pilot"}],  
    favoritePotato: "French Fries"
},

 { 
    name: "Lindsay",
    age: 33,
    graduatedHSYear: 2005,
    pets: true,
    petNames: ["Pepper", "Boyd", "Piper"],
    mostRecentMovieWatched: "Haunting of Bly Manor",
    carsOwned: [{
        make: "Honda",
        model: "Odyssey"}],
    favoritePotato: "French Fries"
    },

{
    name: "Abigail",
    age: 26,
    graduatedHSYear: 2012,
    pets: true,
    petNames: ["Chester", "Mischief", "Boots", "Black Kitten", "Doom", "Olivia", "Tulip", "Tipsy", "C", "Fiona", "Gypsy", "CeeLo", "Walter", "Paco"],
    mostRecentMovieWatched: "Mr. Robot",
    carsOwned: [{
        make: "Chevrolet",
        model: "Equinox"}],
    favoritePotato: "Mashed"
},
    {
        name: "Shannon",
        age: 56,
        graduatedHSYear: 1982,
        pets: true,
        petName: ["Lucy", "Emilee"],
        mostRecentMovieWatched: "Greyhound",
        carsOwned: [{
            make:"Subaru",
            model:"Forester"}],
        favoritePotato: "mashed"
    }]

    let mostRecentMovie = [];

    for(let i = 0; i< group.length; i++){
        console.log(group[i].mostRecentMovieWatched);
    }

    // let movieArr = [];

    // for (person of webDevGroup){
    //   movieArr.push(person.mostRecentMovie);
    // }
    // console.log(movieArr);

//     for (student of studentData) {
//     moviesWatched.push(student.mostRecentMovieWatched)
// }
// console.log(moviesWatched);

// gitToKnowMe.forEach(movie =>{
//     newArray.push(movie.mostRecentMovie)
// });

// console.log(newArray);