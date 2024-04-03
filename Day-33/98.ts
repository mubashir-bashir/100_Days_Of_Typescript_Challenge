//  Create a JavaScript snippet that calculated and logs how many days are left until New Year

// Get the current date
const currentDate = new Date();

// Get the next New Year's date
const nextNewYear = new Date(currentDate.getFullYear() + 1, 0, 1);

// Calculate the difference in milliseconds between the current date and the next New Year's date
const timeDifference = nextNewYear.getTime() - currentDate.getTime();

// Convert milliseconds to days
const daysUntilNewYear = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

// Log the result
console.log("Days until New Year:", daysUntilNewYear);
