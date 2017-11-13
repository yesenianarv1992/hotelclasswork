 var hotel = { 
     
 name: 'biltmore',
 rooms: 500,
 roomsbooked: 150,
 roomService: 'true',
 pool: 'false',
 Roomsavail: function() {
     
return this.rooms - this.roomsbooked;
 }
 };
 
 
 
function total() {
    document.getElementById("hotelname").innerHTML = hotel.name;
    document.getElementById("totalrooms").innerHTML = hotel.rooms;
    document.getElementById("availrooms").innerHTML = hotel.Roomsavail();
}

 