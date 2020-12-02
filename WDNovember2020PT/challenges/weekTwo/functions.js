/* 
Functions:
- Javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression.

-Function declarations are hoisted in our code and run ONLY when we invoke them. 
so any function in our code sits and waits to be ran until we call it by name. 
Think of it as a student with his or her hand up, waiting to ask a question. 
That student does not ask the question until the teacher calls upon them.

-function expressions are not hoisted and are generally stored in variables.

-functions without names are known as anonymous functions.

*/

//function declaration and invoking it

function sayHello(){
    console.log("Hi");
}

sayHello();

//function expression

let greetings = function (){
    console.log("hello");
}

greetings();

/*
Parameters

- Think of parameters as a newly declared variable that we have not given a value to yet. 

    -The value that we pass into our function when we call the function to run(which is known as an argument)
    is the value that gets assigned to the parameter.

    =General naming convention for function parameters: the parameter should be names something related to the information we are passing into the function.
    If we're passing in an integer, we may name our parameter num or number.

    */



function myDog(husky) { //Husky is the parameter
    console.log(`My dogs name is ${husky}`)
}

myDog("Princess", "Mira"); //"Princess" is the argument
myDog("Luna");
myDog(3);

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, and ${borderCollie}`);
}

allMyDogs("mira", "luna", "charlie");

/*
Return

-functions can also manipulate the data sent to them, and return a new value

-Code below the return within the curly bracket does not get executed.
*/

function calculator(one, two, three){
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    let returnString = `The average weight is ${average}`
    return returnString;
}

let averageWeight = calculator(15, 60, 55);
console.log(averageWeight);

/*

Arrow Functions

-Arrow functions (or fat arrow functions) were introduced in ES6. They are basically just a more concise way to write function expressions - NOT declarations
    - This means that arrow functions do NOT get hoisted

- There are two types of arrow functions: concise body and block body
    - The return happens automatically with a concise body arrow function
    - The return does not happen automaticallly with a block body arrow function
*/

//Concise body

let speak = (name) => console.log(`${name} goes woof`);
speak("Luna");

let nameJoiner = (first, last) => `${first} ${last}`;
let fullName = nameJoiner("perla", "brown");
console.log(fullName);

//Block body 
let speak = () => {
    console.log(`${name} goes woof`);
}

let nameJoiner = (first, last) => {
    return `${first} ${last}`;
}

let fullName = nameJoiner("perla", "brown");
console.log(fullName)

// PRACTICE I
// Write a function that takes two parameters  (Length and Width) that returns
// the area of the rectangle.
// Create a variable named area1 and area2 that will call the Function and store its return
// console log the variables
// Example :  4 by 8 rectangle will give  32;

function areaOfRectangle(length, width){
    let area = length * width;
    return area
}

let area1 = areaOfRectangle(5,2);
let area2 = areaOfRectangle(10,2);
console.log(area1);
console.log(area2);

// Practice II

// Write a function that will convert dog years to human years
// Formula for conversion  - Human Age = (Dog Age -2) x 4 + 21


function humanAgeOfDog(dogYears){
    let humanAge = (dogYears - 2) * 4 + 21;
    return humanAge;
}

let age1 = humanAgeOfDog(2);
console.log(age1);
let age2 = humanAgeOfDog(7);
console.log(age2);
console.log(humanAgeOfDog(11));

function areaOfRectangle(length, width){
    let area = length * width;
    return area
}
console.log(areaOfRectangle(5, 3));


let area1 = areaOfRectangle(5,2);
let area2 = areaOfRectangle(10,2);
console.log(area1);
console.log(area2);
