// const name = "Saurabh"
// const repoCount = 50
// console.log(`Hello my name is ${name} and my repo count is${repoCount}`);

const gameName = new String('Jaiswalking')
// console.log(gameName[0]);
// console.log(gameName.__proto__);



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


// Substring is negative value not allowed
const newString=gameName.substring(0,4)
console.log(newString);

// slice is negative value allowed
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// Trim concept
const newStringOne="  Saurabh  "
console.log(newStringOne.trim());
