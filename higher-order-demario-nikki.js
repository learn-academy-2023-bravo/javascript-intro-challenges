// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
//create func multiply, .map() through the array while returning the multiplied values
//to the new array
// const multiply = (array) => {return array.map((value) => value * 10)}
// console.log(multiply(arr1))


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]
//create func named oddArray, filter through array for values that are not
//evenly divisible by 2 and return that array
// const oddArray = (array) => {return array.filter((value) => value % 2 !== 0)}
// console.log(oddArray(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
//create func named letters, filter through array for only string characters
//convert new array to string and return that string
// const letters = (array) => {return array.filter((value) => typeof value  === 'string').join('')}
// console.log(letters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
//create func named filters, filter through array (removing unwanted values)
//return the new array
// const filters = (array) => {return array.filter((value) => value !== 0 && value!=='' && value !== null && value !== false)}
// console.log(filters(filterArrayValues))

// Create a function that takes in a string and returns a new string with all the vowels removed.
// const strings = "Javascript Is Awesome"
// // output: "jvscrpt s wsm"
//there were 2 attempts and the second works best
// // const noVowels = (array) => (array.split('').filter((value) => value !== ['a', 'e', 'i', 'o', 'u']))
//create func named removeVowels, convert string to array, filter characters that are found
// in the "variable array" regardless of its case, convert the array to a string and return that string
// const removeVowels = (str) => {return str.split('').filter(char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())).join('');}
// console.log(removeVowels(strings))


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3,]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
//create a func named noDupes that takes 2 parameters, concat the 2 paramters and filter
//using paramters <value> and <index>, if the value exists more than once in the 
//concatted array remove all other occurrences then return the new array
// const noDupes = (Array1, Array2) => 
//   {return Array1.concat(Array2).filter((value,index) => Array1.concat(Array2).indexOf(value) === index)}


// console.log(noDupes(arr1, arr2))