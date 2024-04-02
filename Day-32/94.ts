// Use the map() method to create a new array that contains the length of each word from an array of words.
export{}
// Defines an array with some words 

const words  = ["Hello", "World", "TypeScript", "JavaScript"]

// uses .map() to create a new array with the length of each word
const lengths = words.map(word=>word.length)

console.log(lengths)