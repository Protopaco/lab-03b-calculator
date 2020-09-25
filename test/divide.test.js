// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { divide } from "../functions/mathUtils.js";

const test = QUnit.test;

test('it should take two numbers and return first divided by second number', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 15;
    const num2 = 5;
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
