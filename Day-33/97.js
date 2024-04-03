// Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDate() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var paddedDate = date < 10 ? "0".concat(date) : "".concat(date);
    var paddedMOnth = month < 10 ? "0".concat(month) : "".concat(month);
    return "".concat(paddedDate, "-").concat(paddedMOnth, "-").concat(year);
}
console.log(getCurrentDate());
