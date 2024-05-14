const user={
    username:"Saurabh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage()
// user.username="Abhi"
// user.welcomeMessage()

// **********************************************//

// function chai(){
//     let username="Saurabh"
//     console.log(this.username);
// }
// chai()

// const chai=()=>{
//     let username="Saurabh"
//     console.log(this);
// }
// chai()


// ******************Explicit Return Function***************
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));

// ******************Implicit Return Function*********************
const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(3,4));




