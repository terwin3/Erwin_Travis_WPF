/**
 * Created by Travis on 10/8/14.
 */
//Calculating how much a song is for a band to record based on members
var members = prompt ("We are calculating how much a song is to record based on how many members are in a band not calculating mixing and graphic design. Please enter how many members are in your band"); //Band members in band
var songCost = 400; //Cost per song
var membersCost = members * songCost;
console.log(membersCost);
var result = "It will cost " +  membersCost;
alert(result);



