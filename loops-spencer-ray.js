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

