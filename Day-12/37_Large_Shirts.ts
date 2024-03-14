// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
export{}
let make_shirt= (size="Large",message="I Love Typescript"):void=>{
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}


// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt("Medium");
// Creating a shirt of any size with a different message
make_shirt("Small", "I Love Coding");