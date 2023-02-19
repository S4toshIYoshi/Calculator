
//main compiting
const exit = document.querySelector('.result__item')

//input number
const btn1 = document.querySelector('.numb1')
const btn2 = document.querySelector('.numb2')
const btn3 = document.querySelector('.numb3')
const btn4 = document.querySelector('.numb4')
const btn5 = document.querySelector('.numb5')
const btn6 = document.querySelector('.numb6')
const btn7 = document.querySelector('.numb7')
const btn8 = document.querySelector('.numb8')
const btn9 = document.querySelector('.numb9')
const btn0 = document.querySelector('.numb0')

//input operator
const operatorBtnPlus = document.querySelector('.operator-plus')
const operatorBtnMinus = document.querySelector('.operator-minus')
const operatorBtnMultiplication = document.querySelector('.operator-multiplication')
const operatorBtnDivider = document.querySelector('.operator-divider')
const operatorBtnBack = document.querySelector('.operator-back')

// start Computing
const startComputing = document.querySelector('.start-item')


//function number
const addNumber1 = () => {
    exit.append('1')
}

const addNumber2 = () => {
    exit.append('2')
}

const addNumber3 = () => {
    exit.append('3')
}

const addNumber4 = () => {
    exit.append('4')
}

const addNumber5 = () => {
    exit.append('5')
}

const addNumber6 = () => {
    exit.append('6')
}

const addNumber7 = () => {
    exit.append('7')
}

const addNumber8 = () => {
    exit.append('8')
}

const addNumber9 = () => {
    exit.append('9')
}

const addNumber0 = () => {
    exit.append('0')
}

btn1.addEventListener("click", addNumber1)
btn2.addEventListener("click", addNumber2)
btn3.addEventListener("click", addNumber3)
btn4.addEventListener("click", addNumber4)
btn5.addEventListener("click", addNumber5)
btn6.addEventListener("click", addNumber6)
btn7.addEventListener("click", addNumber7)
btn8.addEventListener("click", addNumber8)
btn9.addEventListener("click", addNumber9)
btn0.addEventListener("click", addNumber0)

//function operator

function addOperatorPlus () {
    exit.append('+')
}

function addOperatorMinus () {
    exit.append('-')
}

function addOperatorMultiplication () {
    exit.append('*')
}

function addOperatorDivider () {
    exit.append('/')
}

function addOperatorBack () {
    exit.innerText = ''
}

operatorBtnPlus.addEventListener("click", addOperatorPlus)
operatorBtnMinus.addEventListener("click", addOperatorMinus)
operatorBtnMultiplication.addEventListener("click", addOperatorMultiplication)
operatorBtnDivider.addEventListener("click", addOperatorDivider)
operatorBtnBack.addEventListener("click", addOperatorBack)

// start computing
/*
function computing () {
    exit.innerText = exit
}
*/
function computing () {
    exit.innerText = eval(exit.textContent)
}

startComputing.addEventListener("click", computing)