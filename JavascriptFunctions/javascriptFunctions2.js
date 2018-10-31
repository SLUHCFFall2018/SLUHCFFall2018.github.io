

function calculate(w, h) {
	var area = w * h;
	var perimeter = 2*w + 2*h;
	var measures = [area, perimeter];
	return measures;
}

var theArea = calculate(8,12)[0];

var thePerimeter = calculate(8, 12)[1];

var el1 = document.getElementById("first");

el1.textContent = theArea + " is the area";

var el2 = document.getElementById("second");

el2.textContent = thePerimeter + " is the perimeter";



