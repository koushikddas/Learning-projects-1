var pass = 50 //pass mark
var score = 90  //scoreed marks

var hasPassed = pass >= score //check if user has passed

var el = document.getElementById('answer');
el.textContent = 'Level Passed: ' + hasPassed;