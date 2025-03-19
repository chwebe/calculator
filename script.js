const listOperators = {
    '+': add,
    '-': subtract,
    '×': multiply,
    '*': multiply,
    '÷': divide
}

// add calculator functionality
// add
function add(num1, num2) {
    return num1 + num2;
}

// subtract
function subtract(num1, num2) {
    return num1 - num2;
}

// multiply
function multiply(num1, num2) {
    return num1 * num2;
}

// divide
function divide(num1, num2) {
    return num1 / num2;
}

// add calculator functionality
function calculator(num1, num2, operator) {
    return listOperators[operator](num1, num2);
}

// fetch current number display
function getCurrentNumberDisplay() {
    const currentNumberDisplay = document.querySelector('.current-number-display');
    return parseFloat(currentNumberDisplay.textContent);
}

// Update display
function updateDisplay(display) {
    const currentNumberDisplay = document.querySelector('.current-number-display');
    currentNumberDisplay.textContent = display;
}

let firstOperand = null;
let currentOperator = null;
let newNumberFlag = false;

// fetch buttons
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            const digit = button.textContent;
            if (newNumberFlag) {
                updateDisplay(digit);
                newNumberFlag = false;
            } else {
                const currentDisplay = document.querySelector('.current-number-display').textContent;
                updateDisplay(currentDisplay === '0' ? digit : currentDisplay + digit);
            }
        }
        
        if (button.classList.contains('operator')) {
            if (firstOperand !== null && currentOperator !== null) {
                const secondOperand = getCurrentNumberDisplay();
                const result = calculator(firstOperand, secondOperand, currentOperator);
                updateDisplay(result);
                
            }
            firstOperand = getCurrentNumberDisplay();
            currentOperator = button.textContent;
            newNumberFlag = true;
        }
        
        if (button.classList.contains('equals')) {
            if (firstOperand !== null && currentOperator !== null) {
                const secondOperand = getCurrentNumberDisplay();
                const result = calculator(firstOperand, secondOperand, currentOperator);
                updateDisplay(result);
                firstOperand = null;
                currentOperator = null;
                newNumberFlag = true;
            }
        }
        
        if (button.classList.contains('clear')) {
            updateDisplay('0');
            firstOperand = null;
            currentOperator = null;
            newNumberFlag = false;
        }
        
        if (button.classList.contains('negative')) {
            const currentValue = getCurrentNumberDisplay();
            updateDisplay(currentValue * -1);
        }
        
        if (button.classList.contains('percent')) {
            const currentValue = getCurrentNumberDisplay();
            updateDisplay(currentValue / 100);
        }
        
        if (button.classList.contains('decimal')) {
            const currentValue = getCurrentNumberDisplay();
            if (currentValue.toString().includes('.')) {
                return;
            }
            updateDisplay(currentValue + '.');
        }

    });
});

console.log(calculator(10, 20, '+'));
console.log(calculator(10, 20, '-'));
console.log(calculator(9, 20, '×'));
console.log(calculator(0, 20, '÷'));
