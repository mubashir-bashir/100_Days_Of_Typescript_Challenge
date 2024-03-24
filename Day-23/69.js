// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
var divideAndReminder = function (divider, divident) {
    var quotent = Math.floor(divident / divider);
    var remainder = divident % divider;
    return { quotent: quotent, remainder: remainder };
};
console.log(divideAndReminder(2, 10));
