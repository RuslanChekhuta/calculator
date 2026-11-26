let firstNumber = "0";
let operator = null;
let secondNumber = null;

const digitButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");

function appendDigit(event) {
  const digitValue = event.target.dataset.calc;
  if (digitValue === ".") return;
  if (firstNumber === "0") {
    firstNumber = "";
  }
  firstNumber += digitValue;
  updateDisplay(firstNumber);
}

function updateDisplay(currNum) {
  display.textContent = currNum;
}

digitButtons.forEach((button) => {
  button.addEventListener("click", appendDigit);
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const operate = (operation, num1, num2) => {
  switch (operation) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
};
