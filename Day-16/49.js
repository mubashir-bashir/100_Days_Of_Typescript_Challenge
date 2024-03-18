// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby. 
var hobbies = function () {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
};
hobbies("cricket", "football", "programming", "video games");
