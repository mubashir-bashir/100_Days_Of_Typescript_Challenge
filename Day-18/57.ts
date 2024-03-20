// Find the Average Grade: Given a list of grades, calculate the average grade.

const grades = [93,82,92,84,58,88]

const sumGrades:number = grades.reduce((a,b)=>{
    return a+b
},0)

const averageGrades = Math.round(sumGrades/grades.length)
console.log(averageGrades)