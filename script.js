// DOM ELEMENTS :
const button = document.querySelector(".click-event");
const focus = document.getElementsByClassName("focus-event")[0];
const key = document.getElementById("key");
const hidden = document.getElementById("hidden");
const input = document.querySelectorAll(".input-event")[0];
const display = document.querySelector("#display");
const xcord = document.querySelector(".x-cord");
const ycord = document.querySelector(".y-cord");
const body = document.getElementsByTagName("body")[0];
const mouse = document.querySelector(".mouse-event");
const circle = document.querySelector(".circle");

// circle.addEventListener("click", function(e) {
//   console.log(e);
// });

// EVENT LISTENERS :

// elementToAddEventListenerTo.addEventListener('event-type', function(e) {
//   //Do something
// })

// CLICK :
// DISPLAY THE HIDDEN TEXT

button.addEventListener("click", function(e) {
  hidden.id = "";
  hidden.style.backgroundColor = "yellow";
  const blah = document.querySelector("#blah");
  let newDiv = document.createElement("div");
  newDiv.style.width = "200px";
  newDiv.style.height = "200px";
  newDiv.style.backgroundColor = "red";
  blah.appendChild(newDiv);
});

// FOCUS :
// ADD SOME STYLE TO THE INPUT BOX

focus.addEventListener("focus", function(e) {
  focus.style.backgroundColor = "limegreen";
});

// KEY-UP/KEY-DOWN :
// TRACK THE KEY

body.addEventListener("keypress", function(e) {
  console.log(e);
  if (e.code === "Space") {
    display.textContent += " ";
  } else {
    display.textContent += e.key;
  }
});

// INPUT :
// FINISH THE SENTENCE

// MOUSE-ENTER/MOUSE-LEAVE :
// DISPLAY THE MOUSE LOCATION

mouse.addEventListener("mousemove", function(e) {
  xcord.innerText = e.x;
  ycord.innerText = e.y;
  circle.style.top = `${e.x}px`;
  circle.style.left = `${e.y}px`;
});
