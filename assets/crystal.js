var randNum = [];
for (var i = 25; i <= 101; i++) {
randNum.push(i);
}


var randNumUser = [];
for (var j = 1; j <= 10; j++) {
randNumUser.push(j);
}


var guess = randNum[Math.floor(Math.random() * randNum.length)];
var userGuess = randNumUser[Math.floor(Math.random() * randNumUser.length)];


var div = document.getElementById('randNumber');

div.innerHTML += guess;

var crystal = document.getElementById('num');

crystal.innerHTML += userGuess;

var totals = document.getElementById('total');

totals.innerHTML += sum();

var start = false;
var winnerLooser = false;
var wins = 0;
var loss = 0;

function sum() {  
;
}



function start(){
start = true;
$("#start").on("click", start);
} 



if (start === true) {


  if (total === randNum) {
    wins++;

  } else if (total > randNum) {
    loss++;
  }


$("#reset").on("click", reset);
$("#start").on("click", start);

}

