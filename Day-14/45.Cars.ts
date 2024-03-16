// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. 
export{}
function createCar(manufacturer: string, modelName: string, ...extras: [string, any][]): { [key: string]: any } {
    let carInfo: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add extra information provided as key-value pairs
    for (let i = 0; i < extras.length; i++) {
        const [key, value] = extras[i];
        carInfo[key] = value;
    }

    return carInfo;
}

// Call the function with required information and additional name-value pairs
let carInfo = createCar('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);

// Print the returned object to verify all information was stored correctly
console.log(carInfo);
