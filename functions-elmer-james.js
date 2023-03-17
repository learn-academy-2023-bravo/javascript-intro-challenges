// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

const marco = () => {
    return "polo"
}

console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

const greeting = (yourName) => {
    return `Welcome, ${yourName}!`
} 

console.log(greeting("Elmer"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

const oddOrEven = (number) => {
    if (number % 2 === 0){
        return `${number} is even.`
    } else if (number % 2 !== 0){
        return `${number} is odd.`
    }
} 

console.log(oddOrEven(2))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

const triple = (number) => {
    return (number * 3)
}

console.log(triple(5))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

const multiply = (number1, number2) => {
    return (number1 * number2)
}

console.log(multiply(2,2))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

const divisibleBy = (number1, number2) => {
    if ((number1 / number2) % 2 === 0){
    return `${number1} is evenly divisible by ${number2}`
    } else if ((number1 / number2) % 2 !== 0){
        return `${number1} is not evenly divisible by ${number2}`
    }
}

console.log(divisibleBy(10,3))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

const assignGrade = (number) => {
    if (number > 89){
        return "A"
    } else if (number > 79){
        return "B"
    } else if (number > 69){
        return "C"
    } else if (number > 59){
        return "D"
    } else if (number > 0){
        return "F"
    }
}

console.log(assignGrade(25))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

const isLonger = (string1, string2) => {
    if (string1.length > string2.length){
        return `${string1}`
    } else if (string1.length < string2.length){
        return `${string2}`
    }
}

console.log(isLonger("Lee", "Figueroa"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

const greaterNum = (number1, number2) => {
    if (number1 > number2){
        return `${number1} is the greater number.`
    } else if (number1 < number2){
        return `${number2} is the greater number.`
    }
}

console.log(greaterNum(5,1))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

const yelling = (string) => {
    return string.toUpperCase(string)
}

console.log(yelling("this is the way"))

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.

function helloWorld(lang) {
    if (lang == "es"){
        return "Hola Mundo!";
    } else if (lang == "de"){
        return "Hallo Wereld!"
    } else if (lang == "en"){
        return "Hello World!"
    } else if (lang == "fr"){
        return "Bonjour le Monde!"
    } else if (lang == "jp"){
        return "Kon'nichiwa Sekai!"
    }
}

console.log(helloWorld("es"))
console.log(helloWorld("de"))
console.log(helloWorld("en"))
console.log(helloWorld("fr"))
console.log(helloWorld("jp"))

// Have your function default to returning English.
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