
var preorderCD = prompt("Deciding how much you can spend on a CD preorder. Enter how much the preorder is that you want.");

var payCheck = prompt("Enter how much your check is");

var cost = payCheck - preorderCD;
var result = "You will have " + cost + "remaining from your check";
alert(result);


if(payCheck > preorderCD){
    console.log("You can't order it");
}else if(preorderCD > payCheck){
    console.log("You can order it!")

}else{
    console.log("You need to wait until you have enough money saved")

    }
