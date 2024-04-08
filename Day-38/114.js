// Iterate over a Map of student IDs and names, and log each pair to the console.
var students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
