//Question 1
// for (let i = 1; i < 21; i++) {
//   process.stdout.write(`${i},`);
// }
// console.log();

// //Question 2
// for (let i = 1; i < 21; i += 2) {
//   process.stdout.write(`${i},`);
// }
// //Question 3
// console.log();
// for (let i = 1; i < 21; i *= 3) {
//   process.stdout.write(`${i},`);
// }
// //Question 4
// console.log();
// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     process.stdout.write(`${i},`);
//   } else {
//     process.stdout.write(`ODD,`);
//   }
// }
// // Create the code that will log the largest number from the array.
// console.log();
// const nums = [3, 57, -9, 20, 67]
// let largestNumber = nums[0]
// for(let i = 0; i < nums.length; i++) {
//     if(nums[i] > largestNumber){
//         largestNumber = nums[i]
//     }
// }
// console.log(largestNumber)

// // Create the code that will log the smallest number from the array.
// console.log();
// let smallestNumber = nums[0]
// for(let i = 0; i < nums.length; i++) {
//     if(nums[i] < smallestNumber){
//         smallestNumber = nums[i]
//     }
// }
// console.log(smallestNumber)

// // Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1
// console.log()

// for(let i = 0; i < nums.length; i++) {
//     console.log(nums[i] % 2)
// }

// Create the code that will log the number of times the letter "e" occurs in the string.
const myString = "learn student"
// let e = 0
// for(let i = 0; i < myString.length; i++){
// if(myString[i] === "e"){
//     e+= 1
// }
// }
// console.log(e)

// Create the code that will log every other character in the string.

for(let i = 0; i < myString.length; i+= 2){
console.log(myString[i])
}

// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
for (let i = 5; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i, 'is even');
    } else {
        console.log(i, 'is odd');
    }
}
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc

// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else {
        console.log(i)
    }
}

// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc