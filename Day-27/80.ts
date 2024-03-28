// Updating Object Properties: Add a property named color to the existing car object, and then update the year paroperty to 2021. Show how to perform these operations.


export{}
// Define the Car interface
interface Car {
    make: string;
    model: string;
    year: number;
    color?: string
}

// Create an object representing a car
let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

myCar.year = 2021
myCar.color = "Black"

console.log(myCar)