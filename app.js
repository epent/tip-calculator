"use strict";

const enteredBillAmount = document.querySelector(".section-bill input");
const tipButtons = document.querySelectorAll(".section-tip__buttons button");
const tipInput = document.querySelector(".section-tip__buttons input");
let tipPercent = 0;
const peopleInput = document.querySelector(".section-people input");
const tipAmount = document.querySelectorAll(".section-output__amount")[0];
const totalAmount = document.querySelectorAll(".section-output__amount")[1];
const resetButton = document.querySelector(".section-output button");

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tipButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.setAttribute("class", "active");

    switch (button.textContent) {
      case "5%":
        tipPercent = 5;
        break;
      case "10%":
        tipPercent = 10;
        break;
      case "15%":
        tipPercent = 15;
        break;
      case "25%":
        tipPercent = 25;
        break;
      case "50%":
        tipPercent = 50;
        break;
    }
  });

  button.addEventListener("click", splitBill);
});

function addCustomTip() {
  tipPercent = tipInput.value;
}

function splitBill() {
  // check Number Of People input
  let numberOfPeople;
  peopleInput.value
    ? (numberOfPeople = peopleInput.value)
    : (numberOfPeople = 1);

  // count and output tip
  const tip =
    (Number(enteredBillAmount.value) * Number(tipPercent)) /
    100 /
    Number(numberOfPeople);

  tipAmount.textContent = `$${tip.toFixed(2)}`;

  // count and output total
  const total = Number(enteredBillAmount.value) / Number(numberOfPeople) + tip;

  totalAmount.textContent = `$${total.toFixed(2)}`;
}

function resetBill() {
  enteredBillAmount.value = "";
  peopleInput.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  tipInput.value = "";
  tipPercent = 0;

  tipButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

tipInput.addEventListener("change", addCustomTip);
tipInput.addEventListener("change", splitBill);
peopleInput.addEventListener("change", splitBill);
enteredBillAmount.addEventListener("change", splitBill);
resetButton.addEventListener("click", resetBill);
