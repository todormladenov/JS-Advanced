const expect = require('chai').expect;
let sum = require('./04.SumOfNumbers');

describe('Sum of Numbers', () => {
    it('Should return the sum of all numbers from the array', () => {
        let numbers = [1,2,3,4,5];
        
        let expectedSum = 15;
        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });

    it('Should return NaN when the array contains NaN', () => {
        let arrayOfNumbersAndNaN = [1, 'two', 3, '4', {}];

        let expectedSum = true;
        let actualSum = sum(arrayOfNumbersAndNaN);

        expect(Number.isNaN(actualSum)).to.equal(expectedSum);
    })

    it('Should return NaN when non array is provided as argument', () => {
        let argument = '';

        let expectedSum = 0;
        let actualSum = sum(argument);

        expect(actualSum).to.equal(expectedSum);
    })
});