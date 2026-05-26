// for ( let i =0; i<=1000; i+=100){
//     console.log(i)
// }

// for ( let count=10; count<=100; count +=10){
//         console.log(count)

// }

console.log([]==![])// type coverstion--it change into empty string

// for loop ,array
let info = [
    "experience",
    "education",
    "licenses",
    "skills"
]

for ( let i= 0; i<= info.length; i++)
{
    // console.log("info: " + info[i]);
}

//loop , array and DOM

let container = document.querySelector("body");
let greetingEl = document.createElement("p");
container.appendChild(greetingEl);

// console.log(container)

for(let i = 0; i<=info.length; i++){
    greetingEl.textContent += info[i] + "\n";
}




