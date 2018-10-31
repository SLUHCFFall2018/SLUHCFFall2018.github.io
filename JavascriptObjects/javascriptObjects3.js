



// Below is an example of an object created using constructor notation
// A generic object is created and then the properties and methods are filled in
// after the object is created.


var hotel3 = new Object();  // object created

// properties and a method are added to the object

hotel3.name = "Los Anos";

hotel3.rating = 5;

hotel3.rooms = 400;

hotel3.booked = 340;

hotel3.pool = true;

hotel3.gym = true;

hotel3.roomTypes = ["twin", "suite", "luxury suite"];

hotel3.checkAvailability = function() {
	return this.rooms - this.booked;
};


var element1 = document.getElementById("hotelName");
element1.textContent = hotel3.name;


var element2 = document.getElementById("hasAPool");
element2.textContent = hotel3.pool;


var element3 = document.getElementById("roomTypes");
element3.textContent = hotel3.roomTypes[1];


var element4 = document.getElementById("roomsAvailable");
element4.textContent = hotel3.checkAvailability();



// NOTE: You can add or delete properties of any object no matter how it was created
// to add properties -->       hotel3.dogFriendly = true;
// to delete properties -->    delete hotel3.rating;


 












