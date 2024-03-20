// Keep Only Strings: Given a mix of different types of items, make a new list that has only the words. 

// Create a mixed array
const mixedItems: any[] = [1, "apple", true, "banana", 3.14, "orange", null, "grape"];

const onlyString:string[] = mixedItems.filter(item => typeof item === 'string')

console.log(onlyString)