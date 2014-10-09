//Travis Erwin - October 7th, 2014.
//Expressions - Personal
// Calculating car's fuel efficien
alert("We\'re going to calculate gas mileage from two trips.");

var tripA  = prompt("How many miles is your first trip (trip A)?") // tripA defines the first trip
var tripB = prompt("How many miles is the second trip (trip B)?"); // tripB defines the second trip
var gal = 9.125; // gal is how many gallons it takes to fill car up
var mpg = ( tripA - tripB)/gal;
//console.log(mpg);
var result = "Your MPG is "  + mpg + " mpg";
alert(result);

