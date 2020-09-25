// import functions 
import { calculate } from "./functions/calc.js";

//grab DOM elements
const input2 = document.getElementById('input2');
const calcbutton = document.getElementById('calc-button');

//eventListener when user pushes '=' button
calcbutton.addEventListener('click', calculate);

//eventListener when user pushes 'enter'
input2.addEventListener("keydown", function(event) {
    if(event.key ==='Enter'){
        calculate();
    }
})

