// FUNCTION DECLARATION

function calcDistance(x1, y1, x2, y2) {
	var diffX = (x1 - x2);
	var diffY = (y1 - y2);
	var diffXSquared = Math.pow(diffX, 2);
	var diffYSquared = Math.pow(diffY, 2);
	var distance = Math.sqrt(diffXSquared + diffYSquared);
	return distance;
}

var theDistance = calcDistance(4,2,7,6);

var el1 = document.getElementById("first");

el1.textContent = theDistance;

// NOTE: We could have made this shorter by using    distance = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2))


//***********************************************************************************************************

// FUNCTION EXPRESSION

var randomNumber = function calcRandomNumber (n) {
	var randNum = Math.round(Math.random() * n);
	return randNum;
};

var theRandomNumber = randomNumber(10);

var el2 = document.getElementById("second");

el2.textContent = theRandomNumber;


//**********************************************************************************************************

// IMMEDIATELY INVOKED FUNCTION (IIFE)

var calculate = (function () {
	var someNumber = 20;
	var otherNumber = 50;
	var sum = someNumber + otherNumber;
	var el3 = document.getElementById("third");
	el3.textContent = sum;
}());



// The outermost set of parentheses are grouping symbols and tell the interpreter to treat the function as an expression
// The set of parentheses right after the closing curly brace tell the interpreter to call the function immediately

// IIFE are used for code that only needs to run once within a task, rather than repeatedly being called by other parts of a script
// For example, -as an argument when a function is called to calculate a value for that function
// -to assign the value of a property to an object
// -in event handlers and listeners to perform a task when an event occurs
// -to prevent conflicts between two scripts that might use the same variable names