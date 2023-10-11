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
let number = '';
let prevNumber = '';
let result = '';
let message = '';
let enableOperator = true;
let enableDecimal = true;

const mainNumberValue = document.getElementById('mainNumber-value');
const historyValue = document.getElementById('history-value');
const resultValue = document.getElementById('result-value');
const operatorValue = document.getElementById('operator-value');
const messageValue = document.getElementById('message-value');

function clear() {
  operator = '';
  number = '';
  prevNumber = '';
  result = '';
  message = '';
  enableOperator = true;
  enableDecimal = true;
  mainNumberValue.innerHTML = '';
  historyValue.innerHTML = '';
  resultValue.innerHTML = '';
  messageValue.innerHTML = '';
  operatorValue.innerHTML = '';
}

const numberButtons = document.getElementsByClassName('number');
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', function () {
    let id = this.id;
    insert(id);
    toggleOperator('on');
  });
}

const toolsButtons = document.getElementsByClassName('tools');
for (let i = 0; i < toolsButtons.length; i++) {
  toolsButtons[i].addEventListener('click', function () {
    switch (this.id) {
      case 'clear':
        clear();
        break;
      case 'backspace':
        backspace();
        break;
      case '=':
        operate();
        prevNumber = '';
        updateDisplay();
        break;
      default:
        break;
    }
  });
}

//getting all the operators buttons and attaching event listeners to each one
const operatorButtons = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function () {
    operator = this.id;
    prevNumber = number;
    number = '';
    if (operator !== '' && prevNumber !== '' && number !== '') {
      operate();
      console.log('inside if');
    }
    updateDisplay();
    toggleOperator('off');
    toggleDecimal('on');
  });
}

//gets the decimal point button and attach an event listener to it.
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', function () {
  let id = this.id;

  if (enableDecimal) {
    console.log(this.id);
    insert(id);
    toggleDecimal('off');
  }
});

function updateDisplay() {
  mainNumberValue.innerHTML = number;
  historyValue.innerHTML = prevNumber;
  resultValue.innerHTML = result;
  messageValue.innerHTML = message;
  operatorValue.innerHTML = operator;
}

function backspace() {
  number = number.slice(0, -1);
  updateDisplay();
}

//prints the accumulated number in the HTML element
function insert(num) {
  number += num;
  updateDisplay();
}

function insertOperator(operator) {
  console.log(operator);

  mainNumberValue.innerHTML += operator;
}

function toggleOperator(status) {
  enableOperator = status === 'on' ? true : false;
}

function toggleDecimal(status) {
  enableDecimal = status === 'on' ? true : false;
}

function add(numberOne, numberTwo) {
  // Convert the input strings to numbers and then perform addition
  const num1 = parseFloat(numberOne);
  const num2 = parseFloat(numberTwo);

  // if (isNaN(num1) || isNaN(num2)) {
  //   return 'Error: Invalid input';
  // }
  return num1 + num2;
}

function subtract(numberOne, numberTwo) {
  const num1 = parseFloat(numberOne);
  const num2 = parseFloat(numberTwo);
  return +numberOne - +numberTwo;
}

function multiply(numberOne, numberTwo) {
  const num1 = parseFloat(numberOne);
  const num2 = parseFloat(numberTwo);
  return +numberOne * +numberTwo;
}

function divide(numberOne, numberTwo) {
  const num1 = parseFloat(numberOne);
  const num2 = parseFloat(numberTwo);
  if (num2 === 0 || !isFinite(num1 / num2)) {
    message = 'Error: Division by zero not possible';
    number = '';
    operator = '';
    prevNumber = '';
    updateDisplay();
    return 0;
  }

  if (isNaN(num1) || isNaN(num2)) {
    message = 'Error: Invalid input';
    updateDisplay();
    return 0;
  }

  return num1 / num2;
}

function operate() {
  switch (operator) {
    case '+':
      number = add(prevNumber, number).toString();
      updateDisplay();
      
      break;
    case '-':
      number = subtract(prevNumber, number).toString();
      updateDisplay();
      break;
    case '*':
      number = multiply(prevNumber, number).toString();
      updateDisplay();
      break;
    case '/':
      number = divide(prevNumber, number);
      if (number === 0) {
        number = '';
      }
      updateDisplay();
      break;
    default:
      break;
  }
}
