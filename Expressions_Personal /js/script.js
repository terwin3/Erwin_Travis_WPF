//Travis Erwin - October 7th, 2014.
//Expressions - Personal
// Calculating car's fuel efficiency-MPG
alert("We\'re going to calculate gas mileage from Nashville to Home.");

var tripA  = prompt("How many miles is your first trip (trip A)?") // tripNashville is the first trip
var tripB = prompt("How many miles is the second trip (trip B)?"); // tripHome is the second trip
var gal = 9.125; // gal is how many gallons it takes to fill car up
var mpg = ( tripA - tripB)/gal;
console.log(mpg);

