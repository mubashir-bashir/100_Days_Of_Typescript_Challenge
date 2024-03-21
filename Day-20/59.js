// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. 
function createAdders(specialNumber) {
    return function (numberToAdd) {
        return specialNumber + numberToAdd;
    };
}
var add5 = createAdders(5);
var result = add5(20);
console.log(result);
