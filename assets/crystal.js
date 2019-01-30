
var randNum = [];
for (var i = 45; i <= 101; i++) {
randNum.push(i);
}


var guess = randNum[Math.floor(Math.random() * randNum.length)];    
var div = document.getElementById('number-to-guess');
div.innerHTML += guess;



  var counter = 0;
  
  var div3 = document.getElementById('total');

div3.innerHTML += counter;

  var userGuess = [10, 5, 3, 7];

$('#userguess1').text(userGuess[0]);
$('#userguess2').text(userGuess[1]);
$('#userguess3').text(userGuess[2]);
$('#userguess4').text(userGuess[3]);
 

  

  $(".crystal-image").on("click", function() {
    for (var i = 0; i < userGuess.length; i++) {
        var crystalValue = (userGuess[i]);
        crystalValue = parseInt(crystalValue);
    counter += crystalValue;
    alert("New score: " + counter);
    

    if (counter === guess) {
      alert("You win!");
      $('#wins').text('YOU WIN!');
    }

    else if (counter >= guess) {
      alert("You lose!!");
      $('#loss').text('YOU\'RE DONE!');
    }
}

  });
