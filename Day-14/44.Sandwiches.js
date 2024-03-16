// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. 
function makeSandwich() {
    var ingredients = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ingredients[_i] = arguments[_i];
    }
    console.log("Sandwich Summary:");
    if (ingredients.length === 0) {
        console.log("No ingredients provided. Your sandwich is empty.");
    }
    else {
        console.log("Your sandwich contains:");
        ingredients.forEach(function (ingredient, index) {
            console.log("".concat(index + 1, ". ").concat(ingredient));
        });
    }
    console.log(); // Empty line for clarity
}
// Call the function three times with different numbers of arguments
makeSandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
makeSandwich('Peanut Butter', 'Jelly');
makeSandwich('Turkey', 'Swiss Cheese');
