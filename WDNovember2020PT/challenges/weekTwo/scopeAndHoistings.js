goodBye();
var hello = "hello";
console.log(hello);

function goodBye(){
    console.log("goodbye");
}

let name = "rob";
console.log(name);


//let does not get hoisted like a var

var coffeeType = "dark roast";

function exampleFunction(){
    var coffeeType = "vanilla roast";
    console.log(coffeeType);
}


exampleFunction();

console.log("Outside the function", coffeeType);

var x = "Perla"
function scope (){
    var x = "world";
    if(true == true){
        let x = "Hello"
        console.log("From if statement", x)
    }

    console.log("from function", x)
}
scope();
console.log("Outside the function", x);