// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Write the code that will log true or false for the following:



// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.



console.log(34 / 3 > 67 / 2);
console.log(5 == "5");
console.log(5 === "5");
console.log(!3 === 3);
console.log("LEARN".length === 5 && "Student".length === 7);
console.log("LEARN".length === 5 && "Student".length === 10);
console.log("LEARN".includes("RN"));
console.log("LEARN".includes("rn"));
console.log("LEARN"[0] === "l");
console.log("LEARN"[0] === "L");

let price = 100
if (price <= 100){
    console.log("in budget")
}

let hungerLevel = "hungry"
if (hungerLevel === "hungry") {
    console.log("eat food")
}else {
        console.log("keep coding") 
}


let trafficLight = "cat"
if (trafficLight === "green") {
    console.log("go")
} else if (trafficLight === "yellow") {
    console.log("slow down")
} else if (trafficLight === "red") {
    console.log("stop")
} else {
    console.log("use discretion")
}


let num1 = 10
let num2 = 10

if (num1 > num2) {
    console.log(num1)
} else if (num2 > num1) {
    console.log(num2)
} else if (num1 === num2) {
    console.log("the numbers are the same")
} 


let number = 3
if (number === 0) {
    console.log("zero")
} else if (number % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
} 


// 🏔 Stretch Goals
// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

let letterGrade = "100%"
if (letterGrade === "100%") {
console.log()
}

// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

// Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.







