"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// Define arrays of laptop prices
var laptopPrices1 = [1200, 1500, 900];
var laptopPrices2 = [1100, 1300, 950];
// Combine arrays using the spread operator and sort them in ascending order
var combinedPrices = __spreadArray(__spreadArray([], laptopPrices1, true), laptopPrices2, true).sort(function (a, b) { return a - b; });
// Log the combined and sorted array
console.log("Combined and Sorted Laptop Prices:", combinedPrices);
