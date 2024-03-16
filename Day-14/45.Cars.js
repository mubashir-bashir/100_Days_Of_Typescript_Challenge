"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add extra information provided as key-value pairs
    for (var i = 0; i < extras.length; i++) {
        var _a = extras[i], key = _a[0], value = _a[1];
        carInfo[key] = value;
    }
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var carInfo = createCar('Toyota', 'Corolla', ['color', 'blue'], ['year', 2022]);
// Print the returned object to verify all information was stored correctly
console.log(carInfo);
