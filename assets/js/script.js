import * as utils from "./Utils.js";
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let result = document.querySelector(".result");
  // if (validDay && validMonth && validDay) {
  let year = document.querySelector("#year").value;
  let month = document.querySelector("#month").value;
  let day = document.querySelector("#day").value;
  if (utils.validateDate(year, month, day)) {
    let age = utils.calculateAge(year, month, day);
    result.innerHTML = `You are ${age} years old`;
    result.classList.remove("hide");
    return;
  } else {
    result.innerHTML = "Please enter a valid date";
    result.classList.add("error");
    result.classList.remove("hide");
  }
});
