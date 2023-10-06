let operator = "";
let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme','dark');
    }else{
        document.documentElement.setAttribute('data-theme','light');
    }
})

function add() {

}

function subtract() {

}

function multiply() {

}

function divide() {

}

function operate(operator, numberOne, nuumberTwo) {

}




document.getElementById('clear').addEventListener('click', () => operator = 'clear');
document.getElementById('backspace').addEventListener('click', () => operator = 'backspace');
document.getElementById('+').addEventListener('click', () => operator = '+');
document.getElementById('-').addEventListener('click', () => operator = '-');
document.getElementById('*').addEventListener('click', () => operator = '*');
document.getElementById('/').addEventListener('click', () => operator = '/');
document.getElementById('=').addEventListener('click', () => console.log(operator));






