
/* When we need to store several related variables it is common to use an array.
An array is a data structure in which the variables are grouped together */

/* NOTE --- UNLIKE other programming languages all the elements in an array DO NOT
have to be the same data type */

/* Below we create an array using the "array literal" technique */

var colorsOne = ["green", "black", "orange", "blue"];

var el = document.getElementById("first");


/* We access a value in the array by using the array name and then square brackets with a number
corresponding to the value */

el.textContent = colorsOne[3];   // What value is this? 


/* Below we create an array using the "array constructor" technique */

var colorsTwo = new Array("yellow", "white", "maroon");

var el = document.getElementById("second");

el.textContent = colorsTwo[1];