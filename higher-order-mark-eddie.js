// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]

// Pseudocode
// Create a function called multiplyByTen
// Use HOF .map
// Multiply all values by 10
// Return new array

const multiplyByTen = arr1.map((value) => {
    return value * 10
})
// console.log(multiplyByTen) // output: [ 30, 90, 150, 40, 100 ]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

// Pseudocode
// Create a function called onlyOdd
// Parameter called numbers
// Use filter to determine odd numbers
// Return odd numbers

const onlyOdds = (array) => {
    return array.filter((numbers) => numbers % 2 !== 0)
}
// console.log(onlyOdds(arr2)) // output: [ 7, 3, 5, 13 ]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// Create a function called onlyLetters
// Create variable called letters
// Use filter to determine which values are characters w/ typeof
// return letters as a string with .split()

const onlyLetters = (array) => {
    let letters = array.filter((value) => {
        return typeof value === "string"
    })
    return letters.join("")
}
// console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]


// Create a function called selectItems
// Filter out false, null, 0, and blank values with typeof

const selectItems = (array) => {
    let newArray = array.filter(Boolean)
    return newArray
}
// console.log(selectItems(filterArrayValues))


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// Create a function noVowels
// Create variable to hold string textHere 
// Turn string into array
// Filter vowels out with comparative statement
// Turn array back into string

const noVowels = (string) => {
    let vowels = ["a", "e", "i", "o", "u"];
    let textHere = string.split("").filter((value) => !vowels.includes(value))
    return textHere.join('')
};
// console.log(noVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arra1 = [3, 7, 10, 5, 4, 3]
const arra2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

//Create function called noDuplicates
//Concate both arrays into new array held in variable mergedArrays
//Use HOF filter to return back new array. Only return 


const noDuplicates = (array) => {
    let mergedArrays = array1.concat(array2);
    let finalArray = mergedArrays.filter((value, index, self) => {
        return self.indexOf(value) === index
    })

    return mergedArrays
}

// console.log(noDuplicates)

function mergeArrays(arr1, arr2) {
     const mergedArray = arr1.concat(arr2);
    const uniqueArray = mergedArray.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    return uniqueArray;
  }
const mergedArray = mergeArrays(arra1, arra2);
// console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6