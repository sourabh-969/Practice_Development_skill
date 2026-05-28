let num = Math.floor( Math.random()*6); // 0.0000-5.9999


console.log (num) //0.0000-5.9999

function randomNum(){
    let num = Math.floor( Math.random()*6)+1 // 1 -6
    return num
}

console.log(randomNum())