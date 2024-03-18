//  An array is an ordered list of items--the items could be of any datatypes
// arrays are created using square brackets and items separated using commas

const colors = ["red","yellow","blue"]
const evenNumbers = [2,4,,6,8,10,12,14]
const randomValues = [526,"Caleb",true,26,["red","green"], "cal@g.com", false,{dogName: "simba"}]

// arrays are zer0-indexed, this means by default js will assign numbers to the elements of the array starting with zero
// for the first element
// we use bracketnotation to access values in the array
// e.g to get the first even number

console.log(evenNumbers[0]);
// e.g to get the secong value of random values list i.e  "Caleb"

let secondRandomValue = randomValues[1]
console.log(secondRandomValue);

// tasks
// 1. log the second color in colors array
// 2. log the last element/item in the randomValues array

let secondColor = colors[1]
console.log(secondColor);

let lastRandomValue = randomValues[7]
console.log(lastRandomValue);

let thirdColor = colors[2]
console.log(thirdColor);