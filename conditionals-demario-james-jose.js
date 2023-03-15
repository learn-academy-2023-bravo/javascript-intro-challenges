// // Write the code that will log true or false for the following:

// // Is 34 divided by 3 greater than 67 divided by 2?

// console.log (34 / 3 > 67 / 2) // false

// // Does 5 evaluate to the same as "5"?

// console.log (5 == "5") // true

// // Does 5 strictly equal "5"?

// console.log (5 === "5") // false

// // Does !3 strictly equal 3?

// console.log (!3 === 3) // false
// console.log (!3 === !3) // true
// console.log (!3 === 2) // false
// console.log (!3 === !2) // true
// console.log (3 != 2) // true

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

// console.log ("LEARN".length === 5 && "Student".length === 7) // true

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

// console.log ("LEARN".length === 5 || "Student".length === 10) // true

// Does "LEARN" contain the subset "RN"?

// console.log ("LEARN".includes("RN")) // true

// Does "LEARN" contain the subset "rn"?

// console.log ("LEARN".includes("rn")) // false

// // Does "LEARN"[0] strictly equal "l"?

// console.log ("LEARN"[0] === "l") // false

// Modify the code from the previous question to return true.

// console.log ("LEARN"[0] === "L") // true
// console.log ("LEARN"[0] == "L") // true
// console.log ("LEARN"[0] == "l") // false

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.

// var item = 100
// let x = 101
//     if (item >= x) {
//         console.log("in budget")
//     }

// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

// let hungry = true
// if (hungry){
//     console.log("eat food")
// } else (hungry == false) {
//     console.log("keep coding")}


// let hungry = true
// if (hungry == true) {
//     console.log("eat food")
// } else if (hungry == false){
//     console.log("keep coding")
// }


// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

// let trafficLight = "red"
// if (trafficLight == "green"){
//     console.log("go")
//     }   else if (trafficLight == "yellow"){
//         console.log("slow down")
//     }   else if (trafficLight == "red"){
//         console.log("STOP!!!")
//     } 


// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// let x = 10
// let y = 10

// if (x == y){
//     console.log("the numbers are the same")
// } else if (x > y){
//     console.log(x)
// } else {
//     console.log(y)
// // }

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

let x = -8
if (x === 0) {
    console.log("the number is zero")
} else if (x % 2 == 0){
    console.log("the number is even")
} else {
    console.log("the number is odd")
}