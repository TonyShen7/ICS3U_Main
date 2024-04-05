let age = prompt("What is your current age?");
if (age>=50) {
    console.log("congratulation, you qualify for the senior discount!");
}
if (age<16) {
    console.log("Sorry, you are not old enough to drive.");
}
let user_name = prompt("What is your username?");
if (user_name=="Mr.J"){
    console.log("🐠");
}
if (user_name.length>7){
console.log("You have a long name.");
}
let name = prompt("How long is your user name?");
if (name==user_name.length){
    console.log("You are correct!✔️");
}
if (name<user_name.length){
    console.log("Too low!✖️");
}
if (name>user_name.length){
    console.log("Too high!✖️");
}
