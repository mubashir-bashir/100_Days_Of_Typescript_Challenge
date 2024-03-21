// Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later. 

function createAdders(specialNumber:number):(numberToAdd:number)=>number{
 return function(numberToAdd):number{
    return specialNumber+ numberToAdd
 }
}

const add5 = createAdders(5)
const result = add5(20)
console.log(result)