// Generate a random integer between 1 and 10.

function getRandomInt():number{
    return Math.ceil(Math.random()*10)+1
}

console.log(getRandomInt())