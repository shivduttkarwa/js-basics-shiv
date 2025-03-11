// Premitive data types
// String, Number, Boolean, Null, Undefined,
//  Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail; //undefined
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n;


// Reference data types(Non-Premitive)
// Object, Array, Function 

const heroes = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "shivdutt karwa",
    age: 38,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heroes);
console.log(typeof score);
console.log(typeof scoreValue);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);





