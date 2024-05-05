let x = [1,2,3,4,5,6,7,8,9,10];

min = x[0];

max = x[0];

for (i = 0; i < x.length; i++) {

	if (min < x[i]) {

	min = x[i];

	}

	if (max > x[i]) {

	max = x[i];

	}


}

console.log(min);

console.log(max);