//Travis Erwin - October 7th, 2014.
//Expressions - Industry
//Current job; how much will a check be getting paid every two weeks


alert("Calculate how much a check will be after two weeks making 7.25 an hour.");
//twoWeeks is hours you work in a period of two weeks.
var twoWeeks = prompt("How many hours do you work in two weeks?");
var hourlyPay = prompt("How much do you make an hour?")
//hourlyPay is what you make an hour.

var grossPay = twoWeeks * hourlyPay;
console.log(grossPay);
//grossPay will be what the check is before taxes.

alert("This is before taxes being taken out");
var result = "Your check will be" +  grossPay;
alert(result);
