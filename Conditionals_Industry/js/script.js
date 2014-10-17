/* Created by Travis on 10/15/14. */
var timeToWork = prompt("How long does it take to get to work?"); //time to work usually
var trafficWork = prompt("Enter how long it will take you to get to work with traffic interfering"); //time to work if there's traffic

var arrival = Number(trafficWork) + Number(timeToWork);//Adds how long it will take to get to work
var result = "It will take you " + arrival + " minutes to get to work";
alert(result);
if(trafficWork > timeToWork){//if traffic to work is more than time to work usually

    console.log("Warp speed");
}else if (timeToWork > trafficWork){//time to work is greater than traffic

    console.log("Normal speed");
}else{

    console.log("Speed limit");
}

