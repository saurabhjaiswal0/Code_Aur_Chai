const marvel_heros=["Shaktiman","Thor","IronMan"]
const dc_heros=["Spiderman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// **Output**//-->[ 'Shaktiman', 'Thor', 'IronMan', [ 'Spiderman', 'Flash', 'Batman' ] ]

marvel_heros.concat(dc_heros)
console.log(marvel_heros);

// **Output**//-->[ 'Shaktiman', 'Thor', 'IronMan', [ 'Spiderman', 'Flash', 'Batman' ] ]


const another_array =[1,2,[3,4,[5,6,[7,8,[8,9]]]]]
const real_another_array=another_array.flat(Infinity)
console.log( real_another_array);
// **Output**//-->[ 1, 2, 3, 4, 5, 6 ]


console.log(Array.isArray("Saurabh"));
console.log(Array.from("Saurabh"));
// **Output**//-->
// [
//   'S', 'a', 'u',
//   'r', 'a', 'b',
//   'h'
// ]