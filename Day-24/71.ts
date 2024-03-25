// Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
export{}
let name = "Mubashir";
console.log(name);

name = "Ali";
console.log(name);

const gender = "Male";
try {
    // Attempting to reassign a value to a const variable will result in a compilation error
    // This line will cause a compilation error
    gender = "Female";
} catch(error) {
    console.log(error.message);
}



