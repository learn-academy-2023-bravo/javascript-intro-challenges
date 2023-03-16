let groceryList = ["chips", "dip", "cookies"]

groceryList.push ("soda")

console.log(groceryList)

//[ 'chips', 'dip', 'cookies', 'soda' ]

let newList = groceryList.concat("granola")

console.log(newList)

//[ 'chips', 'dip', 'cookies', 'soda' ]
//[ 'chips', 'dip', 'cookies', 'soda', 'granola' ]

console.log(newList.slice(0,2))
//[ 'chips', 'dip' ]

console.log(newList.slice(0,2).concat("beans"))
//[ 'chips', 'dip', 'beans' ]