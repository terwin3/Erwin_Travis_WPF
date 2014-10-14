
var preorderCD = prompt("Deciding how much you can spend on a CD preorder. Enter how much the preorder is that you want.");

var payCheck = prompt("Enter how much your check is");

var cost = payCheck - preorderCD;
var result = "You will have " + cost + "remaining from your check";
alert(result);



if(payCheck < preorderCD){
    console.log("You can have it!");

}else if(payCheck > preorderCD){
    console.log("You can't have it.");
}else{
    console.log("You'll have to wait until you get enough");
}