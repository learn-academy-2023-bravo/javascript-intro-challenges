// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// const multiply = (array) => {return array.map((value) => value * 10)}

// console.log(multiply(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// const onlyOdds = (array) => {return array.filter((value) => value % 2 !== 0)}
// console.log(onlyOdds(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// const letters = (array) => {return array.filter((value) => typeof value === 'string').join('')}
// console.log(letters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
// const filterThings = (array) => {
//   return array.filter((value) => value !== false && 
//   value !== null && 
//   value !== 0 && 
//   value !== '')
// }
// console.log(filterThings(filterArrayValues))

// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// output: "jvscrpt s wsm"
const noVowels = (string) => { return string.split('').filter((value) =>value !== value.split('').includes('aeiou'))}
console.log(noVowels(str))

