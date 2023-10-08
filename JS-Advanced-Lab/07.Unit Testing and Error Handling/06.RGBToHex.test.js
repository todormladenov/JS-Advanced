const expect = require('chai').expect;
let rgbToHexColor = require('./06.RGBToHex');

describe('RGB to Hex', () => {
    it('Should return undefined if any of the three arguments is not integer numbers within the range [0…255]', () => {
        let arrayOfInvalidArguments = [1.2, 'two', 256, -1, {}, [], null, undefined];
        let expectedResult = undefined;

        for (let arg of arrayOfInvalidArguments) {
            let actualResult = rgbToHexColor(arg, arg, arg);
            expect(actualResult).to.equal(expectedResult);
        }
    });

    it('Should be able to receive three integer numbers within the range [0…255]', () => {
        let num1 = 9;
        let num2 = 59;
        let num3 = 240;

        let expectedResult = '#093BF0';
        let actualResult = rgbToHexColor(num1, num2, num3)

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should be able to return the same color in hexadecimal format as a string', () => {
        let num1 = 9;
        let num2 = 59;
        let num3 = 240;

        let expectedResult = typeof ('#093BF0');
        let actualResult = rgbToHexColor(num1, num2, num3)

        expect(typeof (actualResult)).to.equal(expectedResult);
    });

    it('Should return undefined if the function is called without arguments', () => {
        let expectedResult = undefined;
        let actualResult = rgbToHexColor();

        expect(actualResult).to.equal(expectedResult);

    });

    it('Should return undefined if the numbers are as strings', () => {
        let num1 = '9';
        let num2 = '59';
        let num3 = '240';

        let expectedResult = undefined;
        let actualResult = rgbToHexColor(num1, num2, num3)

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return undefined if even one of the three arguments is not integer numbers within the range [0…255]', () => {
        let num1 = 1;
        let num2 = 56;
        let num3 = 200.56;
        let expectedResult = undefined;

        let actualResult = rgbToHexColor(num1, num2, num3)

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return #000000 if the numbers are the min value', () => {
        let num1 = 0;
        let num2 = 0;
        let num3 = 0;
        let expectedResult = '#000000';

        let actualResult = rgbToHexColor(num1, num2, num3)

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return #FFFFFF if the numbers are the max value', () => {
        let num1 = 255;
        let num2 = 255;
        let num3 = 255;
        let expectedResult = '#FFFFFF';

        let actualResult = rgbToHexColor(num1, num2, num3)

        expect(actualResult).to.equal(expectedResult);
    });
});