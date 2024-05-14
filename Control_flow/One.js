// const tenprature=41
// if(tenprature===41){
//     console.log("temprature is less than 50")
// }
// else{
//     console.log("Greater Than 40");
// // }

// **********************************************

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);

// *****************************************************

// const balance =1000
// if(balance<500){
//     console.log("less than 500");

// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("greter than 1000");
// }

// **********************Multiple condition check****************
const userLoggedIn=true
const debitCard=true
const loggedInGoogle=false
const loggedInFromEmail=true
if( userLoggedIn && debitCard ){
    console.log("Allow to course");
}
if( loggedInGoogle || loggedInFromEmail ){
    console.log("User logged in");
}

