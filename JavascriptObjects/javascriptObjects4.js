

// Below is an example of an object created using constructor notation
// An object template is created and then many objects can be created
// using this template


function Hotel4(nm, rtng, rms, bkd, pl, gm, rmTps) {
	this.name = nm;
	this.rating = rtng;
	this.rooms = rms;
	this.booked = bkd;
	this.pool = pl;
	this.gym = gm;
	this.roomTypes = rmTps;
	this.checkAvailability = function() {
		return this.rooms - this.booked;
	};
}


var typeOfRooms = ["single", "double", "queen"];
var myHotel = new Hotel4("Mi Amigo", 3, 100, 99, true, false, typeOfRooms);
var myHotel2 = new Hotel4("The dump", 1, 14, 13, false, false, typeOfRooms);



var element1 = document.getElementById("hotelName");
element1.textContent = myHotel.name;


var element2 = document.getElementById("hasAPool");
element2.textContent = myHotel.pool;


var element3 = document.getElementById("roomTypes");
element3.textContent = myHotel.roomTypes[1];


var element4 = document.getElementById("roomsAvailable");
element4.textContent = myHotel.checkAvailability();

