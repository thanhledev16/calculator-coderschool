let display = document.querySelector("#display");

// Set the first number & second number and operator
let num1 = "";
let num2 = "";
let operator = null;

// Set button + - * /
const add = () => {
  calculator();
  operator = "add";
};

const subtract = () => {
  calculator();
  operator = "subtract";
};

const divide = () => {
  calculator();
  operator = "divide";
};

const multiply = () => {
  calculator();
  operator = "multiply";
};

// Set input number
const addNumber = (num) => {
  if (!operator) {
    num1 += num;
    display.innerHTML = num1;
  } else {
    num2 += num;
    display.innerHTML = num2;
  }
};

//Set function calculator
function calculator() {
  if (num1) {
    if (operator === "add") {
      display.innerHTML = parseFloat(num1) + parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "subtract") {
      display.innerHTML = parseFloat(num1) - parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "multiply") {
      display.innerHTML = parseFloat(num1) * parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
    if (operator === "divide") {
      display.innerHTML = parseFloat(num1) / parseFloat(num2);
      num1 = display.innerHTML;
      num2 = "";
    }
  }
}
calculator();

//Set button Del
function del() {
  num2 = null;
  display.innerHTML = "";
}

//Set Button =
function result() {
  calculator();
}
result();

//Set button Clear
function clr() {
  num1 = null;
  num2 = null;
  operator = null;
  display.innerHTML = "";
}

