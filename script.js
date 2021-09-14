"use strict";

const btn = document.querySelector(".btn");
btn.addEventListener("click", setColor);

function setColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.querySelector(".container").style.backgroundColor = "#" + randomColor;
  document.querySelector(".btn").style.backgroundColor = "#" + randomColor;
}