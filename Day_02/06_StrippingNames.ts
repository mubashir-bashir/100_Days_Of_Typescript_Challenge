// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.



let Pname = " \t Mubashir \t Bashir \n"; // Including whitespace characters: tab at the beginning and end, and newline at the end.

// Printing the name with whitespace.
console.log(Pname); // Output: "      Mubashir        Bashir"

// Printing the name without whitespace using the trim() method.
console.log(Pname.trim()); // Output:  "Mubashir Bashir"
