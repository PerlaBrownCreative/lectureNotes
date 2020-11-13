//let myString = "This is a string";
//let myNumber = 10;
//let myBoolean = true;
//let myArray = [10, "string", []];
//let myObject = {firstKey: "a string"};
//let myUndefined = undefined;
//let myNull = null;

//console.log(typeof myBoolean);


let myFather = {
    color: "tan",
    Age: 60,
    isStrong: true,
    height: null,

}

//console.log(myFather.color);
//console.log(typeof myFather.color);

let value = typeof myFather.color

if (value === "string"){
    console.log("The value is a string");
} else if (value === "number"){
    console.log("The value is a number");
} else if (value === "boolean"){
    console.log("The value is a boolean");
} else if (value === "object"){
    console.log("The value is an object");
} else {
    console.log("What are you?")
}
