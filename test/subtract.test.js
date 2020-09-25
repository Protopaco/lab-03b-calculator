// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { subtract } from "../mathUtils.js";

const test = QUnit.test;

test('it should take two numbers, and return the difference between two', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 6;
    const num2 = 5;
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
