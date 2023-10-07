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
let inputSecondNumber = false;
let message = '';

const fieldNumberOne = document.getElementById('numberOne-value');
const fieldNumberTwo = document.getElementById('numberTwo-value');
const fieldResult = document.getElementById('result-value');
const fieldOperator = document.getElementById('operator-value');
const fieldMessage = document.getElementById('message-value');

function add(numberOne, numberTwo) {
  let total = +numberOne + +numberTwo;
  return verifyTotal(total);
}

function subtract(numberOne, numberTwo) {
  let total = +numberOne - +numberTwo;
  return verifyTotal(total);
}

function multiply(numberOne, numberTwo) {
  let total = +numberOne * +numberTwo;
  return verifyTotal(total);
}

function divide(numberOne, numberTwo) {
  let total = +numberOne / +numberTwo;
  if (isNaN(total)) {
    toggleButtons(true, 'Division by zero not supported');
    result = 0;
  }
  return verifyTotal(total);
}

function operate(operator, numberOne, numberTwo) {
  toggleButtons(false, '');
  switch (operator) {
    case '+':
      result = add(numberOne, numberTwo);
      displayResult();
      break;
    case '-':
      result = subtract(numberOne, numberTwo);
      displayResult();
      break;
    case '*':
      result = multiply(numberOne, numberTwo);
      displayResult();
      break;
    case '/':
      result = divide(numberOne, numberTwo);
      displayResult();
      break;

    default:
      break;
  }
  toggleButtons(true, '');
}
function displayResult() {
  fieldResult.innerHTML = '';
  fieldResult.innerHTML = result;
}

function verifyTotal(total) {
  if (maxNumberSize(total)) {
    console.log('true');
    return total;
  } else {
    console.log('false');
    return total.toExponential(1);
  }
}

function clear() {
  fieldNumberOne.innerHTML = '';
  fieldNumberTwo.innerHTML = '';
  fieldResult.innerHTML = '';
  fieldOperator.innerHTML = '';
  fieldMessage.innerHTML = '';
  operator = '';
  numberOne = '';
  numberTwo = '';
  result = '';
  inputSecondNumber = false;
  message = '';
  toggleButtons(false, '');
}

function toggleButtons(option, msg) {
  const buttons = document.querySelectorAll('#keyboard .number');
  buttons.forEach((button) => {
    button.disabled = option ? true : false;
  });
  if (option) {
    message = msg;
    fieldMessage.innerHTML = '';
    fieldMessage.innerHTML = message;
  } else {
    fieldMessage.innerHTML = '';
  }
}

function toggleDecimalPoint(option, msg) {
  const dotButton = document.querySelector("#keyboard .number[id='.']");
  dotButton.disabled = option ? true : false;
  if (option) {
    message = msg;
    fieldMessage.innerHTML = '';
    fieldMessage.innerHTML = message;
  } else {
    fieldMessage.innerHTML = '';
  }
}

function maxNumberSize(strNumber) {
  if (strNumber.length >= 10) {
    toggleButtons(true, 'Max number size reached');
    return false;
  } else {
    return true;
  }
}

function updateNumberOne(number) {
  fieldNumberOne.innerHTML = '';
  fieldNumberOne.innerHTML = number;
  numberOne = number;
  console.log(number);
}

function updateNumberTwo(number) {
  fieldNumberOne.innerHTML = '';
  fieldNumberOne.innerHTML = number;
}

function displayNumbers(digit) {
  if (!inputSecondNumber) {
    numberOne += maxNumberSize(numberOne) ? digit : '';
    // maxNumberSize(numberOne);
    fieldNumberOne.innerHTML = '';
    fieldNumberOne.innerHTML = numberOne;
  } else {
    numberTwo += maxNumberSize(numberTwo) ? digit : '';
    fieldNumberTwo.innerHTML = '';
    fieldNumberTwo.innerHTML = numberTwo;
  }
}

function operatorButtons(oper) {
  inputSecondNumber = true;
  operator = oper;
  fieldOperator.innerHTML = operator;
  toggleButtons(false, '');
}

//Operators
document.getElementById('clear').addEventListener('click', () => clear());
document.getElementById('+').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('-').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('*').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('/').addEventListener('click', (e) => operatorButtons(e.target.id));
document
  .getElementById('=')
  .addEventListener('click', () => operate(operator, numberOne, numberTwo));

//Numbers
document.getElementById('0').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('1').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('2').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('3').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('4').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('5').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('6').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('7').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('8').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('9').addEventListener('click', (e) => displayNumbers(e.target.id));
document.getElementById('.').addEventListener('click', (e) => displayNumbers(e.target.id));
