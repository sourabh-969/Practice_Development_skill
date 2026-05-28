let hascompletedCourse = true
let givesCertificate = true

if(hascompletedCourse === true || givesCertificate === false){
    generateCertificate()
}

function generateCertificate(){
    console.log("Generating certificate....")
}

//Ques-2

let dayOfMonth = 13
let weekday = "Friday"

// let d = new Date();
// let dayOfMonth = d.getDate()
// console.log(dayOfMonth)
// let weekday = d.getDay()
// console.log(weekday)


if ( dayOfMonth === 13 &&  weekday === "Friday"){
    console.log("😱")
}