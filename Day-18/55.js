// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value. 
var numbersList = [23, 28, 2, 12, 9, 18];
var newNumbersList = numbersList.map(function (num) {
    return num + num;
});
console.log(numbersList);
console.log(newNumbersList);
