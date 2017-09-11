var hola = {
    height : 15,
    weight : 129,
    eating : function goodfood(){
        slert('She Eats Good Food');
    },
    air : function (){
        return this.height - 14;
    }
}


function Hotel(name,rooms,booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	}
}
var puriHotel = new Hotel('puri',40,25);

var details1 = puriHotel.name + ' rooms:';
details1 += puriHotel.checkAvailability();

var elhotel1 = document.getElementById("hotel1");
elhotel1.textContent = details1;

var width = 600;
var shape = {width:300};
var showWidth = function(){
    document.write(this.width);
}
var rv2 = document.getElementById('fuck');
rv2.textContent = showWidth(); 

var msg = '<h2>Tab History</h2>'<p>History:' + window.History +' </p>';

var rv3 = document.getElementById('history');
rv3.innerHTML = msg;