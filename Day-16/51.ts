// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function. 

function CalArea(width:number,height:number):number{
    return width*height
}

const AreaOfRect = (width:number,height:number):number=>{
    return width*height
}

console.log(AreaOfRect(34,52))