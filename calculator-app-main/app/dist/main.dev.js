"use strict";

function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = " ";
}

function removeFromDisplay() {
  document.getElementById("display");
  var currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function calculate() {
  var expression = document.getElementById("display").value;

  try {
    var result = eval(expression);
    document.getElementById("display").value = result;
  } catch (error) {
    alert("Invalid expression");
  }
} // function for theme changing/ toggling