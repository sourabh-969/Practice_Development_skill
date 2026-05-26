
let player ={
    name:"Mukesh",
    credit:145,
    sayHello: function(){
      console.log("Heisann!")
    }
}
player.sayHello()
let cards = []; // array
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("card-el");
let sumEl = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name +" : "+"$"+player.credit;

// console.log(cards)

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1;
  if (randomNumber > 10){
    return 10
  }
  else if( randomNumber === 1)
    {return 11}
  else{
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard,secondCard]
  sum = firstCard + secondCard
  renderGame();

}

function renderGame() {
  cardsEl.textContent = "Card: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum:" + sum;

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
}

function newCard() {
  if (hasBlackJack === false && isAlive === true){
  let card = getRandomCard();
  sum = sum + card;
  cards.push(card);
  renderGame();
  }
  else {
  messageEl.textContent = "start new game_ press F5 key";
  }
}
