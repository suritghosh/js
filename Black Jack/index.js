let a = [];
a[0] = randomizer();
a[1] = randomizer();
let sum = a[0] + a[1];
let hasBlackJack = false;
let isAlive = true;
let isReallyAlive = true;
message = "";
let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
i = 0;
k = 2;
l = 1;
player = {
  name: "Surit",
  chips: 123,
};
let playerEl = document.getElementById("player-el");
playerEl.innerText = player.name + ": ₹" + player.chips;
console.log(playerEl.innerText);
startGameFlag = false;
document.getElementById("newCards").disabled = true;
function startGame() {
  startGameFlag = true;
  i++;
  if (sum < 21) {
    message = "Do you want to draw a new card?";
    console.log(sum);
  } else if (sum === 21) {
    message = "You've got Black Jack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  if (startGameFlag == true && sum < 21) {
    document.getElementById("newCards").disabled = false;
  } else {
    document.getElementById("newCards").disabled = true;
  }

  if (i < 2) {
    sumEl.innerText = sumEl.innerText + " " + sum;
    cardEl.innerHTML += " " + a[0] + " " + a[1];
  }
}

function newCard() {
  k++;
  l++;
  for (j = l; j < k; j++) {
    a[j] = randomizer();
    sum += a[j];
    cardEl.innerHTML += " " + a[j];
    sumEl.innerText = "Sum: " + sum;
    startGame();
  }
}

function randomizer() {
  randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber == 1) randomNumber = 11;
  else if (randomNumber == 11 || randomNumber == 12 || randomNumber == 13)
    randomNumber = 10;
  return randomNumber;
}
