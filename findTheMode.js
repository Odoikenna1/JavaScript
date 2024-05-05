//initialize variables

let numbers = [1,1,2,3,4];

let numbers2 = [3,4,4,5,6];

let sum1 = 0;

let sum2 = 0;

let mode1 = 0;

let mode2 = 0;

for (let count = 0; count < numbers.length; count++) {
		
	sum1 += numbers[count];	

}
	mode1 = sum1 % 10;


for (let count = 0; count < numbers2.length; count++) {
		
	sum2 += numbers2[count];	

}
	mode2 = sum2 % 10;

	mode2 = mode2 + 2;


	console.log(mode1);

	console.log(mode2);