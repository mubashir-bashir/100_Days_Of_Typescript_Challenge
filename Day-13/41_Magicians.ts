// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
export {}
let magicians = ['Kashif Memon','Khaliq Chishti','Usman Chaudhry','Asad Raza','Agha Waqar']

function show_magicians(names:string[]):void{
    console.log("List of Magicians:");
 names.forEach((names,index)=> 
    console.log(`${index+1}. ${names}`))
}

show_magicians(magicians)