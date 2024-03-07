"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guest_list = ["Ali", "Adnan", "Kamran"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Hi ".concat(guest_list[i], ", I'm inviting you to dine with me"));
}
var cancelGuest = guest_list.indexOf("Adnan");
console.log("\n Sorry guys ".concat(guest_list[cancelGuest], " is not comming for dinner "));
guest_list.splice(cancelGuest, 1, "Hammad");
console.log("\n OUr new guest are :");
for (var i = 0; i < guest_list.length; i++) {
    console.log("Hi ".concat(guest_list[i], ", I'm inviting you to dine with me"));
}
