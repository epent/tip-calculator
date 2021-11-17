"use strict";

const enteredBillAmount = document.querySelector(".section-bill input");
const tipButtons = document.querySelectorAll(".section-tip__buttons button");
const tipInput = document.querySelector(".section-tip__buttons input");
let tipPercent = 0;
const numberOfPeople = document.querySelector(".section-people input");
const tipAmount = document.querySelectorAll(".section-output__amount")[0];
const totalAmount = document.querySelectorAll(".section-output__amount")[1];
const resetButton = document.querySelector(".section-output button");

function activateButton(button) {
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
}

function addCustomTip() {
  tipPercent = tipInput.value;
}

function splitBill() {
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
  enteredBillAmount.value = "";
  numberOfPeople.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  tipInput.value = "";

  tipButtons.forEach((btn) => {
    btn.classList.remove("active");
  });
}

tipInput.addEventListener("change", addCustomTip);
numberOfPeople.addEventListener("change", splitBill);
resetButton.addEventListener("click", resetBill);

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateButton(button);
  });
});
