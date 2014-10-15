/* Created by Travis on 10/15/14. */
var timeToWork = prompt("How long does it take to get to work?") //time to work usually
var trafficWork = 15; //time to work if there's traffic

if(timeToWork < trafficWork){
    console.log("Warp speed");
}else if (timeToWork > trafficWork){
   console.log("fast");
}else{
    drive = "speed limit"
}

