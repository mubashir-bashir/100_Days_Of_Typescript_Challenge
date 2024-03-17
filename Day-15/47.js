// Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables. 
var leptops = [
    {
        make: "Apple",
        model: "Macbook Pro",
        year: 2021
    },
    {
        make: "Dell",
        model: "E5201",
        year: 2022
    },
    {
        make: "Toshiba",
        model: "F232",
        year: 2018
    }
];
var leptop1 = leptops[0], leptop2 = leptops[1];
console.log(leptop1);
console.log(leptop2);
