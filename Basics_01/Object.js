// singleton


// Object Literals
const mySym = Symbol("key1")

const JsUser={
    name:"Saurabh",
    "full nmae":"Suarabh Jaiswal",
    [mySym]:"mykey1",
    age:24,
    location:"Jaipur",
    email:"jaiswal@gmail.com",
    isLoggedIn:false,
    lastLoginday:["Monday","Tuesday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full nmae"]);
// console.log(JsUser[mySym]);

JsUser.email="Suarbh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.Age=34
// console.log(JsUser);


JsUser.greeting=function(){
  console.log("Hello Js User");

}

console.log(JsUser.greeting());