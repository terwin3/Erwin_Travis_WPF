/**
 * Created by Travis on 10/14/14.
 */
var preorderCD = prompt("Deciding how much you can spend on a CD preorder. Enter how much the preorder is that you want.");

var payCheck = prompt("Enter how much your check is");

var cost = payCheck - preorderCD;//calculates how much check will be after CD order
var result = "You will have " + cost + "remaining from your check";
alert(result); //Gives result of remaining check



if(payCheck < preorderCD){
    console.log("You can't have it!");//you can have the preorder

}else if(payCheck > preorderCD){
    console.log("You can have it.");//can't have the preorder
}else {
    console.log("You'll have to wait until you get enough");//not enough to order the preorder
}