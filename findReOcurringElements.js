//initialize variables

let numbers = [1,1,2,3,4];

let numbers2 = [3,4,4,5,6];

let reoccurringNumbers = 0; 

for (let i = 0; i < numbers.length; i++) {
	
	for (let j = 0; j < numbers.length; j++) {
	
		if (numbers[i] == numbers[j]) {

		reoccurringNumbers = numbers;

		}
		
	}

}

console.log(reoccurringNumbers);	
