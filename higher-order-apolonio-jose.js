// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

//Pseudo
// Create a function named arrayOne
// Input data: Arrays of numbers
// Returns a new array with numbers of arr1 multiplied by 10
// Use HOF .Map () 

// const arrayOne = arr1.map((value) =>{
//     return value * 10
// })

// console.log(arrayOne)

// // output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// const arr2 = [2, 7, 3, 5, 8, 10, 13]

// //Pseudo
// // Create a function named arrayTwo
// // Input arrays
// // Return a new array with only odd numbers.

// const arrayTwo = arr2.filter (value => value % 2 !== 0)

// console.log(arrayTwo)
// --> [7, 3, 5, 13]

// // output: [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// Pseudo Code
// Write a function named onlyLetters
// Data input type: arrays
// Create a varibale to store in letters
// Return a string with letters only
// Use .filter to filter letters
// Evaluate the data type of each element using typeof operator

// const onlyLetters = (array) => {
//     let letter = array.filter((value) => {
//         return typeof value === "string"
//     }) 
//     return letter.join("")
// }
// console.log(onlyLetters(comboArr))

// //--> nicework

// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// // output: [58, "abcd", true]


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]