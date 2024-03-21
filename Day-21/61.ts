// Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.

enum Vehicles{
    car = "Car",
    truck = "Truck",
    motorcycle = "Motorcycle"
}

 (function main(){
   const vehicle1 = Vehicles.car;
   const vehicle2 = Vehicles.truck;
   const vehicle3 = Vehicles.motorcycle;

   console.log(`Vehicle 1: ${vehicle1}`)
   console.log(`Vehicle 2: ${vehicle2}`)
   console.log(`Vehicle 3: ${vehicle3}`)
 })() 
