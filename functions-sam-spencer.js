// Write a function named marco that returns "polo".
// Make a function called marco, have it display "polo"
const marco = () => {
    return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// Make a function call greeting, and pass in an arguement that is a name, then have the function return "Welcome, <person's name here>!"
const greeting = (greetingName) => {
    return(`Welcome, ${greetingName}`)
}
console.log(greeting("Spencer"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// Make a function that takes a number as an arguement and returns if that number is an odd or even number using modulo
const oddOrEven = (num) => {
    if(num % 2 === 0){
        return("even")
    } else if(num % 2 === 1){
        return("odd")
    } else{
        return("error")
    }
}
console.log(oddOrEven("3"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// Make a function that takes a number as an arguement and returns the number multiplied by 3
const triple = (num) => {
    return(num * 3)
}
console.log(triple(7))


// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// Make a function that takes a number as an arguement and returns the number two numbers multiplied
const multiply = (num1, num2) => {
    return(num1 * num2)
}
console.log(multiply(4, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.