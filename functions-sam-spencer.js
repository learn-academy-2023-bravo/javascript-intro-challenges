// Write a function named marco that returns "polo".
// Make a function called marco, have it display "polo"
// const marco = () => {
//     return "polo"
// }

// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// Make a function call greeting, and pass in an arguement that is a name, then have the function return "Welcome, <person's name here>!"
// const greeting = (greetingName) => {
//     return(`Welcome, ${greetingName}`)
// }
// console.log(greeting("Spencer"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// Make a function that takes a number as an arguement and returns if that number is an odd or even number using modulo
// const oddOrEven = (num) => {
//     if(num % 2 === 0){
//         return("even")
//     } else if(num % 2 === 1){
//         return("odd")
//     } else{
//         return("error")
//     }
// }
// console.log(oddOrEven("3"))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// Make a function that takes a number as an arguement and returns the number multiplied by 3
// const triple = (num) => {
//     return(num * 3)
// }
// console.log(triple(7))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// Make a function that takes a number as an arguement and returns the number two numbers multiplied
// const multiply = (num1, num2) => {
//     return(num1 * num2)
// }
// console.log(multiply(4, 6))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// fuction takes two numbers as arguments will mod the first number by the second and if the result is 0 returns evenly divisible.

// const divisibleBy = (num1, num2) => {
// if (num1 % num2 === 0  ){
// return (`${num1} is evenly divisible by ${num2}`)
// }else{
//     return ('The two numbers are not evenly divisible')
// }
// }
// console.log (divisibleBy(124, 5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// Function that takes in a score uses if else statements to checks it letter grade from A to F

// const assignGrade = (numScore) => {
//     if(numScore >= 90){
//     return ("A")}
//     else if(numScore >= 80){
//     return ("B")}
//     else if(numScore >= 70){
//     return ("C")}
//     else if(numScore >= 60){
//     return ("D")}
//     else if(numScore < 60){
//         return ("F")}
//         else{
//             return ("ERROR")
//         }
// }
// console.log(assignGrade(40))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// Function that takes two strings as argumnets and returns which is longer based on length.

// const isLonger = (string1, string2) => {
// if (string1.length > string2.length){
// return("String 1 is longer than string 2")}

// else if(string2.length > string1.length){
// return("String 2 is longer than string 1")}
// else{
//     return("The strings are the same length!")
// }
// }
// console.log(isLonger("Sam", "Sam"))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// Functions that takes two numbers as arguments and returns the number greatest in numerical value.

// const greaterNum = (num1, num2) => {
//     if (num1 > num2){
//     return("Number one is the greater number")}

//     else if(num2 > num1){
//     return("Number two is the greater number")}
//     else{
//         return("The numbers are the same!!!!")
//     }
//     }
//     console.log(greaterNum(10, 10))
// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// Function that takes a string and changes it to all uppercase letters.

// const yelling = (yell) => {
// return (yell.toUpperCase())
// }
// console.log(yelling("HELLO"))

// Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer
// Functions that translates 'Hello World!' into 1 of 5 different languages and defaults to english.

// const helloWorld = (translate = 'en') => {
// if( translate === 'es'){
//     return('Hola Mundo!')
// }else if( translate === 'fr'){
//     return('Bonjour Le Monde!')
// }else if( translate === 'jp'){
//     return('こんにちは世界!')
// }else if( translate === 'he'){
//     return('שלום עולם!')
// }else if( translate === 'en'){
//     return('Hello World!')
// }else {
//     return('Languauge unknown')
// }
// }
// console.log(helloWorld())

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
//funciton that takes a number and a singular noun as argument and returns the plural form of the noun.
const pluralizer = (num, noun) => {
  if (noun === "sheep" && num > 1) {
    return "sheep";
  } else if (noun === "Goose" && num > 1) {
    return "Geese";
  } else if (noun === "child" && num > 1) {
    return "children";
  } else if (num > 1) {
    return `${noun}s`;
  } else if (num === 1){
    return(noun)}
    else {
    return "Not to sure about that one...";
  }
};
console.log(pluralizer(3 ,"table"))
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
