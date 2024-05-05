let x1 = [1,2,2,2,3];
let x2 = [2,3,5,1,2];


let max1 = x1[0];
let max2 = x2[0];

for (let i = 0; i < x1.length; i++) {

	if (max1 < x1[i]) {

	max1 = x1[i];

	}
	
	if (max2 < x2[i]) {

	max2 = x2[i];

	}


}

console.log(max1[0]);
console.log(max2[0]);