var score = 75;
var msg = '';

function congratulations(){
  msg += 'congratulatiolations sorry for the spelling mistake';
}

if (score >= 50){
  congratulations();
  msg += '<p>Procced To The Next Round!</p>';
}
var el = document.getElementById('answer');
el.innerHTML = msg;
