// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

// const triple = (array) => {
//   newArr = []
//   for (i = 0; i < array.length; i++){
//     newArr.push(array[i]*3)
//   }
//   return newArr
// } 

// console.log(triple(testArr1))



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]

// const  oddArr = (array) => {
//   newArr = []
//   for (i = 0; i < array.length; i++){
//     if (array[i] % 2 != 0){
//       newArr.push(array[i])
//     }
//   } 
//   return newArr
// }
// console.log(oddArr(testArr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// output: "nicework"

// const letters = (array) => {
//   strArray = []
//   for (i = 0; i < array.length; i++){
//     if (typeof array[i] === 'string'){
//       strArray.push(array[i])
//     }
//   }
  
//   return strArray.join('')
// }

// console.log(letters(comboArr))

// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0

// const add = (array) => {
//   sum = 0
//   for (let i = 0; i < array.length; i++){
//     sum += array[i]
//   }
//   return sum
// }

// console.log(add(addThese2))

// Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3, 100]
// output: 1

// const largest = (array) => {
//   num = array[0]
//   index = 0
//   for (let i = 1; i < array.length; i++){
//     if (num < array[i]){
//       index = i
//       num = array[i]
//     }
//   }
//   return index
// }

// console.log(largest(indexHighestNumber))