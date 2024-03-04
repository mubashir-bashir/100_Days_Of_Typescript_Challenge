//Q3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// The person's name is stored in the variable Myname using strong typing.
var Myname = "Mubashir";
// Function to convert a string to title case
function titlecase(name) {
    // Capitalize the first character and concatenate it with the rest of the string
    return name.charAt(0).toUpperCase() + name.slice(1);
}
// Output the name in uppercase, lowercase, and titlecase
console.log(Myname.toUpperCase()); // Outputs: MUBASHIR
console.log(Myname.toLowerCase()); // Outputs: mubashir
console.log(titlecase(Myname)); // Outputs: Mubashir
