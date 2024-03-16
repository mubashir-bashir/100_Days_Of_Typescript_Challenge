// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = ['Kashif Memon', 'Khaliq Chishti', 'Usman Chaudhry', 'Asad Raza', 'Agha Waqar'];
function make_great(magician) {
    var newArray = __spreadArray([], magician, true);
    newArray.forEach(function (names, index, array) {
        array[index] = "The great ".concat(names);
    });
    return newArray;
}
function show_magicians(names) {
    console.log("List of Magicians:");
    names.forEach(function (names, index) {
        return console.log("".concat(index + 1, ". ").concat(names));
    });
}
var great_magician = make_great(__spreadArray([], magicians, true));
// show_magicians(magicians)
// console.log(great_magician)
show_magicians(magicians);
show_magicians(great_magician);
