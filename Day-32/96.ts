// Demonstrate how to use the .reduce() mehthod to calculate the sum of all numbers in an array 
export {}

function calculateSum (numbers: number[]){
    return numbers.reduce((accumulator,current)=>{
        return accumulator+current
    },0)
}

const numbers = [ 1,2,3,4,5]

console.log(calculateSum(numbers))