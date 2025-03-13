// Singeton

// object literals

const jsUser = {
    name: "shivdutt",
    "full name": "shivdutt karwa",
    [1]: "mykey1",
    age: 22,
    location: "jaipur",
    email: "shivduttkarwa@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])  
// console.log(jsUser["full name"])
// console.log(jsUser[1])

// jsUser.email = "shivdutt@google.com"

// Object.freeze(jsUser)
// jsUser.email = "shivdutt@chatgpt.com"

// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// jsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(jsUser.greeting());
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Shiv"));


  