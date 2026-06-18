let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const textEl = document.querySelector("#text-el");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
//   myLeads.push(textEl.value);

  //   renderLeads();

  renderLead();

  textEl.value = "";
});

function renderLead() {

  let listItems = 
  `
    <li>
        <a href="${textEl.value}" target='_blank'>  ${textEl.value} </a>
    </li>
  `

  ulEl.innerHTML += listItems;
}

// function renderLeads() {
//   let listItems = "";
//   for (let i = 0; i < myLeads.length; i++) {
//     listItems += "<li>" + myLeads[i] + "</li>";
//   }
//   ulEl.innerHTML = listItems;
// }
