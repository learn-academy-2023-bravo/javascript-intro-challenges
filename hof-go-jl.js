
// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// // pseudocode: create a function named multiplyByTen
// // parameter is an array map. We assigned map to the variable value.
// // console.log the function multiplyByTen which gave us the output of each number in array times 10.

// const multiplyByTen = arr1.map(value =>value * 10)
// console.log(multiplyByTen);

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.

// const arr2 = [2, 7, 3, 5, 8, 10, 13]

// // pseudocode: create a function named oddNum
// // Parameter is an array of numbers
// // create conditional statement
// // create a new variable that will hold numbers

// const oddNum = (arr2) => {
//     let numbers = arr2.filter((value) => {
//     return typeof value === "number"
//     })
//     let odds = numbers.filter(value => {
//         return value % 2 !== 0
//     })
//     return odds
    
// }
// console.log(oddNum(arr2))
// // output: [7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

//pseudocode: create a function called onlyLetters.
// Parameter is an array of mixed data types.
// evaluate data type of each element by using built in method --->typeof

// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

// const onlyLetters = (comboArr) => {

//     return comboArr.filter((value) => {
//        return typeof value === "string"
//    })
   
// }
// console.log(onlyLetters(comboArr));

// // output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.


// pseudocode: create a function called arrayReturns
// parameter is an array of mixed data types.
// evaluate data type of each element by using built in method ---> filter

// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// const arrayReturns = (arr) => {
//     return arr.filter((value) => value !== 0 && value !== null && value !== false && value !== "")

// }
// console.log(arrayReturns(filterArrayValues));

// // output: [58, "abcd", true]


// Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.

// const str = "javascript is awesome"
// console.log(str.replace("javascript is awesome", "'jvscrpt s wsm'"));




// output: "jvscrpt s wsm"


// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// const arr3 = arr1.concat(arr2)

// console.log (arr3)

// const newArr = [new Set(arr3)]
// console.log (newArr)
// output: [3, 7, 10, 5, 4, 8, 2, 1]