// Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
 

type circle= {
    shape: 'circle',
    radius: number,
}

type rectangle ={
    shape: 'rectangle',
    width: number,
    height: number
}

type Shapes= rectangle | circle;

const Circle:circle={
    shape:'circle',
    radius: 46
}

const Rectangle:rectangle ={
    shape: 'rectangle',
    width: 80,
    height: 40
}

function describeShape(shape: Shapes){
    if(shape.shape==='circle'){
        console.log(`This is a circle with radius ${shape.radius}.`);
    }
    else if(shape.shape === 'rectangle'){
        console.log(`This is a rectangle with width ${shape.width} and height ${shape.height}.`);
    }
    else{
        console.log("Unknown shape.");
    }
}

 describeShape(Circle)
 describeShape(Rectangle)