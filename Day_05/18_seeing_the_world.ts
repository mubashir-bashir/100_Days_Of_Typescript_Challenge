// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let fav_places = ["Venice", "Taj Mahal", "Mount Everest", "Tokyo Japan", "Great Wall of China"];

// Original order
console.log("Printing the array in its original order:");
console.log(fav_places);

// Alphabetical order (without modifying the original array)
console.log("\nPrinting the array in alphabetical order:");
console.log([...fav_places].sort());

// Original order verification
console.log("\nPrinting the array to ensure it's in the original order:");
console.log(fav_places);

// Reverse alphabetical order (without modifying the original array)
console.log("\nPrinting the array in reverse alphabetical order:");
console.log([...fav_places].sort().reverse());

// Original order verification
console.log("\nPrinting the array to ensure it's in the original order:");
console.log(fav_places);

// Reverse the order of the list
fav_places.reverse();
console.log("\nReversed order of the list:");
console.log(fav_places);

// Reversing order again to restore original order
console.log("\nReversing the order again to show it's back to the original order:");
console.log(fav_places.reverse());

// Sorting the array in alphabetical order
fav_places.sort();
console.log("\nSorting the array in alphabetical order:");
console.log(fav_places);

// Sorting the array in reverse alphabetical order
fav_places.reverse();
console.log("\nSorting the array in reverse alphabetical order:");
console.log(fav_places);
