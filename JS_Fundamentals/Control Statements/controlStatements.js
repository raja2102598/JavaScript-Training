// // control statements 
// // if

// var i = 10;

// if (i > 15) {
//  document.write("10 is less than 15");
// }
// document.write("it is not a if statement");


// // if else statement
// var i = 10;

// if (i < 15) {
//  document.write("10 is greater than 15");
// }
// else {
//  document.write("10 is less than 15");
// }

// // nested if :

// var i = 20;

// if (i == 10) {
//  document.write("i is 10");
// }
// else if (i == 15) {
//  document.write("i is 15");
// }
// else if (i == 20) {
//  document.write("i is 20");
// }
// else {
//  document.write("i is not present");
// }

var password=prompt("Enter Password");

if(password=="1234"){
    console.log("Success");
}
else if(password.length<=0){
    console.log("Enter Something");
}else{
    console.log("Wrong Password");
}