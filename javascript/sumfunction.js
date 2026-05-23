let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function sum() {
  console.log(lap1 + lap2 + lap3);
}

sum();

let lapscompleted = 0;

function incrementlap() {
  lapscompleted = lapscompleted + 1;
//   console.log(lapscompleted);
}
incrementlap();
incrementlap();
incrementlap();

console.log(lapscompleted);
