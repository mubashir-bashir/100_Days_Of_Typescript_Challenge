// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

export{}


let car: string = 'subaru';

// Tests for equality and inequality with strings
console.log("Is car equal to 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car not equal to 'toyota'? I predict True.");
console.log(car !== 'toyota');

// Tests using the lower case function
console.log("Is car in lowercase equal to 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');

// Numerical tests
let x: number = 5;
let y: number = 10;

console.log("Is x less than y? I predict True.");
console.log(x < y);

console.log("Is x greater than or equal to y? I predict False.");
console.log(x >= y);

// Tests using "and" and "or" operators
let isSedan: boolean = true;
let isAutomatic: boolean = false;

console.log("Is car a sedan and automatic? I predict False.");
console.log(isSedan && isAutomatic);

console.log("Is car a sedan or automatic? I predict True.");
console.log(isSedan || isAutomatic);

// Test whether an item is in an array
let fruits: string[] = ['apple', 'banana', 'orange'];

console.log("Is 'apple' in the fruits array? I predict True.");
console.log(fruits.includes('apple'));

// Test whether an item is not in an array
console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
