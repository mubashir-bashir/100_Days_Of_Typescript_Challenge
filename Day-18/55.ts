// Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value. 

let numbersList = [23,28,2,12,9,18]
let newNumbersList = numbersList.map(num=> num*2)


console.log("Original list of numbers:");
console.log(numbersList)


console.log("New list with each number doubled:");
console.log(newNumbersList)