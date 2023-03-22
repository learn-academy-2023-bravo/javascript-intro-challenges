// Write a function named marco that returns "polo".

// returns "polo"
const marco = () => {
    return "polo"
}

// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// given a name, the function will return "welcome, <name>"
const greeting = (yourName) => {
    return `Welcome, ${yourName}!`
}

// console.log(greeting("Ray"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// takes in a number as a parameter and checks to see if number is evenly divisible by 2 then returns "even"
// else it will return "odd"
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

// returns number multiplied by 3
const triple = (number) => {
    return number * 3
}

// console.log(triple(4))
// console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// returns the product of num1 & num2
const multiply = (num1, num2) => {
    return num1 * num2
}

// console.log(multiply(5, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// given 2 numbers, if num1 is divisible by num2, return "num1 is evenly divisible by num2"
// else "num1 is not evenly divisible by num2"
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

// if num1 > num2, return num1
// if num1 < num2, return num2

const greaterNum = (num1, num2) => {
    if (num1 > num2) {
        return num1
    }
 else if (num1 < num2) {
    return num2
 }
}
console.log(greaterNum(5, 10))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// call the argument phrase
// return phrase.toUpperCase
const yelling = (phrase) => {
    return phrase.toUpperCase()
}
console.log(yelling("get out of my swamp!"))


// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// given languageCode check to see if it is equal to "en" then return "Hello World!"
// given languageCode check to see if it is equal to "es" then return "¡Hola Mundo!"
// given languageCode check to see if it is equal to "de" then return "Hallo Welt!"
// given languageCode check to see if it is equal to "ar" then return "مرحبا بالعالم!"
// given languageCode check to see if it is equal to "ru" then return "Привет, мир!"

const helloWorld = (languageCode = "en") => {
    if(languageCode === "en"){
    return "Hello World!"
    } else if(languageCode === "es"){
        return "¡Hola Mundo!"
    } else if(languageCode === "de"){
        return "Hallo Welt!"
    } else if(languageCode === "ar"){
        return "مرحبا بالعال"
    } else if(languageCode === "ru"){
        return "Привет, мир!"
    }
}
console.log(helloWorld("en"))
console.log(helloWorld("es"))
console.log(helloWorld("de"))
console.log(helloWorld("ar"))
console.log(helloWorld("ru"))
console.log(helloWorld())

// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
