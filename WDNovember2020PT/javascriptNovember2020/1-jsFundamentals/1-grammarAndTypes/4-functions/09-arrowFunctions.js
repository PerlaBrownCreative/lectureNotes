//normal function declaration
function coffee(){
    return ' coffee is good';
}

//normal function expression unnamed functions 
let tea = function (){
    return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are always anonymous
//arrow function expression

let hotChocolate = () => {
    return ' hot choccolate is king';
}

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cats and ${puppies} dogs`};
console.log(animals());
console.log(animals(3,0));

//concise vs. block body
//concise body
let apples = (x) => `there are ${x} apples`;
console.log(apples(10));

//block body
let bananas = (x) => {
    return `There are ${x} bananas`;

}
console.log(bananas(5));

//return must be explicitly written in a block-body arrow function

let func = () => 'hi';
console.log(func());