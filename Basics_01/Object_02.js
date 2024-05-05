// const tinderUser =new Object()---->Singleton 

const tinderUser ={}
tinderUser.id="12345"
tinderUser.name="saurabh"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    fullName:{
       userName:{
        firstName:"Saurabh",
        lastName:"jaiswal"
       }
    }
}

console.log(regularUser.fullName.userName.lastName);

// *******************************************
const obj1={1:"q",2:"b"}
const obj2={3:"q",4:"b"}

const obj3={...obj1,...obj2}
console.log(obj3);

// output---->{ '1': 'q', '2': 'b', '3': 'q', '4': 'b' }