//  Defalult Paramters: Write a function that greets a user, It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
// This function greets a user by name, or greets an anonymus user if no name is provided
var greetUser = function (name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello, ".concat(name, "!"));
};
// Trying the function with a name and without
greetUser("Mubashir"); // Outputs: Hello, Mubashir!
greetUser(); // OUtputs: Hello, anonymous!
// We see how our function can say hello to someone by name, or just say hello if we don't know the name
