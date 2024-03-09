// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var names = ["Ali", "Adnan", "Kamaran"];
// Accessing an index that doesn't exist to provoke an index error
try {
    console.log(names[3]); // This line will throw an error
}
catch (error) {
    console.error("Error:", error.message);
}
// Correcting the error by assigning a value to index 3
names[3] = "Asad";
console.log(names[3]); // Now prints 'Asad'
