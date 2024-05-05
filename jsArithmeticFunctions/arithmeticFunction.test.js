const {addFunction, reassignArrayElements} = require("./arithmetic_functions.js");


test("add two numbers", () => {
	let numeOne = 2;
	let numTwo = 5;
	let ans = addFunction(2,5)
	expect(ans).toBe(7);
});

test("re-assign the numbers at odd index of the array to new array", () => {
	let arrayofNumbers = [1,2,3,4,5,6];
	let arrayResult = reassignArrayElements(arrayofNumbers);
	expect(arrayResult).toEqual([2,4,6])

});

