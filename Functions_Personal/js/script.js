/**
 * Created by Travis on 10/21/14.
 */

var weatherWarm = prompt("We are deciding if you should wear shorts or jeans to work tomorrow. What is the high temp tomorrow?");
var weatherChilly = prompt("What is the low temp for tomorrow?");
//prompts for the user to interact


if(weatherChilly > weatherWarm){
    //wear jeans
    console.log("You should wear jeans tomorrow.");


}else if(weatherChilly < weatherWarm){
    //wear shorts
    console.log("You should wear shorts tomorrow.");



}else{
    //if weather is cold nor warm
    console.log("Wear what you think is best.");
}