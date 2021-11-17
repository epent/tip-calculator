"use strict";

const enteredBillAmount = document.querySelector(".section-bill input");
const numberOfPeople = document.querySelector(".section-people input");
const tipPercent = 15;
const tipAmount = document.querySelectorAll(".section-output__amount")[0];
const totalAmount = document.querySelectorAll(".section-output__amount")[1];
const resetButton = document.querySelector(".section-output button");

function splitBill(event) {
  // count and output tip
  const tip =
    (Number(enteredBillAmount.value) * Number(tipPercent)) /
    100 /
    Number(numberOfPeople.value);

  tipAmount.textContent = `$${tip.toFixed(2)}`;

  // count and output total
  const total =
    Number(enteredBillAmount.value) / Number(numberOfPeople.value) + tip;

  totalAmount.textContent = `$${total.toFixed(2)}`;
}

function resetBill() {
  console.log("clicked");
  enteredBillAmount.value = "";
  numberOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
}

numberOfPeople.addEventListener("change", (event) => splitBill(event));
resetButton.addEventListener("click", resetBill);
