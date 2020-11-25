/*
arrays
*/

//what is an array?
//has[] brackets 
//can hold multiple data types
//arrays can list datatypes in an ordered, number way

let students = ['Tony', 'Marshall', 'Rays', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys: 0, 1, 2, ...
console.log(typeof students); //typeof doesn't tell me my variable is an array ---> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1];
console.log(`Hello ${name}, you look nice today.`);

//recall for loop

let food = ['pecan', 'shrimp', 'qusadilla', 'cheese cake', 'hotdog'];

for (f of food){
    console.log(f + 'is amazing!');
}

// //array methods
// food.push('pizza'); //added to the end of the array
// console.log(food);
// food.splice(1, 1, 'bananas'); // asks for an insertion point, how many things to remove, and what to add
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie');
// console.log(food);
// food.pop(); //removes the last element of an array
// console.log(food);

// food = food.slice(2, 5); // the first number is the first element to slice from the array, while the second number is to stop and not to be included.
// console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements
// and their index numbers

// food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);

})

let movies = ['300', 'snow white', 'phantom menace', 'watchmen', 'the sound of music'];

movies.push('the force awakens');
console.log(movies);

movies.splice(3, 1, 'The league of extra gentlment');
console.log(movies);

movies.forEach(movie => console.log(movie));

console.log(movies.length);


// lets do following with an array, we will check if we are working with an array
//flip the values within the array (what was in dex 4 is now in 0, 3, to 1, etc)
//using a method only, lets print the values of the newly arranged array

let arr = new Array[1, 2, 3, 4, 5];

if(arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(movie => console.log(movie));

}
