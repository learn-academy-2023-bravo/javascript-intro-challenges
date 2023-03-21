// Write a function named marco that returns "polo".
// create function 
// conditional statement
// user input - "Maroc"
// function will return - "polo"

// const marcoPolo = (polo1) => {
// if (polo1 === "marco") {
// return "polo"
// } else if (polo1 !== "marco") {
//     return "error"
// }
// }
// console.log(marcoPolo('marco'))

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// create function
// strig interpolation Welcome and user input

// const greeting = (name) => {
//     return `Welcome, ${name}`
// }
// console.log(greeting('brandon and mark'))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// create function oddOrEven
// create numbers parameter
// 3 conditional statments
// parameter % 2 strictly equal 
// if else statement return "even" or "odd" or "0"

// const oddOrEven = (number) => {
//     if (number === 0) {
//         return "0"
//     } else if (number % 2 === 0) {
//         return "even"
//     } else if (number % 2 !== 0) {
//         return "odd"
//     }
// }
// console.log(oddOrEven(0))
// console.log(oddOrEven(1))
// console.log(oddOrEven(2))
// console.log(oddOrEven(3))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// create function tripple
// parameter num1
// return parameter num1 *3

const triple = (numberHere) => {
    return numberHere * 3
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// create function named mutliply
// create 2 parameters num1 and num2
// return num1 * num2

const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(5, 5))


// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// create function divisibleBy
// create parameters div1 and div2
// conditional statement if div1 % div2
// return string interpolation div1 evenly divisible by div2
// else if string interpolation div1 not evenly divisible by div2

const divisibleBy = (div1, div2) => {
    if (div1 % div2 === 0) {
        return `${div1} is evenly divisible by ${div2}`
    } else if (div1 % div2 !== 0){
        return `${div1} is not evenly divisible by ${div2}`
    }
}
console.log(divisibleBy(10, 5))
console.log(divisibleBy(10, 3))



// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// create function assignGrade
// 1 parameter call grade
// comparative statement < 90 - A, <80 - B, <70 - C
// conditional statements 

const assignGrade = (grade) => {
    if (grade >= 90) {
        return "A"
    } else if (grade >= 80) {
        return "B"
    } else if (grade >= 70) {
        return "C"
    } else {
        return "failed"
    }
}

console.log(assignGrade(72.5))
console.log(assignGrade(70))
console.log(assignGrade(50))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// creat function isLonger
// create 2 parameters word1, word2
// comparative statement which is greater using .length
// conditional statement

const isLonger = (word1, word2) => {
    if (word1.length > word2.length) {
        return `${word1} is longer than ${word2}`
    } else if (word1.length < word2.length) {
        return `${word2} is longer than ${word1}`
    }
}
console.log(isLonger("console", "log"))
console.log(isLonger("console", "ultimatium"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// create function greaterNum
// create 2 parameters n1 and n2 
// compartive statement
// 2 conditional statements

const greaterNum = (n1, n2) => {
    if (n1 > n2) {
        return n1
    } else if (n1 < n2) {
        return n2
    } else {
        return "even"
    }
}

console.log(greaterNum(4, 9))
console.log(greaterNum(4, 4))
console.log(greaterNum(9, 1))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// creat function yelling
// create 1 parameter named string 
// return parameter with .toUpperCase

const yelling = (string) => {
    return string.toUpperCase()
}
console.log(yelling("have a nice day!"))

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// create function helloWorld
// create 4 parameters dog, cat, bird, robot,
// 5 conditional statements

const helloWorld = (language) => {
    if (language === 'dog') {
        return 'woof world'
    } else if ( language === 'cat') {
        return 'meow world'
    } else if ( language === 'bird') {
        return 'chirp world'
    } else if (language === 'robot'){
        return 'beep world'
    } else {
        return 'Hello World'
    }
}
console.log(helloWorld('dog'))
console.log(helloWorld('cat'))
console.log(helloWorld('bird'))
console.log(helloWorld('robot'))
console.log(helloWorld('squirl'))


// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"