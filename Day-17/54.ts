// Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.  

let dynaicKeyObject = (...keyValuePairs:[string,string][]):{}=>{
    let  obj= {}
    for(let [key,value] of keyValuePairs){
        obj[key]= value
    }
    return obj
}

let userPrefrence = dynaicKeyObject(["Theme","Dark"],["Font-size","16px"],["Language","English"])

console.log(userPrefrence)