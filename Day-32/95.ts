// Write a function that uses the .filter() method  to return an array of numbers greater than 10


// This function filters  an array, keeping only numbers greater than 10 

function filterGreaterThanTen(numbers:number[]):number[]{
    return numbers.filter(num=>num>10)
}

// Example : Filtering an array of numbers 

const numbers : number[] = [5,10,15,20,25]

console.log(filterGreaterThanTen(numbers))
// Outputs : [15,20,25]