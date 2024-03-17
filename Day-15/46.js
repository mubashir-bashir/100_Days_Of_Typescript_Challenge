"use strict";
// Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop. 
Object.defineProperty(exports, "__esModule", { value: true });
let Leptop = {
    make: "DELL",
    model: "E6520",
    year: 2022,
    describe() {
        console.log(`This is a ${this.make} laptop made in ${this.year} and the model is ${this.model}.`);
    }
};
Leptop.describe();
