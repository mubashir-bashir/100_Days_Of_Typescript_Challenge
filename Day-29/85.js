// Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.
function findPosition(input) {
    var position = input.indexOf("code");
    return position;
}
console.log(findPosition("This is a code example with the word 'code' in it."));
