// Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [93, 82, 92, 84, 58, 88];
var sumGrades = grades.reduce(function (a, b) {
    return a + b;
}, 0);
var averageGrades = Math.round(sumGrades / grades.length);
console.log(averageGrades);
