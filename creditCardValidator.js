/*
Requirments for building credit Card Validator

1: Numbers must be between 13 and 16 digits(no less, no more)
	in java, user input must be collected and 
	converted to a string by concatinating to 
	an empty string quotation.
	
2: Card provider must be verified upon review of the first digits
3: Using Hans Luhn's algorithm for validation(determine if a card is entered correct, using the mod 10 check);
	
	steps:
	
	m
	its produces result in tens, sum the units of the tens to make a whole.
		
	2. Add all single digits from from the first operation
	
	3. Sum the numbers in the odd posiitons from rigth to left(from the input)
	
	4. sum the results from step 2 and 3
	
	5. (conditional/decision making) check if the sum derived from step 4 is divisible by 10 without a remainder.
		If it is, then the card is valid.
		If it ain't the card is invalid.
*/



'use strict';

console.log(validateCreditCardNumber(5151127565816307));

function validateCreditCardNumber(input) {
	
	let creditCardNumber = input.toString().split().map(Number);
	
	if (creditCardNumber.indexOf(0) == 3 && creditCardNumber.indexOf(1) == 7) {
		
		let feedBack = "This is an American Express";
	
	} else if (creditCardNumber.indexOf(0) == 4) {
		
		let feedBack = "This is a Visa Card";
	
	} else if (creditCardNumber.indexOf(0) == 5) {
		
		let feedBack = "This is a MasterCard";
	
	} else if (creditCardNumber.indexOf(0) == 4) {
		
		let feedBack = "This is a Discover Card";
	
	}
	
	for (let i = creditCardNumber.length - 2; i >= 0; i = i - 2) {
		
		let tempValue = creditCardNumber[i];
		
		tempValue = tempValue * 2;
		
			if (tempValue > 9) {
				
				tempValue = tempValue % 10 + 1;
				
			}
			
			creditCardNumber[i] = tempValue;
		
	}
	
	let total = 0;
	let result = null;
	
	for (let i = 0; i < creditCardNumber.length; i++) {
		
		total += creditCardNumber[i];
		
	}
	
	if (total % 10 == 0) {
		
		console.log(`${feedBack}\nThis card is valid`);
		
	} else {
		
		console.log("Not a valid Card");
	}
	return result;
	
}