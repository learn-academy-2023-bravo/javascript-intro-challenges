let numsArray = [];

//Create a for loop that logs each number from 1 - 20.
for (let i = 0; i < 21; i++) {
  console.log(i);
}

//Create a for loop that logs every other number from 1 - 20.
for (let i = 0; i < 21; i += 2) {
  console.log(i);
}

//Create a for loop that logs the result of each number from 1 - 20 tripled.
for (let i = 0; i < 21; i++) {
  console.log(i * 3);
}

//Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
for (let i = 0; i < 21; i++) {
  if ([i] % 2 === 1) {
    console.log("ODD");
  } else if ([i] % 2 === 0) {
    console.log(i);
  }
}

//Create the code that will log the largest number from the array.
const nums = [3, 57, -9, 20, 67];
let largest = nums[0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
largest = nums[i]
  }
}
console.log(largest)

//Create the code that will log the smallest number from the array.
for (let i = 0; i < nums.length; i++) {
    if (nums[i] < largest) {
  largest = nums[i]
    }
  }

  console.log(largest)

  //Create the code that will log the remainder of each number when divided by 2. Expected output: 1, 1, -1, 0, 1

  for (let i = 0; i < nums.length; i++){
    nums[i] % 2
  }
console.log(nums)

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
}

