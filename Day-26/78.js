// Function Expression vs Function Declarations: Compare function expressions and declarations by cratting one of each that performs the same task, such as squaring a number.
// Function declaration for squaring a number 
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
console.log(squareDeclaration(4)); //Output: 16
console.log(squareExpression(4)); //OUtput: 16
//Both methods give us the same result, showing two different ways to create functions that do the same thing.
