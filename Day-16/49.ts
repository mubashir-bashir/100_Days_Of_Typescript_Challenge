// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby. 

let hobbies = (...hobby:string[])=>{
    hobby.forEach(hobby => {
        console.log(`I enjoy ${hobby}`)
    });
}



hobbies("cricket","football","programming","video games")
