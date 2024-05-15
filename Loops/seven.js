const myNums = [1,2,3]

const myTotal = myNums.reduce(function(accumlator,currentval){
    console.log(`accumlator:${accumlator } and currentval:${currentval}`)
    return accumlator + currentval
},0) 
console.log(myTotal);