// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
var Circle = {
    shape: 'circle',
    radius: 46
};
var Rectangle = {
    shape: 'rectangle',
    width: 80,
    height: 40
};
function describeShape(shape) {
    if (shape.shape === 'circle') {
        console.log("This is a circle with radius ".concat(shape.radius, "."));
    }
    else if (shape.shape === 'rectangle') {
        console.log("This is a rectangle with width ".concat(shape.width, " and height ").concat(shape.height, "."));
    }
    else {
        console.log("Unknown shape.");
    }
}
describeShape(Circle);
describeShape(Rectangle);
