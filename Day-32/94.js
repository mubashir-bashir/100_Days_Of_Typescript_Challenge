"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Defines an array with some words 
var words = ["Hello", "World", "TypeScript", "JavaScript"];
// uses .map() to create a new array with the length of each word
var lengths = words.map(function (word) { return word.length; });
console.log(lengths);
