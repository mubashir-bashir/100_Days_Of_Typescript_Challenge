// Average Score Calculator: Write a simple program that can take lots of scores and find their average
function AvgScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var avg = scores.reduce(function (sum, scores) { return sum + scores; }, 0) / scores.length;
    console.log(avg);
}
AvgScore(88, 23, 43, 98);
