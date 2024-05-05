function addFunction(a, b){
	return a + b;
};



function reassignArrayElements(numbers){
	
	let newArrayOfNumbers = []
	
	for (let index of numbers) {
		if (index % 2 == 0) {
			
		newArrayOfNumbers[index] = numbers[index];
		
		}
	}
	return reassignArrayElements(numbers);


}
//console.log(reassignArrayElements(arrayofNumbers) + "");
module.exports = {addFunction, reassignArrayElements};

let numOne = 2;
let numTwo = 5;

function summation(x,y){
	return x + y;
}
console.log(summation(numOne,numTwo));

/*function sumOfFunctionTotal(summation1, summation2){
	return summation1 + summation2;

}
console.log(sumOfFunctionTotal(function1, function2));*/