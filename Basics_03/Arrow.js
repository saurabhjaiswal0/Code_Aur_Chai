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
console.log(this);