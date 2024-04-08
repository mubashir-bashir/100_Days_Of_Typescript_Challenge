// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
var countries = new Map();
countries.set("USA", "Washington, D.C");
countries.set("Pakistan", "Islamabad");
countries.set("Japan", "Tokyo");
function logCapitalOfPakistan(countries) {
    if (countries.has("Pakistan")) {
        console.log("The capital of Pakistan is ".concat(countries.get("Pakistan")));
    }
    else {
        console.log("Pakistan is not in the Map");
    }
}
logCapitalOfPakistan(countries);
