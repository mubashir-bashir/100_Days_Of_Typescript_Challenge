// Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

interface employee{
    name: string,
    id: number,
    position: string,
    experience: string,
    isPaid: boolean,
}

let newEmployee: employee = {
    name: "Mubashir",
    id: 1234,
    position: "Web Developer",
    experience: "2 years",
    isPaid: true
}

function empDetails(emp:employee):void{
    for(let details in emp){
        console.log(`${details} : ${emp[details]}`)
    }
}


empDetails(newEmployee)