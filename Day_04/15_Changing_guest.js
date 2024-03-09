"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let guest_list = ["Ali", "Adnan", "Kamran"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}, I'm inviting you to dine with me`);
}
let cancelGuest = guest_list.indexOf("Adnan");
console.log(`\n Sorry guys ${guest_list[cancelGuest]} is not comming for dinner `);
guest_list.splice(cancelGuest, 1, "Hammad");
console.log("\n OUr new guest are :");
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Hi ${guest_list[i]}, I'm inviting you to dine with me`);
}
