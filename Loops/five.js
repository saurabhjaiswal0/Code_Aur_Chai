const coding=["Java","python","Cpp","Js"]

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// coding.forEach((item,index,arr)=>{
//        console.log(item,index,arr);
// })

const myCoding =[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },

    {
        languageName:"JAVA",
        languageFileName:"java"
    },

    {
        languageName:"Python",
        languageFileName:"py"
    },

    {
        languageName:"ReactJs",
        languageFileName:"rs"
    }
]
myCoding.forEach((item) =>{
    // console.log(item);
    console.log(item.languageFileName);
})


