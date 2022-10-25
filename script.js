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

//

 equalsButton.addEventListener('click',evaluate)




operandButtons.forEach(button => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})


// Functions

add = (a, b) => a + b;
multiply = (a, b) => a * b;
substract = (a, b) => a - b;
divide = (a, b) => {
    if (b == 0){
        console.log('denominator cannot be zero')
        return null
    }
    else
        return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b)

        case '-':
            return substract(a, b)
            
        case '*':
            return multiply(a, b)
  
        case '/':
            return divide(a, b)

        default:
            console.log('error')
            return null;
    }
}

function appendNumber(number){
    if(currentOperationScreen.textContent === '0' || shouldResetScreen)
        resetScreen();
    currentOperationScreen.textContent += number;
}

function resetScreen(){
    currentOperationScreen.textContent = ''
    shouldresetScreen = false
}

function evaluate(){
    if(currentOperation === null || shouldresetScreen) return
    if(currentOperation === '/' && currentOperationScreen.textContent=='0'){
        alert('you cannot divide by 0')
        return;
    }
}