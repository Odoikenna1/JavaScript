const arr1 = [6,4,3,2,21,1];

for (let i = 0; i < arr1.length; i++) {
	console.log(arr1[i + ""]);
}

console.log(" ");

/*======================================*/

let arr2 = [1,2,3,4,4,5];
for (index of arr2) {
	console.log(arr2[index]);
}



console.log(" ");

/*======================================*/

const arr = [1,2,3,4,5,6];

let userObject = {

	name: "Janet",
	age: 3,
	cohort: 100,
	sex: "both"

};

for (let key in userObject) {
	console.log(userObject[key]);
}

console.log(" ");
/*======================================*/
