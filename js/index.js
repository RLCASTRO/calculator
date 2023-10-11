//toggles the dark/white mode
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
});

let operator = '';
let numberOne = '';
let numberTwo = '';
let result = '';
let message = '';
let outputNumber = '';

const fieldNumberOne = document.getElementById('numberOne-value');
const fieldResult = document.getElementById('result-value');
const fieldOperator = document.getElementById('operator-value');
const fieldMessage = document.getElementById('message-value');

//getting all the number elements and attaching event listeners to each one if the id is a number
const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function () {
    let id = this.id;
    if (!isNaN(id)) {
      outputNumber += id;
      console.log(outputNumber);
      printOutput(outputNumber);
    } else {
      console.log(id);
    }
  });
}

const operatorButtons = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function () {
    operator = this.id;
    console.log(operator);
    operate();
  });
}

//prints the accumulated number in the HTML element
function printOutput(number) {
  fieldNumberOne.innerHTML = number;
}

function add(numberOne, numberTwo) {
  return +numberOne + +numberTwo;
}

function subtract(numberOne, numberTwo) {
  return +numberOne - +numberTwo;
}

function multiply(numberOne, numberTwo) {
  return +numberOne * +numberTwo;
}

function divide(numberOne, numberTwo) {
  if (num2 === 0) {
    return 'Error: Division by zero not possible';
  }
  return num1 / num2;
}

function operate(operator, numberOne, numberTwo) {
  switch (operator) {
    case '+':
      break;
    case '-':
      break;
    case '*':
      break;
    case '/':
      break;
    case 'clear':
      break;
    case 'backspace':
      break;
    default:
      break;
  }
}
