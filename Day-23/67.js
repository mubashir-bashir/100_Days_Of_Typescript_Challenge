// Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number.  
function addNumberAndString(number1, numberString) {
    return number1 + Number(numberString);
}
// Trying it with 10 and "5"
console.log(addNumberAndString(10, "5"));
