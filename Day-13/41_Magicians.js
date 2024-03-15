"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var magicians = ['Kashif Memon', 'Khaliq Chishti', 'Usman Chaudhry', 'Asad Raza', 'Agha Waqar'];
function show_magicians(names) {
    console.log("List of Magicians:");
    names.forEach(function (names, index) {
        return console.log("".concat(index + 1, ". ").concat(names));
    });
}
show_magicians(magicians);
