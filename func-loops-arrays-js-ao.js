// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

const testArr1 = [3, 9, 15, 4, 10]

const testArray = (array) => {
    let newArray = []
    for(index = 0; index < array.length; index++) {
        newArray.push(array[index] * 3)
    }
    return newArray
}
// console.log(testArray(testArr1))
// // output: [9, 27, 45, 12, 30]




// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

const oddNumbers = (array) => {
    let newArray2 = []
    for(index = 0; index < array.length; index++){
        if(array[index] % 2 !== 0) {
            newArray2.push(array[index])
        }
    }
    return newArray2
}
console.log(oddNumbers(testArr2))



// // output: [-7, 3, 5, 13]





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

// PSEUDO CODE: 
/*
    -create function
    -iterate through array to find only strings

    -output: string with letters
*/

const stitch = (array) => {
    let newString = []
    for(index = 0; index < array.length; index++) {
        if(array[index] === typeof string) {
            newString.push(array[index])
        }
    }
    return newString
}
console.log(stitch(comboArr))

// // output: "nicework"




// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10




// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1