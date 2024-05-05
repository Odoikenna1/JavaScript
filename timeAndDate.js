const prompt=require("prompt-sync")();

let time = prompt("What is the time in your area? ");

if (time < 12) {
	console.log("Good Monrning");
} else if (time >= 12 && time <= 16) {
	console.log("Good Afternon");
} else {
	console.log("Good evening");
}
