// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
// Make a function that takes in an array of numbers, then iterates over each index and multiplies by 10, using a map

const arr1 = [3, 9, 15, 4, 10]

const timesTen = (array) => {
    return array.map((value) => value * 10)
}

console.log(timesTen(arr1));

// const timesTen = arr1.map((value) => {
//     return value * 10
// })

// console.log(timesTen);

// // output: [30, 90, 150, 40, 100]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// Make a function that takes in an array of numbers, and returns an array of odd numbers, using filter

const onlyOdds = (array) => {
    return array.filter((value) => value % 2 !== 0)
}

const arr2 = [2, 7, 3, 5, 8, 10, 13]

console.log(onlyOdds(arr2));

// // output: [7, 3, 5, 13]


// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.

// Make a function that takes in an array with both letters and numbers, and use typeof with filter to return an array of only letters, then turn the array into a string

const onlyLetters = (array) => {
    return array.filter((value) => typeof value === "string").join("")
}

const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]

console.log(onlyLetters(comboArr));

// // output: "nicework"


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// Make a function that takes in an array of many data types, and returns an array that excludes any false, null, 0, or blank values. We will use a filter to do this.

// Input Array => Filter function (which makes a new array) => For each value in the input array, checks the if statement. If that value is valid, it returns it to the filter function, which adds it to the filtered array.

const typeFilter = (array) => {
    return array.filter((value) => {
        if(value !== false || value !== null || value !== 0 || value !== ""){
            return value
        }
    })
}

const filterArrayValues = [58, "", "abcd", true, null, false, 0]
console.log(typeFilter(filterArrayValues));
// // output: [58, "abcd", true]


// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]