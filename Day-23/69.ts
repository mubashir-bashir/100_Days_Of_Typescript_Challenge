// Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.

let divideAndReminder = (divider:number,divident:number):{quotent:number,remainder:number}=>{
    let quotent = Math.floor(divident/divider)
    let remainder = divident % divider

    return{quotent,remainder}
}

console.log(divideAndReminder(2,10))