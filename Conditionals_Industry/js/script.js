/* Created by Travis on 10/15/14. */
var timeToWork = prompt("How long does it take to get to work?"); //time to work usually
var trafficWork = prompt("Enter how long it will take you to get to work with traffic interfering?"); //time to work if there's traffic

if(trafficWork < timeToWork){

    console.log("Warp speed");
}else if (timeToWork > trafficWork){

    console.log("Normal speed");
}else{

    console.log("Speed limit");
}

