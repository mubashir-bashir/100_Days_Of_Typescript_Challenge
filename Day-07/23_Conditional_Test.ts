// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = "Rolls Royce";

console.log('Is car !== "Rolls Royce"? I predict False');
console.log(car !== 'Rolls Royce');

console.log('Is car == "Rolls Royce"? I predict True');
console.log(car === 'Rolls Royce');

console.log('Is car starts with "R"? I predict True');
console.log(car.startsWith('R'));

console.log('Is car ends with "e"? I predict True');
console.log(car.endsWith('e'));

console.log('Is car includes "Roy"? I predict True');
console.log(car.includes('Roy'));

console.log('Is car includes "roll"? I predict False');
console.log(car.includes('roll'));

console.log('Is car has length greater than 10? I predict True');
console.log(car.length > 10);

console.log('Is car has length less than 5? I predict False');
console.log(car.length < 5);

console.log('Is car has "o" at index 4? I predict True');
console.log(car.charAt(4) === 'o');

console.log('Is car has "y" at index 8? I predict True');
console.log(car.charAt(8) === 'y');
