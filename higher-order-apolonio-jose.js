// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

//Pseudo
// Create a function named arrayOne
// Input data: Arrays of numbers
// Returns a new array with numbers of arr1 multiplied by 10
// Use HOF .Map () 
// const arrayTwo = (array) => {
//     return array.map((value) => {
//         return value * 10
//     })
// }

// Refactor
// This format is more dynamic, since it allows more than just one array to be used as input data.
// const arrayTwo = (array) => array.map((value) => {
//         return value * 10
    // })

// console.log(arrayTwo(arr1))

// // This format will only take in input from one specific array
// const arrayOne = arr1.map((value) =>{
//     return value * 10
// })

// console.log(arrayOne)



// output: [30, 90, 150, 40, 100]

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
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

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
// // }
// console.log(onlyLetters(comboArr))

// //--> nicework

// // output: "nicework"

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.

// const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// Pseudo
// Create a function named theChosenOnes
// Data input type: Array
// Filter out a number, boolean value, null, and blank values ""
// Return: a new array that contains the remaining values from orginal set
// // output: [58, "abcd", true]

// const theChosenOnes = (array) => {
//     let arrayThree = array.filter((value) => {
//         return value !== 0 && value !== "" && value !== null && value !== false
//     }) 
//     return arrayThree
// } 

// const theChosenOnes = (array) => {
//     let arrayThree = array.filter((value) => {
//         if (value) {
//         // If the the value is consider truthy we return it; value = truthy =  !0
//             return value
//         }
//     }) 
//     return arrayThree
// } 
// console.log(theChosenOnes(filterArrayValues))


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// Pseudo 
// Create a function called noVowels
// Data input type: string
// Return: a new string without vowels
// Turn a string in to array <string2Array> in order to filter another array <vowels2BeRemoved> of vowels 
// Turn new array into a string

// const noVowels = (str) => {
//     let array = str.split("")
//     return array.filter((value) => {
//         if (value !== "a" && value !== "e" && value !== "i" && value !== "u" && value !== "o") {
//             return value
//         }
//     }).join("")
//     return array
// }   
// console.log(noVowels(str))

//--> jvscript s wsm

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// Pseudo
// Create a function named combinedArr
// Data input: Two arrays (arr1, arr2)
// concat() to join the two arrays
//
// Return: One array = arrayOne + arrayTwo w/ no duplicates

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]

const combinedArr = (arr1, arr2) => {
    conArray = arr1.concat(arr2)

let uniqueArr = []

conArray.filter((value) => {
        if (!uniqueArr.includes(value)) {
            return uniqueArr.push(value)
        }

    }) 
    return uniqueArr
}
console.log(combinedArr(arr1, arr2))

// // output: [3, 7, 10, 5, 4, 8, 2, 1]