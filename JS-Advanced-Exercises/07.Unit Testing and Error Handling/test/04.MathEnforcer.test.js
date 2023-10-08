const { mathEnforcer } = require('../04.MathEnforcer');
const { assert } = require('chai');

describe('mathEnforcer', () => {
    describe('Tests with addFive', () => {
        it('Should return undefined when non number is provided', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
            assert.equal(mathEnforcer.addFive('name'), undefined);
            assert.equal(mathEnforcer.addFive([1, 2, 3, 4]), undefined);
            assert.equal(mathEnforcer.addFive({ name: 'Tosho', age: 23 }), undefined);
            assert.equal(mathEnforcer.addFive(), undefined);
        });

        it('Should add 5 to the provided num as parameter', () => {
            assert.equal(mathEnforcer.addFive(0), 5);
            assert.equal(mathEnforcer.addFive(5), 10);
            assert.equal(mathEnforcer.addFive(-10), -5);
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
            assert.equal(mathEnforcer.addFive(0.5), 5.5);
        });

    });
    describe('Tests with subtractTen', () => {
        it('Should return undefined when non number is provided', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
            assert.equal(mathEnforcer.subtractTen('name'), undefined);
            assert.equal(mathEnforcer.subtractTen([1, 2, 3, 4]), undefined);
            assert.equal(mathEnforcer.subtractTen({ name: 'Tosho', age: 23 }), undefined);
            assert.equal(mathEnforcer.subtractTen(), undefined);
        });

        it('Should subtract 10 from the provided num as parameter', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(5), -5);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.equal(mathEnforcer.subtractTen(5.5), -4.5);
            assert.equal(mathEnforcer.subtractTen(0.5), -9.5);
        });
    });

    describe('Tests with sum', () => {
        it('Should return undefined when both parameters are non number', () => {
            assert.equal(mathEnforcer.sum('5', '10'), undefined);
            assert.equal(mathEnforcer.sum('name', 'surname'), undefined);
            assert.equal(mathEnforcer.sum([1, 2, 3, 4], ''), undefined);
            assert.equal(mathEnforcer.sum({ name: 'Tosho', age: 23 }, '4'), undefined);
            assert.equal(mathEnforcer.sum(), undefined);
        });

        it('Should return undefined when one of the parameters is non number', () => {
            assert.equal(mathEnforcer.sum('5', 10), undefined);
            assert.equal(mathEnforcer.sum(5, 'surname'), undefined);
        });

        it('Should return the sum of the both numbers', () => {
            assert.equal(mathEnforcer.sum(0, 0), 0);
            assert.equal(mathEnforcer.sum(5, 5), 10);
            assert.equal(mathEnforcer.sum(-10, -10), -20);
            assert.equal(mathEnforcer.sum(5.5, 5.5), 11);
            assert.equal(mathEnforcer.sum(0.5, 0.5), 1);
        });
    });
});