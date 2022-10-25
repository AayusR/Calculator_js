//variables
let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false

const operandButtons = document.querySelectorAll('.operands')
const operatorButtons = document.querySelectorAll('.operator')
const equalsButton = document.querySelector('#equals')
const pointButton = document.querySelector('#decimal')
const clearAllButton = document.querySelector('#clearAll')
const deleteButton = document.getElementById('delete')
const currentOperationScreen = document.querySelector('#priScreen')
const previousOperationScreen = document.getElementById('secScreen')

//events

equalsButton.addEventListener('click', evaluate)
clearAllButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumner)
pointButton.addEventListener('click', appendPoint)




operandButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => setOperation(button.textContent))
})


// Functions

add = (a, b) => a + b;
multiply = (a, b) => a * b;
substract = (a, b) => a - b;
divide = (a, b) => {
    if (b == 0) {
        console.log('denominator cannot be zero')
        return null
    }
    else
        return a / b;
}
percent = (a,b) => a*b/100;

function operate(a, b, operator) {
    a= Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)

        case '-':
            return substract(a, b)

        case '*':
            return multiply(a, b)

        case '/':
            return divide(a, b)
        case '%':
            return percent(a,b);
        default:
            console.log('error')
            return null;
    }
}

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentOperationScreen.textContent += number;
}

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}



function setOperation(operator){
    if(currentOperation !== null )
        evaluate();
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator;
    previousOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true;
}

function evaluate(){
    if(currentOperation == null || shouldResetScreen) return
    if(currentOperation === '/' && currentOperationScreen.textContent == '0'){
        alert('you cannot divide by 0')
        return
    }
    secondOperand = currentOperationScreen.textContent;
    currentOperationScreen.textContent = round(operate(firstOperand, secondOperand, currentOperation))
    previousOperationScreen.innerHTML = `${firstOperand} ${currentOperation} ${secondOperand} = `
    currentOperation = null;
}

function clear(){
    firstOperand = ''
    secondOperand = ''
    currentOperation = null;
    currentOperationScreen.textContent = '0'
    previousOperationScreen.textContent = ''
}

function deleteNumner(){
    currentOperationScreen.textContent = currentOperationScreen.textContent
        .toString()
        .slice(0,-1)
}

function appendPoint(){
    if(shouldResetScreen) resetScreen()
    if(currentOperationScreen.textContent === '')
    currentOperationScreen.textContent = '0'
    if(currentOperationScreen.textContent.includes('.'))
        return
        currentOperationScreen.textContent += '.'
}

function round(number){
    return Math.round(number*100000)/100000;
}