// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add, subtract, divide, multiply } from "../functions/mathUtils.js";

const test = QUnit.test;

test('it should take two numbers and return sum', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 3;
    const num2 = 2;
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
