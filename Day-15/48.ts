// Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result. 


const laptopPrices1: number[] = [1200, 1500, 900];
const laptopPrices2: number[] = [1100, 1300, 950];

const combinedPrices: number[] = [...laptopPrices1, ...laptopPrices2].sort((a, b) => a - b);

console.log("Combined and Sorted Laptop Prices:", combinedPrices);
