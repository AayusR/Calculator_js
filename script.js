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

