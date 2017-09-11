/*var scores = [22,26,23,45];
var arrLenth = scores.length;
var roundNum = 0;
var msg = '';
var i;

for(i=0;i<arrLenth;i++){
    //arrays are zero based  so add 1 to current number
    roundNum = (i+1);
    //write current round to message
    msg += 'Round ' + roundNum + ': ';
    //get the scores from the scores array
    msg += scores[i] + '<br />';
}
document.getElementById('answer').innerHTML = msg;*/

var table = 3;
var operator = 'addition';
var i = 1;
var msg = '';

if(operator === 'addition'){
    while(i<11){
        msg += i + ' + ' + table + ' = ' + (i+table) + '<br />';
    }
}