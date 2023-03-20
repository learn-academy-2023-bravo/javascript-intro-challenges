//Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

//pseudo: established a variable teatArr1 = [3, 9, 15, 4, 10]. then we created a for loop with a starting poiunt of index =0, and a stopping point equal to the length of the array, then we consolelogged the index of the array multiplied by 3.

// const testArr1 = [3, 9, 15, 4, 10]
// for (let index = 0; index < testArr1.length; index++) {
//     console.log(testArr1[index] * 3)
// }

//Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
const oddNum = [];
testArr2.forEach((testArr2) => {
    if (testArr2 % 2 === 1){
        oddNum.push(testArr2); 
    }
});
console.log(oddNum); 
