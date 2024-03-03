// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function titleCase(name: string):string {
  let TCname: string[] = name.toLowerCase().split(" ");
  for (let i = 0; i < TCname.length; i++) {
    TCname[i] = TCname[i].charAt(0).toUpperCase() + TCname[i].slice(1);
  
  }
  return TCname.join(" ");
}

const name: string = "Mubashir Bashir";
console.log("Name in lower Case");
console.log(name.toLowerCase());
console.log("\nName in Upper Case");
console.log(name.toUpperCase());
console.log("\nName in Title Case");
let TCname = titleCase(name);
console.log(TCname)

console.log(name.includes("bashi"))
export {};
