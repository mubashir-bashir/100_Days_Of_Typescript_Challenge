"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
console.log(guest_list);
console.log("\nOur new guest list is:");
// Print invitation messages for the updated guest list
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}, I'm inviting you to dine with me.`);
}
