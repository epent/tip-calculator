"use strict";

const enteredBillAmount = document.querySelector(".section-bill input");
const numberOfPeople = document.querySelector(".section-people input");
const tipPercent = 15;
const tipAmount = document.querySelectorAll(".section-output__amount")[0];
const totalAmount = document.querySelectorAll(".section-output__amount")[1];

function splitBill(event) {
  const tip =
    (Number(enteredBillAmount.value) * Number(tipPercent)) /
    100 /
    Number(numberOfPeople.value);

  tipAmount.textContent = `$${tip.toFixed(2)}`;

  const total =
    Number(enteredBillAmount.value) / Number(numberOfPeople.value) + tip;

  totalAmount.textContent = `$${total.toFixed(2)}`;
}

numberOfPeople.addEventListener("change", (event) => splitBill(event));
