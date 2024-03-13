// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
var make_shirt = function (size, message) {
    console.log("You ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
};
make_shirt("Medium", "Sleep less, code more");
