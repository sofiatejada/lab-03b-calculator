//create add variables
const firstAddend = document.getElementById('first-addend');
const secondAddend = document.getElementById('second-addend');
const add = document.getElementById('add');
const sum = document.getElementById('sum');

//addition action
add.addEventListener ('click', () => {
    const num1 = Number(firstAddend.value);
    const num2 = Number(secondAddend.value);
    sum.textContent = num1 + num2;
});

//create subtraction variables
const minuend = document.getElementById('minuend');
const subtrahend = document.getElementById('subtrahend');
const subtract = document.getElementById('subtract');
const difference = document.getElementById('difference');

//subtraction action
subtract.addEventListener('click', () => {
    const num1 = Number(minuend.value);
    const num2 = Number(subtrahend.value);
    difference.textContent = num1 - num2;
});

//create multiplication variables
const multiplicand = document.getElementById('multiplicand');
const multiplier = document.getElementById('multiplier');
const multiply = document.getElementById('multiply');
const product = document.getElementById('product');

//multiplication action
multiply.addEventListener('click', () => {
    const num1 = Number(multiplicand.value);
    const num2 = Number(multiplier.value);
    product.textContent = num1 * num2;
});

//create multiplication variables
const dividend = document.getElementById('dividend');
const divisor = document.getElementById('divisor');
const divide = document.getElementById('divide');
const quotient = document.getElementById('quotient');

//multiplication action
divide.addEventListener('click', () => {
    const num1 = Number(dividend.value);
    const num2 = Number(divisor.value);
    quotient.textContent = num1 / num2;
});

