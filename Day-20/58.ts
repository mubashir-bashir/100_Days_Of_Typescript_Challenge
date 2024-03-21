// Average Score Calculator: Write a simple program that can take lots of scores and find their average

function AvgScore(...scores:number[]){
    let avg =  scores.reduce((sum,scores)=>sum+scores,0)/scores.length;
    console.log(avg)
}

AvgScore(88,23,43,98)