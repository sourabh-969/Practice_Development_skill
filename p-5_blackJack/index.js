let firstcard = 6;
let secondcard = 9;

let sum = firstcard + secondcard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let cardsEl = document.getElementById("card-el");
console.log(cardsEl);

let sumEl = document.querySelector("#sum-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent += firstcard + " & " + secondcard;
  sumEl.textContent += sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "you are out of the Game!";
    isAlive = false;
  }

  messageEl.textContent = message;
  console.log(message);
  console.log("hasBlackJack: " + hasBlackJack);
  console.log("isAlive: " + isAlive);
}

function newCard() {
  let variableCard = 6;

  sum = sum + variableCard;

  renderGame();
}
