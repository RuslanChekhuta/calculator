let firstNumber = "0";
let operator = null;
let secondNumber = null;

const digitButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");

function appendDigit(event) {
  const digitValue = event.target.dataset.calc;
  if (digitValue === ".") return;
  if (!operator) {
    if (firstNumber === "0") {
      firstNumber = "";
    }
    firstNumber += digitValue;
    updateDisplay(firstNumber);
  } else {
    if (secondNumber === "0" || secondNumber === null) {
      secondNumber = "";
    }
    secondNumber += digitValue;
    updateDisplay(secondNumber);
  }
}

function updateDisplay(currNum) {
  display.textContent = currNum;
}

function handleOperator(event) {
  operator = event.target.dataset.calc;
}

digitButtons.forEach((button) => {
  button.addEventListener("click", appendDigit);
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", handleOperator);
});

equalsButton.addEventListener("click", handleEquals);

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

function handleEquals() {
  if (!firstNumber || !operator || !secondNumber) return;
  const result = operate(operator, Number(firstNumber), Number(secondNumber));
  updateDisplay(result);
}
