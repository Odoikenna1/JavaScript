//switch case

const prompt = require("prompt-sync")();
let day = prompt("What day is it? ");

switch(day.toLowerCa
se()) {
	case "monday":
		console.log("Today is Monday");
		break;
		
	case "tuesday":
		console.log("Today is Monday");
		break;
	case "wednesday":
		console.log("Today is Monday");
		break;
	case "thursday":
		console.log("Today is Monday");
		break;
	case "friday":
		console.log("Today is Monday");
		break;
	default:
		console.log("Any other day");
}