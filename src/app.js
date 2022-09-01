/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let simbolo = ["J", "Q", "K", "A", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let random = Math.floor(Math.random() * (simbolo.length - 1));
  document.querySelector("#numero").append(simbolo[random]);

  let iconos = ["♦", "♥", "♠", "♣"];
  let randomIconos = Math.floor(Math.random() * (iconos.length - 1));
  document.querySelector("#simbolo").append(iconos[randomIconos]);
  document.querySelector("#simbolo2").append(iconos[randomIconos]);
  if (iconos[randomIconos] === "♦" || iconos[randomIconos] === "♥") {
    document.querySelector("#simbolo").style.color = "red";
    document.querySelector("#simbolo2").style.color = "red";
  }
};
