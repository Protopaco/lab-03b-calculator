// import functions 
import { add, subtract, multiply, divide} from "./mathUtils.js";

//grab DOM elements
const operator = document.getElementById('operator');
const answer = document.getElementById('answer');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

export function calculate() {
    //changes backgroundColor of anwser box
    answer.style.backgroundColor = '#ac4b1c';

     //converts inputs into Numbers
     let num1 = input1.valueAsNumber;
     let num2 = input2.valueAsNumber;

    //calls mathUtils function depending on operator chosen
    switch (operator.value) {
        case '+':
            answer.textContent = add(num1, num2);
            break;
        case '-':
            answer.textContent = subtract(num1, num2);
            break;
        case '*':
            answer.textContent = multiply(num1, num2);
            break;
        case '/':
            answer.textContent = divide(num1, num2);
            break;
    }
}
