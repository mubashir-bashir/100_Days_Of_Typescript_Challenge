// Swapping Variables: Demonstrate how to swap the value of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

let swapValues = ()=>{
let a =5,b=10

console.log('Initial Value of a = ',a)
console.log('Initial Value of b = ',b)

let temp = a;
a =b;
b = temp;

console.log('Value of a after swapp a = ',a)
console.log('Value of b after swapp b = ',b)
}

swapValues()