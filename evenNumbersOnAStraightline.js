let evenNumbers = [];


let text = "The even numbers between 1 to 20 are: ";

for (let count = 1; count <= 20; count++) { 

	if ( count % 2 === 0) evenNumbers.push(count);	

}


for (let i = 0; i < evenNumbers.length; i++) {

	console.log(evenNumbers[i]);

}



