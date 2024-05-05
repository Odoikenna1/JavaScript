/*
Find the first 15 
multiples of 3
*/

let multiples = 0;

let index = 0;

for (count = 3; count <= 15; count++) {

	if (count % 3 == 0) multiples = count;
	
	process.stdout.write(multiples + " ");
index++;
}

