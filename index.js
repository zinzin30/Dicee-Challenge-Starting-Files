var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document
  .querySelector(".dice .img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");
document
  .querySelector(".dice .img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

randomNumber1 === randomNumber2
  ? (document.querySelector(".container h1").innerHTML = "Draw!")
  : randomNumber1 > randomNumber2
  ? (document.querySelector(".container h1").innerHTML = "🚩 Player1 Wins!")
  : (document.querySelector(".container h1").innerHTML = "Player2 Wins! 🚩");
