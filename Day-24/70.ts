// Understanding let in loops: Write a function that uses as loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.


// This function prints numbers from 1 to 5 using a loop

function printNumberWithLet(){
    for(let i =1 ; i<=5 ;i++){
    console.log(i)
}
// 'i' is not accessible here, outside the loop, because it's defined with 'let'.
}

printNumberWithLet()