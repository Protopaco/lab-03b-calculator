// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { multiply } from "../functions/mathUtils.js";

const test = QUnit.test;

test('it should take two number and return them multplied', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const num1 = 4;
    const num2 = 5;
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(num1, num2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
