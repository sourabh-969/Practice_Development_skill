let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.pop() // last element from remove
largeCountries.push("pakistan")// add at last element

largeCountries.shift(); //Remove element from start
largeCountries.unshift("China");// Add element at start

let updateArray = largeCountries;

for (let i=0; i<updateArray.length; i++){
    console.log(updateArray[i]);
}