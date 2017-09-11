/*var saying = 'home sweet home';
var msg = '<h2>Length</h2><p>' +saying.Length+ '</p>';
msg += '<h2>Uppercase</h2><p>' +saying.toUpperCase() +'</p>';
msg += '<h2>Lowercase</h2><p>' +saying.toLowerCase() +'</p>';
msg += '<h2>charecter Index At 12:</h2><p>' + saying.charAt(12) +'</p>';
msg += '<h2>First ee:</h2><p>' + saying.indexOf(ee) + '<p/>';

var el = document.getElementById('info');
el.innerHTML = msg;

var randomNum = Math.floor((Math.random()*10)+1);
var el = document.getElementById("hey");
el.innerHTML = randomNum;

var today = new Date();
var year = today.getFullYear();

var rv=document.getElementById("footer");
rv.innerHTML = '<h3>Cpyright &copy' + year+'</h3>';
var est = new Date('february 20, 1996 15:45:56');
var difference = today.getTime() - est.getTime();
difference = (difference/20556900);

var estMes = document.getElementById("exprience");
estMes.textContent = Math.floor(difference) + ' Years Of Giving People Advice';*/

// placed inside immeidietly invoked function expression
(function(){
    //part one create a hotel object
    var hotel = {
        name:'Park',
        roomRate:240,
        discount:15,
        offerPrice:function(){
            var offerRate = this.roomRate * ((100-this.offerPrice)/100);
            return offerRate;
        }
    }
    var hotelName,roomRate,specialRate
    
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');
    
    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();
    
    //part two calculate the expirydate for the offer means when it s gonna ends ha ha
    
    var expiryMsg;
    var elEnds;
    var today; //the element that show the offer ending
    
    function offerExpires(today){
        var weekFromDay,day,date,month,year,dayNames,monthNames
        
        weekFromDay = new Date(today.getTime() + 7*24*60*60*1000)
        //day names
        dayNames = ['sunday','monday','tuesday','thursday','friday','saturday'];
        monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','oct','Nov','Dec'];
        
        //collect he parts of the day to show
        
        day = dayNames[weekFromDay.getDay()];
        date =weekFromDay.getDate();
        month = monthNames[weekFromDay.getMonth()];
        year = weekFromDay.getFullYear();
        
        //create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />( ' +date+ ' ' +month+ ' ' +year + ')';
        return expiryMsg;     
    }
    
    //wrie message
    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today)
    
}());

