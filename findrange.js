let num1 = [7,4,2,3,4];
let num2 = [9,2,1,8,6];
let max1 = num1[0];
let min1 = num1[0];

let max2 = num1[0];
let min2 = num1[0];

let result1 = [1];
let result2 = [1];



for (let i = 0; i < num1.length; i++) {
	if (num1[i] < min1){
		min1 = num1[i];
	}
	if (num1[i] > max1){
		max1 = num1[i];
	}
}


for (let i = 0; i < num2.length; i++) {
	if (num2[i] < min2){
		min2 = num2[i];
	}
	if (num2[i] > max2){
		max2 = num2[i];
	}
}

result1[0] = max1 - min1;
console.log(result1);

result2[0] = max2 - min2;
console.log(result2);

