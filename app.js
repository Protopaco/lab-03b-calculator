// import functions and grab DOM elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const operator = document.getElementById('operator');
const calcbutton = document.getElementById('calc-button');
const answer = document.getElementById('answer');

// initialize state

// set event listeners to update state and DOM\
calcbutton.addEventListener('click', () => {
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    console.log(operator.value)
    if (operator.value === '+') {
        answer.textContent = num1 + num2;
    } else if (operator.value === '-') {
        answer.textContent = num1 - num2;
    } else if (operator.value === '/') {
        answer.textContent = num1 / num2;
    } else if (operator.value === '*') {
        answer.textContent = num1 * num2;
    }

})


           