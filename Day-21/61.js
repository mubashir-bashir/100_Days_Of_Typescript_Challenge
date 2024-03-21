// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehicles;
(function (Vehicles) {
    Vehicles["car"] = "Car";
    Vehicles["truck"] = "Truck";
    Vehicles["motorcycle"] = "Motorcycle";
})(Vehicles || (Vehicles = {}));
(function main() {
    var vehicle1 = Vehicles.car;
    var vehicle2 = Vehicles.truck;
    var vehicle3 = Vehicles.motorcycle;
    console.log("Vehicle 1: ".concat(vehicle1));
    console.log("Vehicle 2: ".concat(vehicle2));
    console.log("Vehicle 3: ".concat(vehicle3));
})();
