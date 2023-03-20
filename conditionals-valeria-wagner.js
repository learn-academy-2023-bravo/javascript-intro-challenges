//Is 34 divided by 3 greater than 67 divided by 2?
 console.log(34/3>67/2)//false

// Does 5 evaluate to the same as "5"?
console.log(5=="5")//True

// Does 5 strictly equal "5"?
console.log(5==="5")//False

// Does !3 strictly equal 3?
console.log(!3===3) //False

// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
console.log("Learn".length ===5)//True
console.log("Student".length ===7)//True

// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("Learn".length ===5 || "Student".length ===10)// True

// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes ("RN")) //True

// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes ("rn")) // FALSE

// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN".charAt (0)==="l") // FALSE

// Modify the code from the previous question to return true.
console.log("LEARN"[0]==="L")//True

//Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 80
if (item <=100){
    console.log("In budget")
}
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry=false
if (hungry===true){
    console.log("eat food")
}else if (hungry===false){
    console.log("keep coding")
}
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "red"
if (trafficLight === "green"){
    console.log("go")
}else if(trafficLight === "yellow"){
    console.log("slow down")
}else if(trafficLight ==="red"){
    console.log("Stop")
}

// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero