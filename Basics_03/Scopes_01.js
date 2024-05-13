let a=300
if(true){
    let a=10
    const b=20
    //  var c=30----> var is any time rum on programing code 
    //  console.log("Inner:",a);
}
for(let i=0;i<Array.length;i++){
    const element=Array[i];
}
// console.log(a);
// console.log(b);

// ***********************************
function one(){
    const username="Saurabh"
     function two(){
        const website="youtube"
        console.log(username);
     }
    //  console.log(website);
     two()
}
// one()

if(true){
    const username="Saurabh"

    if(username==="Saurabh"){
        const website=" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// **************************Intresting*******************************
console.log(addOne(5));
function addOne(num1){
    return num1+1
}

addTwo(5)
const addTwo=function(num){
    return num+2
}



