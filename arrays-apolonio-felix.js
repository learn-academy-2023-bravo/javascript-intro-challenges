let groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.
groceryList.push ("soda")
console.log(groceryList)
//[ 'chips', 'dip', 'cookies', 'soda' ]


// Write the code that will add "granola" to the end of array without altering the original array.
let newList = groceryList.concat("granola")
console.log(newList)
//[ 'chips', 'dip', 'cookies', 'soda' ]
//[ 'chips', 'dip', 'cookies', 'soda', 'granola' ]


// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(newList.slice(0,2))
//[ 'chips', 'dip' ]


// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(newList.slice(0,2).concat("beans"))
//[ 'chips', 'dip', 'beans' ]

//--------------------------------------------------------------------------------


var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)
// [ 0, 2, 4, 6, 8, 10 ]


// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
console.log(numbers)
// [
//     0,  2,  4, 6,
//     8, 10, 12
// ]
  
// Write the code that will remove the first number from the array.
console.log(numbers.shift())
console.log(numbers)
// [ 2, 4, 6, 8, 10, 12 ]

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
let newNumber = [0].concat(numbers)
console.log(newNumber)
//  [
//     0,  2,  4, 6,
//     8, 10, 12
//   ]