"use strict";
// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ['Kashif Memon', 'Khaliq Chishti', 'Usman Chaudhry', 'Asad Raza', 'Agha Waqar'];
function make_great(magician) {
    magician.forEach(function (names, index, array) {
        array[index] = "The great ".concat(names);
    });
}
function show_magicians(names) {
    console.log("List of Magicians:");
    names.forEach(function (names, index) {
        return console.log("".concat(index + 1, ". ").concat(names));
    });
}
make_great(magicians);
show_magicians(magicians);
