// Write a function that returns the current date in the format "DD-MM-YYYY".

function getCurrentDate():string{
    const today:Date = new Date()
    const date:number = today.getDate()
    const month:number = today.getMonth()+1
    const year: number = today.getFullYear()

    const paddedDate:string = date<10? `0${date}` : `${date}`
    const paddedMOnth: string = month<10? `0${month}` :`${month}`

    return `${paddedDate}-${paddedMOnth}-${year}`
}

console.log(getCurrentDate())