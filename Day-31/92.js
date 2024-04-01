// Write a funciton to remove the last element from an array and return the removed element.
var Fruits = ["Mango", "Banana", "Strawberry"];
function remLastEle(inp) {
    if (inp.length <= 0) {
        throw new Error("Empty array");
    }
    return inp.pop();
}
console.log(remLastEle(Fruits));
