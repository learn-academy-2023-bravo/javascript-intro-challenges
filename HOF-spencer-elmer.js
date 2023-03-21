// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
//  const arr1 = [3, 9, 15, 4, 10]
// // output: [30, 90, 150, 40, 100]
//Pseudo: Create a function that takes in array
//use .map to return said array * 10 for each index.

// const multiplyByTen = arr1.map((value) => {
//     return value * 10
// })
// console.log(multiplyByTen);

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const arr2 = [2, 7, 3, 5, 8, 10, 13]
// // output: [7, 3, 5, 13]
//pseudo: Create a function that take in an array.
// use .filter to find index value that contain only odd numbers.
// Return an array that contains only odd numbers.

// const oddNumbersOnly = arr2.filter((value) => {
//     return value % 2 !== 0
// })
// console.log(oddNumbersOnly);

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
// const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"
//Psuedo: Create a function that takes in the array.
//use .filter and typeof to seperate the numbers and bool from the letters.
//Return a string that includes the letters in the array
//use .join to form a string with the returned letters.

// const onlyLetters = (array) => {
//     return array.filter(letter => typeof letter === 'string').join ('')
// }
// console.log(onlyLetters(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, "", "abcd", true, null, false, 0];
// output: [58, "abcd", true]
//Psuedo:
// Create a funciton that takes in an array
// Use .filter to pull out the index values in the array we dont need.
// return an array of the remaining items.

const filteredArray = (array) => {
  let newArray = array.filter(
    (value) =>
      (typeof value === "number" && value !== 0) ||
      (typeof value === "string" && value !== "") ||
      (typeof value === "boolean" && value === 1 > 0) ||
      (typeof value === "null") 
  );
  return newArray;
};
console.log(filteredArray(filterArrayValues));

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
