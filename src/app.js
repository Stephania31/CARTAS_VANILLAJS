/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let numeros = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

let suit = [
  { tipo: "♣", color: "black" },
  { tipo: "♠", color: "black" },
  { tipo: "♦", color: "red" },
  { tipo: "♥", color: "red" }
];

let randomNumeros = Math.floor(Math.random() * numeros.length);
let randomSuit = Math.floor(Math.random() * suit.length);
let color = "";
if (suit[randomSuit].color == "red") {
  color = "text-danger";
} else {
  color = "";
}

let finalCard = `
  <span class="top-symbol ${color}">${suit[randomSuit].tipo}</span>
  <span class="number">${numeros[randomNumeros]}</span>
  <span class="bottom-symbol ${color}">${suit[randomSuit].tipo}</span>
`;
let cardContainer = document.querySelector(".card");
cardContainer.innerHTML = finalCard;
