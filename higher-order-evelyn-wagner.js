// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.

// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// This is another way to get output:
// for(let index = 0; index <arr1.length; index++){
//     console.log(arr1[index]*10)
// }

// const multiplyByTen = arr1.map((value) => {
//   return value *10
// })
// console.log(multiplyByTen)

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // // output: [7, 3, 5, 13]

// const onlyOdd = (array) => {
//   return array.filter((value) => {
//     if(value % 2 !== 0){
//       return "odd"
//     }
//   })
// }
// console.log(onlyOdd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

const filterLetters = (arr) => {
  return arr.filter(char => typeof char === 'string').join("")
}
const lettersOnly = filterLetters(comboArr)

console.log(lettersOnly)

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// Pseudo code:
// input - an array, of mixed data types
// output - values that are not false, null, 0 or blank

const arrayWithout = (array) => { 
  let result = array.filter((value) => {
    return value !== false && value !==null && value !==0 && value !==""
  })  
    return result
}
console.log(arrayWithout(filterArrayValues))

// 🏔 Stretch Goals

// Create a function that takes in a string and returns a new string with all the vowels removed.

const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// Regects:
const removeVowels = str.replace(/[aeiou]/gi, '') 
console.log(removeVowels)

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// Pseudo code:
// input: 2 arrays of numbers
// output: 1 array with no duplicates
// combine 2 arrays
// check if numbers are the same
// remove the numbers that are the same
// return the new array

const combinedArray = (array1, array2) => {
  
  // merge two arrays:
  let newArray = array1.concat(array2)
  
  // check if numbers are the same:
  let uniqueValues = array1.filter
    


// Another way to get output:
  // console.log(Array.from(new Set(arr1.concat(arr2))))