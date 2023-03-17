// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

//make funtion named marco
//have the function return "polo"

// const marco = () => {
//     return "polo"
// }
// console.log(marco())
// // -->polo


// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

//funtion: "greeting"
//string interpolation: "welcom, <person's name here>!"
// const greeting = (name) => {
//     return `Welcome, ${name}!`
// }
// console.log (greeting("Borja"))
//-->Welcome, Borja!

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

//funtion: "oddOrEven"
//conditional statement  
//take input: "number" and evaluate if its odd or even
//return: "odd" or "even"

// const oddOrEven = (number) => {
//     if (number % 2 === 0){
//         return `${number} is even`
//     } else if (number % 2 !== 0){
//         return `${number} is odd`
//     } else {
//         return "something somewhere went wrong"
//     }    
// }
// console.log(oddOrEven())

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Create a funtion named "triple"
// take an number input have it processes: multiply by 3
// expected result: "`${startingNumber} multipled by 3 is ${tripledNumber} "

// const triple = (startingNumber) => {
//     let tripledNumber = startingNumber * 3
//     return `${startingNumber} multipled by 3 is ${tripledNumber}`
// }
// console.log(triple (15))
//-->15 multipled by 3 is 45

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Create a Function named "multiply"
// take two number input have it processes: multiply by each other
// expected result: "`${firstNumber} multipled by ${secondNumber} is ${total}"

// const multiply = (firstNumber, secondNumber) => {
//     let total = firstNumber * secondNumber
//     return `${firstNumber} multipled by ${secondNumber} is ${total}`
// }
// console.log(multiply(50,50))
//-->50 multipled by 50 is 2500

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Create a Function named "divisibleBy"
// conditional statement: 
// take two number inputs and have it process: evaluate modulo 
// expected result(-->): "`${firstNumber} is evenly divisible by ${secondNumber}"

const divisibleBy = (firstNumber, secondNumber) => {
    if (firstNumber % secondNumber === 0){
        return `${firstNumber} is evenly divisible by ${secondNumber}`
    } else if (firstNumber % secondNumber !== 0){
        return `${firstNumber} is not evenly divisible by ${secondNumber}`
    } else {
        return "What is going on!!!!"
    }
}
let t = 5
console.log (divisibleBy(10,2)) //--> 10 is evenly divisible by 2
console.log (divisibleBy(43253,3)) //--> 43253 is not evenly divisible by 3
console.log (divisibleBy(27,5)) //-->26 is not evenly divisible by 5
console.log (divisibleBy(13,"3")) //--> 13 is not evenly divisible by 3
console.log (divisibleBy(13,"D")) //--> 13 is not evenly divisible by D
console.log (divisibleBy(t,t)) //--> 5 is evenly divisible by 5
console.log (divisibleBy("t","t")) // t is not evenly divisible by t






// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

