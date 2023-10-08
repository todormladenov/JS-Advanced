const {assert} = require("chai");
const { isOddOrEven } = require("../02.EvenOrOdd");

describe('Test with incorrect parameters', () => {
    it('Should return undefined when non string is provided', () => {
        assert.equal(isOddOrEven({name: 'Tosho', age: 24}), undefined);
        assert.equal(isOddOrEven([1,2,3,4]), undefined);
        assert.equal(isOddOrEven(['one', true, 'name']), undefined);
        assert.equal(isOddOrEven(23), undefined);
    });
});

describe('Test with correct parameters', () =>{
    it('Should return even when string with even length is provided', () => {
        assert.equal(isOddOrEven('name'), 'even');
        assert.equal(isOddOrEven('43'), 'even');
    });

    it('Should return odd when string with odd length is provided', () => {
        assert.equal(isOddOrEven('1'), 'odd');
        assert.equal(isOddOrEven('age'), 'odd');
    });
});