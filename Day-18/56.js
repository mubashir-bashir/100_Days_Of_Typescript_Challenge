// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words. 
// Create a mixed array
var mixedItems = [1, "apple", true, "banana", 3.14, "orange", null, "grape"];
var onlyString = mixedItems.filter(function (item) { return typeof item === 'string'; });
console.log(onlyString);
