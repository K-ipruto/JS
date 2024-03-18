// Objects are labelled group of data
// we create objects using curly brackets
// objects are made up of key-value pairs

let product = {
    name: "T-Shirt",
    price: 249.99,
    availableColors: ["green","red","white"],
    size: "M",
    isVNeck: false

}

// To access values of an object we can use the dot notation or bracket notation with the keys

// e.g. to access/log the price of the product

console.log( product.price);
console.log(product["price"])

// e.g log available colors
let tshirtColors = product.availableColors
console.log(tshirtColors)
// e.g log the last color in the list of available colors

let lastcolor = tshirtColors[2]
console.log(lastcolor);