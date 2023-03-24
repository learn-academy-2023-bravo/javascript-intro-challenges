// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Use .map() or .filter() to complete all of the following exercises.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// Pseudo:
// create a H.O.F named multiplier
// input: an array of numbers
// declare an array to contain the new values
// iterate through origional array witha .map
// multiply the array elements by 10
// console.log the modified array 

    // const multiplier = arr1.map(value => value * 10)
    // console.log(multiplier)



// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//  const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]

// Pseudo:
// create a H.O.F named odd
// input: an array of numbers
// declare an array to contain the new values
// iterate through origional array with .filter
// filter by value % 2 !== 0 to get the odd numbers
// console.log to the modified array 
    // const odd = (array) => {
    //     let odds = array.filter(value => value % 2 !== 0)
    //     return odds
    // }
    // console.log(odd(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// Pseudo:
// create a H.O.F named stringArray
// input: a mixed array 
// declare an array to contain the new values
// iterate through origional array with .filter
// filter by typeof to get the data type of each element in the array
// convert the array into a string
// console.log to the modified string

    // const stringArray = (array) => {
    //     let letters = array.filter(value => typeof value === "string")
    //     return letters.join("")
    // }
    //console.log(stringArray(comboArr))


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]
const moreFilters = [42, "asdf", false, 0, null, undefined, 12]
// Pseudo:
// create a H.O.F named noUglies
// input: a mixed array 
// declare an array to contain the new values
// iterate through origional array with .filter to select true values 
// filter by typeof to remove falsy values using Boolean(value)
// console.log to push true conditions to the modified array
        // EX suntax of Func: const funcName = (parameter)=> {codeBlock}
      
        // const noUglies = (array) => {
        //     let workingArray = array.filter((value)=> {
        //         return Boolean(value)
        //     })
        //     return workingArray
        // }
        // console.log(noUglies(filterArrayValues))

//  testing out short hand, and multiple arrays of data and joining them with concat
        // const noUglies = moreFilters.filter(value => {
        //     return Boolean(value)
        // }).concat( filterArrayValues.filter(value => {
        //     return Boolean(value)
        // }))
        // console.log(noUglies)



// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// pseudo:
// input: a string 
// create a filter function named noVowels 
// our parameter is the given string "str"
// define a placeholder array workingArray
// set workingArray to be argument.split("")
// apply .filter by using a !== value of ("a", "e", "i", "o", "u") to remove vowels from our new string

// const noVowels = (string)=> {
//     let workingArray = string.split("").filter((value) => {
//         return value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u"
//         }) 
//         return workingArray.join("")
// }
// console.log(noVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// pseudo:
// input: two arrays of numbers
// declare a function numsJoined
// use both arr1 and arr2 as our parameters
// declare workingArray = arr1.concat(arr2).filter  
// create a condition to remove duplicate values
// console.log our workingArray(arr1 + arr2)

    let uniqueArray = [...new Set(arr1.concat(arr2))];

console.log(uniqueArray)
