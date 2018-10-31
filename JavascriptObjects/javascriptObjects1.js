

// Below is an example of an object created using literal notation


var hotel1 = {
	name: "El Segundo",
	rating: 4,
	rooms: 200,
	booked: 140,
	pool: true,
	gym: true,
	roomTypes: ["twin", "double", "king", "suite"],
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
	
};




var element1 = document.getElementById("hotelName");
element1.textContent = hotel1.name;
// NOTE: We could also use hotel1["name"] 


var element2 = document.getElementById("hasAPool");
element2.textContent = hotel1.pool;


var element3 = document.getElementById("roomTypes");
element3.textContent = hotel1.roomTypes[1];


var element4 = document.getElementById("roomsAvailable");
element4.textContent = hotel1.checkAvailability();
//NOTE: We could also use hotel1["checkAvailability"]()








 















