const {lookupChar} = require('../03.CharLookup');
const {assert} = require('chai');

describe('Test with incorrect parameters', () => {
    it('Should return undefined when non string and non number is provided for the index', () => {
        assert.equal(lookupChar(7, '1'), undefined);
        assert.equal(lookupChar('Gosho', '-100'), undefined);
        assert.equal(lookupChar(1000, 2), undefined);
        assert.equal(lookupChar('1000', 2.5), undefined);
    });

    it('Should return Incorrect index when both parameters are correct type but the index is incorrect range', () => {
        assert.equal(lookupChar('Pesho', 5), "Incorrect index");
        assert.equal(lookupChar('Gosho', -1), "Incorrect index");
        assert.equal(lookupChar('Tosho', 10), "Incorrect index");
    });
});

describe('Test with correct parameters', () => {
    it('Should return character at the specified index', () => {
        assert.equal(lookupChar('Pesho', 1), "e");
        assert.equal(lookupChar('Gosho', 0), "G");
        assert.equal(lookupChar('Tosho', 4), "o");
    });
});