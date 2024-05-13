
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
//     console.log("U");
// }
// sayMyName()

// function addTwoNumber(number1,number2){
//    console.log( number1+number2);
// }
// addTwoNumber(3,4)


// function addTwoNumber(number1,number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwonumber(3,5)
// console.log("Result :",result);

function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} is just logged in`
}
console.log(loginUserMessage());

