const name = "shivdutt karwa"
const repoCount = 50;

// console.log(name +   repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivduttkarwa-com');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
    console.log(gameName.indexOf('t'));
    console.log(gameName.substring(0, 4));
   
    const anotherString = gameName.slice(-8, 8);
    console.log(anotherString);

    const newStringOne = "    shivdutt karwa    ";
    console.log(newStringOne);
    console.log(newStringOne.trimEnd());
    console.log(newStringOne.trimStart());
    console.log(newStringOne.trim());
    const url = "https://shivduttkarwa.com/shivdutt%20karwa";
    console.log(url.replace('%20', '-'));
    console.log(url.includes('shivdutt'));
    console.log(gameName.split('-'));

