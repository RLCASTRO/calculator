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
let operatorsDisabled = false;
let decimalDisabled = false;
let numbersDisabled = true;
let firstOperation = true;
let secondOperation = false;

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
  firstOperation = true;
  secondOperation = false;
  startCalculator();
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
    toggleOperatorButtons('on');

    if (secondOperation) {
      toggleDecimalButton('on');
    }
    if (firstOperation) {
      toggleDecimalButton('on');
    }
    toggleOperatorButtons('on');
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
        if (operator !== '' && prevNumber !== '' && number !== '') {
          operate();
          prevNumber = result;
          number = '';
          operator = '';
          updateDisplay();
        } else {
          toggleNumberButtons('on');
          secondOperation = true;
          firstOperation = false;
        }
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
    if (operator !== '' && prevNumber !== '' && number !== '') {
      operator = this.id;
      operate();
      prevNumber = result;
      number = '';
      updateDisplay();
    } else {
      operator = this.id;
      if (firstOperation) {
        prevNumber = number;
      }
      number = '';
      toggleNumberButtons('on');
      secondOperation = true;
      firstOperation = false;
      // number = '';
      updateDisplay();
    }
  });
}

//gets the decimal point button and attach an event listener to it.
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', function () {
  let id = this.id;
  insert(id);
  if (firstOperation) {
    firstOperation = false;
    toggleOperatorButtons('off');
    toggleDecimalButton('off');
  }
  if (secondOperation) {
    secondOperation = false;
    toggleOperatorButtons('off');
    toggleDecimalButton('off');
  }
});

function updateDisplay() {
  mainNumberValue.innerHTML = number;
  historyValue.innerHTML = prevNumber;
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
  mainNumberValue.innerHTML += operator;
}

function toggleOperatorButtons(status) {
  if (status === 'off') {
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].disabled = true;
    }
    operatorsDisabled = true;
  } else {
    for (let i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].disabled = false;
    }
    operatorsDisabled = false;
  }
}

function toggleDecimalButton(status) {
  if (status === 'off') {
    decimalButton.disabled = true;
    decimalDisabled = true;
  } else {
    decimalButton.disabled = false;
    decimalDisabled = false;
  }
}
function toggleNumberButtons(status) {
  if (status === 'off') {
    for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].disabled = true;
    }
    numbersDisabled = true;
  } else {
    for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].disabled = false;
    }
    numbersDisabled = false;
  }
}

function startCalculator() {
  toggleNumberButtons('on');
  toggleDecimalButton('off');
  toggleOperatorButtons('off');
}

startCalculator();

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
      result = add(prevNumber, number).toString();
      updateDisplay();

      break;
    case '-':
      result = subtract(prevNumber, number).toString();
      updateDisplay();
      break;
    case '*':
      result = multiply(prevNumber, number).toString();
      updateDisplay();
      break;
    case '/':
      result = divide(prevNumber, number);
      if (result === 0) {
        result = '';
      }
      updateDisplay();
      break;
    default:
      break;
  }
}
