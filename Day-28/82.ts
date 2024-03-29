// Find the length of a string: Write a function that takes a string as an argument and returns the number of characters in the string.
export{}
function countCharacters(str: string): number {
    return str.length;
}

let name: string = "Mubashir";
console.log("Length of the string:", countCharacters(name)); // Output: 13
