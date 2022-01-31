let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
var day_month = new Date(year, month, 0).getDate();
console.log(day_month);