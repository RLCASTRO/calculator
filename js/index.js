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

const fieldNumberOne = document.getElementById('numberOne-value');
const fieldNumberTwo = document.getElementById('numberTwo-value');
const fieldResult = document.getElementById('result-value');
const fieldOperator = document.getElementById('operator-value');

function add() {}

function subtract() {}

function multiply() {}

function divide() {}

function operate(operator, numberOne, nuumberTwo) {}

function clear() {
  fieldNumberOne.innerHTML = '';
  fieldNumberTwo.innerHTML = '';
  fieldResult.innerHTML = '';
  fieldOperator.innerHTML = '';
  operator = '';
  numberOne = '';
  numberTwo = '';
  result = '';
  inputSecondNumber = false;
}

function displayNumbers(digit) {
  if (!inputSecondNumber) {
    numberOne += digit;
    console.log(numberOne);
    fieldNumberOne.innerHTML = '';
    fieldNumberOne.innerHTML = numberOne;
  } else {
    numberTwo += digit;
    fieldNumberTwo.innerHTML = '';
    fieldNumberTwo.innerHTML = numberTwo;
  }
}

function operatorButtons(operator) {
  inputSecondNumber = true;
  fieldOperator.innerHTML = operator;
}

//Operators
document.getElementById('clear').addEventListener('click', () => clear());
// document.getElementById('backspace').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('+').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('-').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('*').addEventListener('click', (e) => operatorButtons(e.target.id));
document.getElementById('/').addEventListener('click', (e) => operatorButtons(e.target.id));

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

// document.getElementById('=').addEventListener('click', () => console.log(operator));
