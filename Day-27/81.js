// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.
var newEmployee = {
    name: "Mubashir",
    id: 1234,
    position: "Web Developer",
    experience: "2 years",
    isPaid: true
};
function empDetails(emp) {
    for (var details in emp) {
        console.log("".concat(details, " : ").concat(emp[details]));
    }
}
empDetails(newEmployee);
