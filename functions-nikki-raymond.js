// Write a function named marco that returns "polo".
const marco = () => {
    return "polo"
}

// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
const greeting = (yourName) => {
    return `Welcome, ${yourName}!`
}

// console.log(greeting("Ray"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
const oddOrEven = (number) => {
    if (number % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}

// console.log(oddOrEven(5))
// console.log(oddOrEven(4))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
const triple = (number) => {
    return number * 3
}

// console.log(triple(4))
// console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
const multiply = (num1, num2) => {
    return num1 * num2
}

// console.log(multiply(5, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
const divisibleBy = (num1, num2) => {
    if (num1 % num2 === 0) {
        return `${num1} is evenly divisible by ${num2}`
    } else {
        return `${num1} is not evenly divisible by ${num2}`
    }
}

// console.log(divisibleBy(10, 5))
// console.log(divisibleBy(5, 10))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// given a scrore
// if score is between 100 and 90 return A
// if score is between 89 and 80 return B
// if score is between 79 and 70 return C
// if score is between 69 and 60 return D
// if score is lower then 59 return F
const assignGrade = (score) => {
    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    } else if (score >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}

// console.log(assignGrade(5))
// console.log(assignGrade(100))
// console.log(assignGrade(80))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// if the length of string1 is more than the length of string2
// then return string1
// else return string2

const isLonger = (string1, string2) => {
    if (string1.length > string2.length) {
        return string1
    } else {
        return string2
    }
}

console.log(isLonger('', 'string2'))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.