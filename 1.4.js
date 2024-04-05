const prompt = require('prompt-sync')();
let year = prompt("When were you born?");
console.log("You were born on: "+year);
let old = 2024-year;
console.log("you are likely "+old);
let name = prompt("What is your name");
console.log("Hi "+name+"! You were born on "+year+" and you are "+old+" years old!");
console.log("Your name is "+name.length+" long");