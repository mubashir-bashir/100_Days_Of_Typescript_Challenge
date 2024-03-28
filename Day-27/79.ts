// Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.


// Define the Car interface
interface Car {
    make: string;
    model: string;
    year: number;
}

// Create an object representing a car
let myCar: Car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

// Access the model property of the car
console.log("Model of the car:", myCar.model);
