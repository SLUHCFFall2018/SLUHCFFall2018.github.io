
var msg = "This is an updated message";

function updateMessage() {
	var el = document.getElementById("info");
	el.textContent = msg;
}

updateMessage(); // Here the function is called.


// ***********************************************************************


function getArea(w, h) {
	return w * h;
}

var theArea = getArea(window.innerHeight, window.innerWidth); // Here the function is called 

var el2 = document.getElementById("measure");

el2.textContent = theArea + " is the area";


// ***********************************************************************


var theDate = new Date(); // This is a built-in javascript object

var sec = theDate.getSeconds();

document.write(sec + " seconds have passed");

var output;

function getOutput(s) {
	if(s > 30)
		output = "MORE than 30 seconds";
	else
		output = "LESS than 30 seconds";
	return output;
}


var el3 = document.getElementById("time");

el3.textContent = getOutput(sec);
	

