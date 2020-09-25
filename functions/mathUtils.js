
export function add(num1, num2) {
    return (num1 + num2);
}

export function subtract(num1, num2) {
    return (num1 - num2);
}

export function divide(num1, num2) {
    let output = (num1 / num2);

    //controls infinitly long results
    if (output.toString().length > 6){
        output = output.toFixed(6);
    }
    
    return output;
}

export function multiply(num1, num2) {
    return (num1 * num2);
}

