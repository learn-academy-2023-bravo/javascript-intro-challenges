var groceryList = ["chips", "dip", "cookies"]

// Write the code that will add "soda" to the end of the original array.

groceryList.push("soda")
console.log(groceryList)


// Write the code that will add "granola" to the end of array without altering the original array.

groceryList.push("granola")
console.log(groceryList)


// Write the code that will return a subset of the array containing only "chips" and "dip".

let subsetArray = groceryList.slice (0, 2) 
console.log(subsetArray)


// Write the code that will add "beans" to the "chips" and "dip" array.

subsetArray.push("beans")
console.log(subsetArray)


// NEW VARIABLE:
// var numbers = [2, 4, 6, 8, 10]


// Write the code that will add the number 0 to the beginning of the array.



// Write the code that will add the number 12 to the end of the array.



// Write the code that will remove the first number from the array.



// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)


// NEW VARIABLE:
// var numSet = [2, 13, 6, 8, 4, 2]


// Write the code that finds the index of the first appearance of the number 2.



// Write the code that finds the index of the last appearance of the number 2.



// Write the code that returns the number at the third index.


// NEW VARIABLE:
// var characters = ["y", "a", "r", "r", "a"]


// Write the code that brings all the letters in the characters array together into a string.



// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.



// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.



// Write the code that brings all the letters in the charsReversed array together into a string without separators.



// Create two arrays consisting of three first names of your cohort members in each.



// Write the code that sorts the names in alphabetical order.



// Write the code that sorts the names in reverse alphabetical order.



// Write the code that sorts all the names in alphabetical order in a single array.


// NEW VARIABLE:
// var numbers = [42, 221, 71, 7, 18, 87]


// var oddIndexes = []



// Write the code that logs the values from the numbers array that are at odd indexes.



// Write the code that adds the values from odd indexes into the oddIndexes array.

// let index = 0
// let index <20
// index = index + 1

// let numsArray = [1, 2, 3, 4, 5, 6, 7 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//   console.log(numsArray.length)

// for (let i = 0; i <numsArray.length; i++) {
//   console.log ("index:", i, "value:", numsArray [i])
// }

let numsArray = []

//Create a for loop that logs each number from 1 - 20.
for(let i=0; i<21; i++){
    console.log(i)
}

//Create a for loop that logs every other number from 1 - 20.
for(let i=0; i<21; i+=2) {
    console.log(i)
}

//Create a for loop that logs the result of each number from 1 - 20 tripled.
for(let i=0; i<21; i++) {
    console.log(i * 3)
}

//Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for(let i=0; i<21; i++) {
    if ([i] % 2 === 1){
        console.log("ODD")
    } else if([i] % 2 === 0) {
        console.log(i)
    }

