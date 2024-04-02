"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) {
        return accumulator + current;
    }, 0);
}
var numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(numbers));
