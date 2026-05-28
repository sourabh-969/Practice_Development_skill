let age = 15

function critier (){
    if ( age<=6){
    return "Free"
}
else if(age>6 && age<=17){ //condition - age <18
    return "child discount"
}
else if (age >=18 && age <=26){ //condition - age <27
    return "sStudent Discount"
}
else if (age >=27 && age <=66){ //condition - age <67
    return "Full price"
}
else{
    return "Senior citizen discount"
}
}

let output = critier();
console.log(output);
