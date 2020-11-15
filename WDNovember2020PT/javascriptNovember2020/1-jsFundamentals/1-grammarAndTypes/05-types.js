//Boolean
var on = true;
console.log(on);

let off = false;
console.log(off);

//boolean can represent; true/false, yes/no, on/off, 0/1

//undefined

/*
undefined usually means a variable has been declared, but not assigned a value
*/

let grass;
console.log(grass);

var undef = undefined;
console.log(undef);

//Null

/*
means a variable has been declared and assigned a value of null
*/

var empty = null
console.log(null);

/*
Null and undefined both represent variables with no value inside. Think of it this way, null value are for gag gifts. Undefined values are gifts given when person has forgotten gift inside*/

//Numbers
let myLiteralAge = 90
console.log(myLiteralAge);

let precise = 999999999999;
console.log(precise);

let rounded = 99999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.2;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);


//strings
//string is any value within quotes; JS spits out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

//string concatentation vs addition
let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

let third = 1050 + 'abcde';
console.log(third);
console.log(typeof third);

//Interpolation
//lets you use strings with dynamic content (they require backticks)

//Example 1:
let age =32;
let string = `my age is: ${age}`
console.log(string);

//Objects

/*
What is an object?

An object is a container that stores property names and their values (it can hold mutilple data types)

Denoted by {}
Have keys and values--color (key): 'blue' (value), separated with a colon, each key-value pair is seprated with a comma.


*/

let hulk = {
    color: 'green', 
    age: 42,
    isStrong: true
}

console.log(hulk);
console.log(hulk.color);
console.log(typeof hulk);


//Arrays
//Arrays store multiple values in an ordered way. 
//They too, hold multiple data types. Denoted by [] has values ('blue, 'green', 'yellow'), seprated by commas

var stepsToBrushTeeth = ['uncap toothpaste', 'squeeze toothpaste', 'rinse brush', 'brush']
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[01]);

// array indexing starts at 0.






