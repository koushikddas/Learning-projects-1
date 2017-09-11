/**
 * Created by Koushik Das on 7/22/2017.
 */
var greeting = 'Howdy';
var name = 'koushik';
var message = ', please check your order';

//concatenate three variables
 var welcome = greeting + name + message;

 //create variables to hold about the sign
 var sign = 'Pancho Villa';
 var tiles = sign.length;
 var subTotal =tiles * 5;
 var shipping = 7;
 var grandTotal = subTotal + shipping;

 //get the element that has a id of greeting
var el = document.getElementById('greeting');

//replace the context of that element by personal message
el.textContent = welcome;

//

var elSign = document.getElementById('userSign');
elSign.textContent = tiles;

//get the element subtotal then update
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = '$'+ shipping;

//get the element shipping then update it
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById( 'grandTotal') ;
elGrandTotal.textContent = '$' + grandTotal;

var msg = 'Sign Up To Get Extra 10% off';
function updateMessage(){
 var el = document.getElementById('message');
 el.textContent = msg;
}
updateMessage();

function calculateArea() {
 var getWidth = window.prompt('Please enter the width:');
 var getHeight = window.prompt('Please enter the height:');
 var calValue = getWidth * getHeight;
 var eleo =document.getElementById('homearea');
 eleo.textContent = calValue + ' sq ft';
}
calculateArea();

function getfeature(height,weight,bodyfat) {
 var eligible = height + weight;
 var morethaneligible =height + weight + bodyfat;
 var iseligible = [eligible,morethaneligible];
 return iseligible;

}
getfeature(6,75,14)[0];