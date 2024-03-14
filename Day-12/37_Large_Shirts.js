// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message
var make_shirt = function (size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("You ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
};
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt("Medium");
// Creating a shirt of any size with a different message
make_shirt("Small", "I Love Coding");
