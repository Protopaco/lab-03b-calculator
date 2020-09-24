// import functions and grab DOM elements
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const operator = document.getElementById('operator');
const calcbutton = document.getElementById('calc-button');
const answer = document.getElementById('answer');

//eventListener when user pushes '=' button
calcbutton.addEventListener('click', () => {
    //creates anwser box
    answer.style.backgroundColor = '#ac4b1c';

    //converts inputs into Numbers
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);

    //checks if first input is NaN, returns error if true
    if (Number.isNaN(num1) === true){
        window.alert("First number is not actually a number!")
        input1.value = "";

    //checks if second input is NaN, returns error if true
     } else if (Number.isNaN(num2) === true){ 
        console.log('ERROR')
        window.alert("Second number is not actually a number!")
        input2.value = '';

    //if both inputs are valid, performs operation
    } else {
        if (operator.value === '+') {
            answer.textContent = (num1 + num2);
        } else if (operator.value === '-') {
            answer.textContent = num1 - num2;
        } else if (operator.value === '/') {
            answer.textContent = num1 / num2;
        } else if (operator.value === '*') {
            answer.textContent = (num1 * num2);
        }
    }
})


           