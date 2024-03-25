"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Mubashir";
console.log(name);
name = "Ali";
console.log(name);
var gender = "Male";
try {
    // Attempting to reassign a value to a const variable will result in a compilation error
    // This line will cause a compilation error
    gender = "Female";
}
catch (error) {
    console.log(error.message);
}
