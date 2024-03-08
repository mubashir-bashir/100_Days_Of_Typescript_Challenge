// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. 
var fruit;
fruit = {
    name: "Orange",
    color: "Orange",
    taste: "Tangy",
    unit: "Dozen"
};
console.log("My favorite fruit is ".concat(fruit.name, ". It is ").concat(fruit.color, " in color, has a ").concat(fruit.taste.toLowerCase(), " taste, and is sold in units of ").concat(fruit.unit.toLowerCase(), "."));
