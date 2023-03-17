// // Write the code that will log true or false for the following:

// // Is 34 divided by 3 greater than 67 divided by 2?

//     console.log((34/3) > (67/2))

// // Does 5 evaluate to the same as "5"?

//     console.log(5 == "5")

// // Does 5 strictly equal "5"?

//     console.log(5 === "5")

// // Does !3 strictly equal 3?

//     console.log(!3 == 3)

// // Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?

//     console.log("LEARN".length === 5 && "Student".length === 7)

// // Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?

//     console.log("LEARN".length === 5 || "Student".length === 10)
    
// // Does "LEARN" contain the subset "RN"?

//     console.log("LEARN".includes("RN"))

// // Does "LEARN" contain the subset "rn"?

//     console.log("LEARN".includes("rn"))

// // Does "LEARN"[0] strictly equal "l"?

//     console.log("LEARN"[0] === "l")

// // Modify the code from the previous question to return true.

//     console.log("LEARN"[0] === "L")

// // Make sure you try different options and change the variables to ensure properly working code.


// // Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
    
//     let item = 17

//     if(item <= 100){
//         console.log("in budget")
//     }

// // Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.

//     let hungry

//     if(hungry){
//         console.log("eat food")
//     } else if(!hungry) {
//         console.log("keep coding")
//     }

// // Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.

//     let trafficLight = "purple"

//     if(trafficLight === "green"){
//         console.log("go")
//     } else if(trafficLight === "yellow"){
//         console.log("slow down")
//     } else if(trafficLight === "red"){
//         console.log("stop")
//     } else {
//         console.log("any cops around?")
//     }

// // Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

//     var firstNumber
//     var secondNumber

//     if(firstNumber > secondNumber){
//         console.log(firstNumber)
//     } else if(firstNumber < secondNumber) {
//         console.log(secondNumber)
//     } else if(firstNumber === secondNumber) {
//         console.log("the numbers are the same")
//     }

// // Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

//     let oddNumber = 21
    
//     if(oddNumber === 0){
//         console.log('zero')
//     } else if(oddNumber % 2 !== 0){ 
//         console.log('odd')
//     } else if(oddNumber % 2 === 0 ) {
//         console.log('even')
//     }
    
//   // Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

//     const grades = 0

//     if(grades === 100){
//         console.log("perfect score");
//     } else if(grades > 90) {
//         console.log("A")
//     } else if(grades > 80) {
//         console.log("B")
//     } else if(grades > 70) {
//         console.log("C")
//     } else if(grades > 60) {
//         console.log("D")
//     } else if(grades === 0 ) {
//         console.log("no grades available")
//     } else if(grades < 60){
//         console.log("F")
//     } 

//     // Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

    // console.log(typeof(true))

//     // Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" 

//     // If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.

    const prompt = require("prompt-sync")({sigint:true});

    let newPassword = prompt("Please create a password and I will tell you wht I think about it: ");

    if (newPassword.length >= 12 && newPassword.includes("!")){
        console.log("That's a fancy; but strong password!")
    } else if (newPassword.length >= 8 || newPassword.includes("!")){
        console.log("Your password is strong enough")
    } else {
        console.log("That is not a valid password... I PITY THE FOOL!")
    }