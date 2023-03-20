// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
 const testArr1 = [3, 9, 15, 4, 10]
// process
// create a function named "timesThree"
const timesThree = (array)=> {
   
    let arrayTimesThree = [] 
        for (let i=0; i<testArr1.length; i++){
     arrayTimesThree.push(array[i]*3)   
    }
    return arrayTimesThree
}
console.log(timesThree(testArr1))
// output: [9, 27, 45, 12, 30]
// create a variable that holds to arrays
// create a for loop that multiples each index in the array by 3
// return a new array with the intended output
// // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
 const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
//Process
// create a function named "oddNumbers"
// create a variable to hold the arrays with odd numbers
// create a for loop where is will modulo each element by 2
// only return odd numbers
const oddNumbers =(numbers)=> {
    let arrayOddNumbers = []
    for (let i=0; i<testArr2.length; i++){
        if (numbers[i] % 2 !== 0){
            arrayOddNumbers.push(numbers[i])
        }
    }
return arrayOddNumbers
}
console.log(oddNumbers(testArr2))
// // output: [-7, 3, 5, 13]
// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]
// // output: "nicework"


// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1
