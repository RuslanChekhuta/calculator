let firstNumber = "0";
let operator = null;
let secondNumber = null;
let isResultDisplayed = false;

const digitButtons = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

function appendDigit(event) {
  const digitValue = event.target.dataset.calc;
  if (digitValue === ".") return;
  if (!operator) {
    if (firstNumber === "0" || isResultDisplayed) {
      firstNumber = "";
      isResultDisplayed = false;
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
  const canContinue = handleEquals();
  if (!canContinue) return;
  operator = event.target.dataset.calc;
  isResultDisplayed = false;
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
  if (!firstNumber || !operator || !secondNumber) return true;
  if (operator === "/" && Number(secondNumber) === 0) {
    handleClear();
    updateDisplay("Nice try!");
    return false;
  }
  const result = operate(operator, Number(firstNumber), Number(secondNumber));
  const fResult = Math.round(result * 1e6) / 1e6;
  updateDisplay(fResult);
  firstNumber = String(result);
  operator = null;
  secondNumber = null;
  isResultDisplayed = true;
  return true;
}

function handleClear() {
  firstNumber = "0";
  operator = null;
  secondNumber = null;
  updateDisplay("0");
  isResultDisplayed = false;
}

clearButton.addEventListener("click", handleClear);
