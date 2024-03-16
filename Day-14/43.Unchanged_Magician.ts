// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ['Kashif Memon', 'Khaliq Chishti', 'Usman Chaudhry', 'Asad Raza', 'Agha Waqar'];

function make_great(magician: string[]): string[] {
    let newArray: string[] = magician.slice();

    newArray.forEach((name, index, array) => {
        array[index] = `The Great ${name}`;
    });

    return newArray;
}

function show_magicians(names: string[]): void {
    console.log("List of Magicians:");
    names.forEach((name, index) => {
        console.log(`${index + 1}. ${name}`);
    });
}

// Call make_great() with a copy of the original array
let greatMagicians = make_great(magicians.slice());

// Display the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Display the array with "Great" added to each magician's name
console.log("\nMagicians Made Great:");
show_magicians(greatMagicians);
