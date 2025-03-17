const listOperators = {
    '+': add,
    '-': subtract,
    '×': multiply,
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


console.log(calculator(10, 20, '+'));
console.log(calculator(10, 20, '-'));
console.log(calculator(9, 20, '×'));
console.log(calculator(0, 20, '÷'));




