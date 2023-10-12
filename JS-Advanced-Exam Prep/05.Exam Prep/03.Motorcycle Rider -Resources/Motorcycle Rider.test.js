const {motorcycleRider} = require('./Motorcycle Rider');
const {expect} = require('chai');

describe("Tests motorcycleRider", () => {
    describe("Test with licenseRestriction function", () => {
        it("Should return Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16. if AM is the parm", () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        });
        
        it('Should return Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16. when A1 is the parm', () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        });

        it('Should return Motorcycles with maximum power of 35KW. and the minimum age is 18. when A2 is provided as parm', () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        });

        it('Should return No motorcycle restrictions, and the minimum age is 24. when A is provided as parm', () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        });

        it('Should trow Error when non valid string is provided', () => {
            expect(() => {motorcycleRider.licenseRestriction('C1')}).to.throw('Invalid Information!')
        });

        it('Should trow Error when non string is provided', () => {
            expect(() => {motorcycleRider.licenseRestriction(10)}).to.throw('Invalid Information!')
        });
    });

    describe('Test with motorcycleShowroom function', () => {
        it('Should throw Error when invalid input is provided', () => {
            expect(() => {motorcycleRider.motorcycleShowroom({}, 52)}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.motorcycleShowroom({}, '10')}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.motorcycleShowroom([1,3], -2)}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.motorcycleShowroom([], 50)}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.motorcycleShowroom([], 20.5)}).to.throw('Invalid Information!');
        });

        it('Should return  the array length in following string when correct input is provided', () => {
            expect(motorcycleRider.motorcycleShowroom((["125", "250", "600"]), 600)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom((["125", "250", "600"]), 100)).to.equal('There are 0 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom((["50", "50", "50"]), 50)).to.equal('There are 3 available motorcycles matching your criteria!');
            expect(motorcycleRider.motorcycleShowroom((["49", "40.4", "-10"]), 100)).to.equal('There are 0 available motorcycles matching your criteria!');
        });
    });

    describe('Test with otherSpendings function', () => {
        it('Should throw Error when invalid input is provided', () => {
            expect(() => {motorcycleRider.otherSpendings({}, 52, "true")}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.otherSpendings(['200', '300'], '52', {})}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.otherSpendings(true, ['200', '300'], undefined)}).to.throw('Invalid Information!');
            expect(() => {motorcycleRider.otherSpendings(true, undefined, true)}).to.throw('Invalid Information!');
        });

        it('Should return total price', () => {
            expect(motorcycleRider.otherSpendings([], [], true)).to.equal(`You spend $0.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings([], [], false)).to.equal(`You spend $0.00 for equipment and consumables!`);
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], true)).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`);
            expect(motorcycleRider.otherSpendings(['helmet', 'jacked'], ['engine oil', 'oil filter'], false)).to.equal(`You spend $0.00 for equipment and consumables!`);
        });
    });

});