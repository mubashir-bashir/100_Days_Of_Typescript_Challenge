// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guest_list = ["Ali", "Adnan", "Kamran"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Hi ".concat(guest_list[i], ", I'm inviting you to dine with me"));
}
