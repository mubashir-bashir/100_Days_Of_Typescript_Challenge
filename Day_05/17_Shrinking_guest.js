"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
Object.defineProperty(exports, "__esModule", { value: true });
// Define the initial guest list
let guest_list = ["Ali", "Adnan", "Kamran"];
// Print invitation messages for each guest
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}, I'm inviting you to dine with me.`);
}
// Find and replace a guest who canceled
let cancelGuest = guest_list.indexOf("Adnan");
console.log(`\nSorry guys, ${guest_list[cancelGuest]} can't make it for dinner.`);
guest_list.splice(cancelGuest, 1, "Hammad");
console.log("\nOur updated guest list is:");
// Print invitation messages for updated guest list
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}, I'm inviting you to dine with me.`);
}
console.log("\nGreat news everyone! I just found a bigger dining table.");
// Add a new guest to the beginning of the array
guest_list.unshift("Arslan");
// Add a new guest to the middle of the array
let middle = Math.floor(guest_list.length / 2);
guest_list.splice(middle, 0, "Mohsin");
// Add a new guest to the end of the array
guest_list.push("Yousuf");
console.log("\nOur new guest list is:");
// Print invitation messages for the updated guest list
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}, I'm inviting you to dine with me.`);
}
console.log("\nUnfortunately, our new dining table won't arrive in time for dinner, and we can only accommodate two guests.");
// Remove guests from the list until only two names remain
while (guest_list.length > 2) {
    let removedGuest = guest_list.pop();
    console.log(`Sorry, ${removedGuest}, but we won't be able to accommodate you for dinner.`);
}
// Print a message to the remaining two guests, informing them they're still invited
guest_list.forEach(guest => console.log(`${guest}, you're still invited.`));
// Clear the list by removing the last two names
while (guest_list.length > 0) {
    guest_list.pop();
}
console.log(guest_list); // Output: []
