// Replacing Text in a string: Write a function that takes a sentence and replaces all instances of the word "JavaSript" with "TypeScript"


function replaceWord(sentence: string): string {
    return sentence.replace(/JavaScript/gi, "TypeScript");
}


let mySentence: string = "JavaScript is a programming language. javaSCRIPT is widely used.";
console.log("Modified sentence:", replaceWord(mySentence));

