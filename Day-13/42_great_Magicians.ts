// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

export {}


let magicians = ['Kashif Memon','Khaliq Chishti','Usman Chaudhry','Asad Raza','Agha Waqar']

function make_great(magician:string[]):void{
magician.forEach((names,index,array)=>{
    array[index] = `The great ${names}`
})
}

function show_magicians(names:string[]):void{
    console.log("List of Magicians:");
 names.forEach((names,index)=> 
    console.log(`${index+1}. ${names}`))
}


make_great(magicians)
show_magicians(magicians)