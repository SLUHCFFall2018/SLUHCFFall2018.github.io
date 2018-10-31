





var hotel2 = {};  // empty object created

// properties and a method are added to the object

hotel2.name = "Los Altos";

hotel2.rating = 5;

hotel2.rooms = 400;

hotel2.booked = 340;

hotel2.pool = true;

hotel2.gym = true;

hotel2.roomTypes = ["twin", "suite", "luxury suite"];

hotel2.checkAvailability = function() {
	return this.rooms - this.booked;
};


var element1 = document.getElementById("hotelName");
element1.textContent = hotel2.name;


var element2 = document.getElementById("hasAPool");
element2.textContent = hotel2.pool;


var element3 = document.getElementById("roomTypes");
element3.textContent = hotel2.roomTypes[1];


var element4 = document.getElementById("roomsAvailable");
element4.textContent = hotel2.checkAvailability();






 












