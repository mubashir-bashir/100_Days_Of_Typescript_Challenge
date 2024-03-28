"use strict";
// Updating Object Properties: Add a property named color to the existing car object, and then update the year paroperty to 2021. Show how to perform these operations.
Object.defineProperty(exports, "__esModule", { value: true });
// Create an object representing a car
var myCar = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
myCar.year = 2021;
myCar.color = "Black";
console.log(myCar);
