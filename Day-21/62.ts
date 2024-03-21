// Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface studentInfo{
    name: string,
    age: number,
    courses: string[]
}

const studen1:studentInfo = {
    name: "Mubashir",
    age: 24,
    courses: ['Calculus','Programming','Data Structure & algorithm','DLD']
}


console.log(studen1)