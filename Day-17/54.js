// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.  
var dynaicKeyObject = function () {
    var keyValuePairs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keyValuePairs[_i] = arguments[_i];
    }
    var obj = {};
    for (var _a = 0, keyValuePairs_1 = keyValuePairs; _a < keyValuePairs_1.length; _a++) {
        var _b = keyValuePairs_1[_a], key = _b[0], value = _b[1];
        obj[key] = value;
    }
    return obj;
};
var userPrefrence = dynaicKeyObject(["Theme", "Dark"], ["Font-size", "16px"], ["Language", "English"]);
console.log(userPrefrence);
