const prompt = require("prompt-sync")();

let login_password = prompt("Enter your Password: ");

//login > 15;

let message = login_password.length > 5 ? console.log("Password is correct") : console.log("Incorrect Password");