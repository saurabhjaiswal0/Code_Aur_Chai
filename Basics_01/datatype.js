// Primitive Data type //

// 7 type :String, Number, Boolean, Null, Undefined, Symbol,BigInt

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outSideTemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);



// Refrence Type(Non Primitive)
//  Array ,Objects,Function

// const heros =["Shaktiman","Nagraj","Doga"]//Array
// let myObj={
//     name:Saurabh,
//     age:26,

// }

const myFunction=function(){
    console.log("Hello World");
}


// ####*************************************************####

// Stack(Primitive),Heap(Non-Primitive);

let myYoutubename = "jaiswalking"

let anothername = myYoutubename
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"Saurabh@ypl"
}

let userTwo = userOne

userTwo.email="jaiswalking"
console.log(userOne.email);
console.log(userTwo.email);