// Write a function named marco that returns "polo".

//prompt: creat a function that responds to a call when a name is given

const marco = () => {
  return "polo"
}
console.log(marco())

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// prompt: create a function that takes a person's name and give a greeting

let personName = "Evelyn"
const greeting = () => {
  return `Welcome ${personName}`
}
console.log(greeting(personName))


// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

/*prompt: create a function that can tell is a number is odd or even
conditional statement - if statement is true or false
equality evaluation - === is to show whether a number is equal to another number
string interpolation - what will be the outcome
*/

const oddOrEven = (randomNum) => {
  if(randomNum % 2 === 1){
  return `${randomNum} is odd` 
  } 
  else if(randomNum % 2 === 0){
    return `${randomNum} is even`
  }
  else {
    return "something went wrong"
  }
}
console.log(oddOrEven(4))

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

/*prompt: create a function that takes a number and multiplies it by three

string interpolation - whatever number the user inputs will result in the number multiplied by three
*/

const triple = (numMultiply)=> {
  let timesThree = numMultiply * 3
  return `This ${numMultiply} will be multiplied by three , Which equals ${timesThree}`
}
console.log(triple(3))

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

/*prompt: create a function that takes a number and multiplies it together with another number

string interpolation - whatever numbers the user inputs will result in the numbers multiplied togther
*/

const multiply = (num1, num2) => {
  let multNumbers = num1 * num2
  return `These ${num1} and ${num2} will be multiplied together , Which results in ${multNumbers}`
}
console.log(multiply(26, 71))

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

/*prompt: create a function that takes two numbers and evenly divides them by a second number

conditional statement - if the number is evenly divisible by another number then it will be even

equality evaluation - modulo operator was used to say whether a number is evenly divided by another number

string interpolation - whatever number the user inputs will result in whether the number evenly divisble by another number
*/
const divisibleBy = (num3, num4)=> {
  if(num3 % num4 === 0){
    return `${num3} is evenly divisble by ${num4}` 
    } 
    else if(num3 % num4 !== 0){
      return `${num3} is not evenly divisible by ${num4}`
    }
    else {
      return "something went wrong"
    }
}
console.log(divisibleBy(10, 5))
console.log(divisibleBy(999, 482))

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.



// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.



// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.



// -. Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.



// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".