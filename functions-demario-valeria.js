// Write a function named marco that returns "polo".
// const marco = () => {
//   return'polo'
// }
// console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"
// const greeting = (name) => {
//   return `Welcome, ${name}!`
// }
// console.log(greeting("john"))

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.
// const oddOreven = (num) =>{
//   if (num%2===0){
//     return 'even'
//   } else {
//     return 'odd'
//   }
// }
// console.log(oddOreven(30))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.
// const triple = (num) =>{
//   return num*3
// }
// console.log(triple(6))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.
// const multiply = (x,y) => {
//   return x*y
// }

// console.log(multiply(5,5))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// const divisibleBy = (x,y) => {
//   if (x%y===0){
//    return `${x} is evenly divisible by ${y}`
//   } else {
//     return `${x} is not evenly divisible by ${y}`
//   }
// }
// console.log(divisibleBy(7,5))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.
// const assignGrade = (score) => {
//   if (score>=90){
//     return 'A'
//   } else if (score>=80){
//     return 'B'
//   } else if (score>=70){
//     return "C"
//   } else if (score>=65){
//     return "D"
//   } else {
//     return "F"
//   }
// }
// console.log(assignGrade(60))

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.
// const isLonger = (x,y)=> {
//   if (x.length > y.length){
//     return x
//   } else {
//     return y
//   }
// }
// console.log(isLonger('heldsvdzfbzdfbdzbdflo', 'yo wassup'))

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.
// const greaterNum = (x,y) => {
//   if (x>y){
//     return x
//   } else {
//     return y
//   }
// }
// console.log(greaterNum(10,2))

// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.
// const yelling = (string) => {
//   return string.toUpperCase()
// }

// console.log(yelling('hi how are ya'))

// The World Translator
// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.

// const helloWorld = (languageCode) => {
//   if (languageCode==='af'){
//     return 'Hello Wêreld!'
//   } else if(languageCode==='ar'){
//     return 'مرحبا بالعالم!'
//   } else if (languageCode==='mt'){
//     return 'Hello dinja!'
//   } else if (languageCode==='ta'){
//     return 'வணக்கம் உலகம்!'
//   } else{
//     return 'Hello World!'
//   }
// }

// console.log(helloWorld('af'))
// console.log(helloWorld('ar'))
// console.log(helloWorld('mt'))
// console.log(helloWorld('ta'))
// console.log(helloWorld())

// The Pluralizer
// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".

// const pluralizer = (num, noun) => {
//   if (num === 1 || num === -1){
//     return `${num} ${noun}`
//   } else if (noun === 'sheep' || noun ==='species'){
//     return `${num} ${noun}`
//   } else if(noun === 'goose'){
//     return `${num} geese`
//   } else if (noun ==='child'){
//     return `${num} children`
//   } else if (noun ==='person'){
//     return `${num} people`
//   } else {
//     return `${num} ${noun}s`
//   }
// }
// console.log(pluralizer(1, 'sheep'))
// console.log(pluralizer(2, 'sheep'))
// console.log(pluralizer(1, 'species'))
// console.log(pluralizer(3, 'species'))
// console.log(pluralizer(1,'goose'))
// console.log(pluralizer(2, 'goose'))
// console.log(pluralizer(1, 'child'))
// console.log(pluralizer(2, 'child'))
// console.log(pluralizer(1, 'person'))
// console.log(pluralizer(2, 'person'))
// console.log(pluralizer(1, 'boat'))
// console.log(pluralizer(2, 'boat'))
