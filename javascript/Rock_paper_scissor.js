let hand = ["rock", "paper", "scissor"]

function winnerHand(){
    let i = Math.floor(Math.random()*3); //0 - 2.999

    console.log(hand[i])
}
winnerHand()