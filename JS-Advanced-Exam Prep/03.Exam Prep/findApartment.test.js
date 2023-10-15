const findNewApartment = require('./findApartment');
const { expect } = require('chai');

describe("Tests findNewApartment", function () {
    describe("Test isGoodLocations", () => {
        it("Should throw Error when incorrect parameters are provided", () => {
            expect(() => {findNewApartment.isGoodLocation(10, [1,23])}).to.throw('Invalid input!')
            expect(() => {findNewApartment.isGoodLocation('10', [1,23])}).to.throw('Invalid input!')
            expect(() => {findNewApartment.isGoodLocation(10, true)}).to.throw('Invalid input!')
        });

        it("Should return This location is not suitable for you.", () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
            expect(findNewApartment.isGoodLocation('Burgas', false)).to.equal('This location is not suitable for you.');
        });

        it("Should return You can go on home tour!", () => {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Plovdiv', true)).to.equal('You can go on home tour!');
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        });

        it("Should return There is no public transport in area.", () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        });
    });

    describe("Test isLargeEnough", () => {
        it("Should throw Error when incorrect parameters are provided", () => {
            expect(() => {findNewApartment.isLargeEnough(10, [1,23])}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isLargeEnough([1,2,3], 'Name')}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isLargeEnough('10', 10)}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isLargeEnough([], 10)}).to.throw('Invalid input!');
        });

        it("Should return the apartments bigger than provided minimal square meters.", () => {
            expect(findNewApartment.isLargeEnough([40,50,60,70], 50)).to.equal('50, 60, 70');
            expect(findNewApartment.isLargeEnough([40,50,60,70], 0)).to.equal('40, 50, 60, 70');
            expect(findNewApartment.isLargeEnough([0,0,0,0], 0)).to.equal('0, 0, 0, 0');
            expect(findNewApartment.isLargeEnough([25,30], 50)).to.equal('');
        });
    });

    describe("Test isItAffordable", () => {
        it("Should throw Error when incorrect parameters are provided", () => {
            expect(() => {findNewApartment.isItAffordable('10', [1,23])}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isItAffordable(1, 'Name')}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isItAffordable('10', 10)}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isItAffordable(0, 0)}).to.throw('Invalid input!');
            expect(() => {findNewApartment.isItAffordable(-1, -2)}).to.throw('Invalid input!');
        });

        it("Should return You don't have enough money for this house!", () => {
            expect(findNewApartment.isItAffordable(70, 50)).to.equal("You don't have enough money for this house!");
        });

        it("Should return You can afford this home!", () => {
            expect(findNewApartment.isItAffordable(50, 50)).to.equal("You can afford this home!");
            expect(findNewApartment.isItAffordable(50, 70)).to.equal("You can afford this home!");
        });
    });

});