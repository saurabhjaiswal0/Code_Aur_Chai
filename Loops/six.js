// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num) =>num >4)
// console.log(newNums);
// ----->Output=[ 5, 6, 7, 8, 9, 10 ]

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums =myNums.filter((num)=>{
//     return num >4
// })
// 

const myNumers = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNumers.map((num)=>{
    return num +10
})
console.log(newNums);