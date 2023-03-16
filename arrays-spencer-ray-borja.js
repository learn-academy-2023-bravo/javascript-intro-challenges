// var groceryList = ["chips", "dip", "cookies"]
// console.log(groceryList)

// // Write the code that will add "soda" to the end of the original array.

// groceryList.push("soda")
// console.log(groceryList)

// // Write the code that will add "granola" to the end of array without altering the original array.

// let newGroceryList = groceryList.concat(['granola'])
// console.log(newGroceryList)
// console.log(groceryList)

// // Write the code that will return a subset of the array containing only "chips" and "dip".

// let slicedGroceryList = groceryList.slice(0,2)
// console.log(slicedGroceryList)

// // Write the code that will add "beans" to the "chips" and "dip" array.

// slicedGroceryList.push("beans")
// console.log(slicedGroceryList)

var numbers = [2, 4, 6, 8, 10]

// Write the code that will add the number 0 to the beginning of the array.

numbers.unshift(0)
console.log("unshift to add 0 to the be at the beginning ofr hte array:", numbers)

// Write the code that will add the number 12 to the end of the array.

numbers.push(12)
console.log("push 12 to end of the array:", numbers)

// Write the code that will remove the first number from the array.

let shiftTest = numbers.shift()
console.log("removing the first number from the array (original array):", numbers)
console.log( shiftTest)

// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)

let newNumbers = [0].concat(numbers)
console.log(newNumbers)
console.log(numbers)


var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join(""))

// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)

// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))

// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))