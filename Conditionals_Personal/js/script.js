/* Created by Travis on 10/12/14 */

var payCheck = prompt("How much is your check?");//Total of check
var concertVIP = prompt("How much is the concert VIP ticket?");//VIP cost
var winConcertVIP =  0; //Chance to win free VIP


//if paycheck is less than concertVIP print to console "You can't go."
if(payCheck < concertVIP){
//Print to console.log You cant go!
    console.log("You can't go.");

}else if(payCheck = winConcertVIP){
    //Paycheck is same as winConcertVIP
    console.log("Good luck at winning!");

}else{
    //You won!
    console.log("You won, have fun!");
}










