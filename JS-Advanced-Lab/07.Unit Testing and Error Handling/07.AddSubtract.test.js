const expect = require('chai').expect;
const createCalculator = require('./07.AddSubtract');

describe('Add and Subtract', () => {
    it('Should return a object, containing the functions add(), subtract() and get() as properties', () => {
        let expectedResult = typeof ({});
        let actualResult = typeof (createCalculator());
    
        expect(actualResult).to.equal(expectedResult);
    });

    it('The function subtract should parse a number as string into a number and get should return the result of value', () => {
        let clac = createCalculator();
        clac.subtract('5');

        let actualResult = clac.get();
        let expectedResult = -5;
    
        expect(actualResult).to.equal(expectedResult);
    });

    it('The function add should parse a number as string into a number and get should return the result of value', () => {
        let clac = createCalculator();
        clac.add('5');

        let actualResult = clac.get();
        let expectedResult = 5;
    
        expect(actualResult).to.equal(expectedResult);
    });
});