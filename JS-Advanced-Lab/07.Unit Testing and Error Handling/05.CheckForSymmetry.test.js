const expect = require('chai').expect;
const isSymmetric = require('./05.CheckForSymmetry');

describe('Check for Symmetry', () => {
    it('Should be able to accept matrix array as input', () => {
        let matrix = [[1, 2, 3], [1, 2, 3]];

        let expectedResult = true;
        let actualResult = isSymmetric(matrix);

        expect(actualResult).to.equal(expectedResult);

    });

    it('Should be able to accept empty array as input', () => {
        let emptyArray = [];

        let expectedResult = true;
        let actualResult = isSymmetric(emptyArray);

        expect(actualResult).to.equal(expectedResult);

    });

    it('Should return false if the input is not array', () => {
        let arrayOfArgs = [1, 'two', {}, undefined, null, true];
        let expectedResult = false;

        for (let arg of arrayOfArgs) {
            let actualResult = isSymmetric(arg);

            expect(actualResult).to.equal(expectedResult);
        }
    });

    it('Should return true if the input array is symmetric', () => {
        let symmetricArray = [1, 2, 1];

        let expectedResult = true;
        let actualResult = isSymmetric(symmetricArray);

        expect(actualResult).to.equal(expectedResult);

    });

    it('Should return false if the input array is not symmetric', () => {
        let NotSymmetricArray = [1, 2, 3];

        let expectedResult = false;
        let actualResult = isSymmetric(NotSymmetricArray);

        expect(actualResult).to.equal(expectedResult);

    });
});