// Write a function that takes in an array of numbers and returns a new array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

const timesTen = (arr) => {
	return arr.map((value) => {
		return value * 10
	})
}

// console.log(timesTen(arr1))

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13]
// output: [7, 3, 5, 13]

const onlyOdds = (array) => {
	return array.filter((value) => {
		return value % 2 !== 0
	})
}

// console.log(onlyOdds(arr2))

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, 'n', 'i', 'c', 10, 'e', false, 'w', 3, 'o', 'r', 'k']
// output: "nicework"

const onlyStrings = (array) => {
	let chars = array.filter((value) => {
		return typeof value === 'string'
	})
	return chars.join('')
}

// console.log(onlyStrings(comboArr))

// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
const filterArrayValues = [58, '', 'abcd', true, null, false, 0]
// output: [58, "abcd", true]

// const onlyTrue = (array) => {
// 	return array.filter((value) => {
// 		if (value === '' || value === false || value === 0 || value === null) {
// 			return false
// 		} else {
// 			return true
// 		}
// 	})
// }

const onlyTrue = (array) => {
	return array.filter((value) => value)
}

// console.log(onlyTrue(filterArrayValues))

// 🏔 Stretch Goals
// Create a function that takes in a string and returns a new string with all the vowels removed.
const str = 'javascript is awesome'
// output: "jvscrpt s wsm"

const removeVowels = (string) => {
	let arr = string.split('')
	const vowels = ['a', 'e', 'i', 'o', 'u']

	let filteredArray = arr.filter((value) => {
		return !vowels.includes(value)
	})

	return filteredArray.join('')
}

console.log(removeVowels(str))

// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr3 = [3, 7, 10, 5, 4, 3]
const arr4 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

const combinedArrays = (array1, array2) => {
	let combinedArr = array1

	array2.forEach((value) => {
		if (combinedArr.includes(value)) {
			console.log(value, 'already there')
		} else {
			console.log(value, 'not there')
		}
	})
}

console.log(combinedArrays(arr3, arr4))
