const weddingDay = require('./weddingDay');
const { expect } = require('chai');

describe('Test with weddingDay', () => {
    describe('Test with pickVenue function', () => {
        it('Should throw Error when incorrect parameters are provided', () => {
            expect(() => { weddingDay.pickVenue('10', 'Name', 10) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue('10', 'Name', '') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue('10', 'Name', 'Name') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue('10', 10, 'Name') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue(10, '10', 'Name') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.pickVenue(10, '10', 10) }).to.throw('Invalid Information!');
        });

        it('Should return the information for the venue in the given location', () => {
            expect(weddingDay.pickVenue(160, 110, 'Varna')).to.equal('This venue meets the requirements, with capacity of 160 guests and 110$ cover.');
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.');
            expect(weddingDay.pickVenue(140, 130, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(weddingDay.pickVenue(140, 130, 'Varna')).to.equal('This venue does not meet your requirements!');
            expect(() => { weddingDay.pickVenue(200, 100, 'Sofia') }).to.throw('The location of this venue is not in the correct area!');
        });
    });

    describe('Test with otherSpendings function', () => {
        it('Should throw Error when incorrect parameters are provided', () => {
            expect(() => { weddingDay.otherSpendings('10', 'Name', 10) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.otherSpendings('10', 'Name', true) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.otherSpendings('10', [1, 2, 3], true) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.otherSpendings([10, 2], 'Name', true) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.otherSpendings([10, 2], [1, 2, 3], '10') }).to.throw('Invalid Information!');
        });

        it('Should return the total price', () => {
            expect(weddingDay.otherSpendings([], [], true)).to.equal('You spend 0$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings([], [], false)).to.equal('You spend 0$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal('You spend 2900$ for wedding decoration and photography!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains', 'balloons'], ['pictures', 'video', 'calendar'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains', 'balloons'], ['pictures', 'video', 'calendar'], false)).to.equal('You spend 2900$ for wedding decoration and photography!');

        });
    });

    describe('Test with tableDistribution function', () => {
        it('Should throw Error when incorrect parameters are provided', () => {
            expect(() => { weddingDay.tableDistribution('10', 'Name') }).to.throw('Invalid Information!');
            expect(() => { weddingDay.tableDistribution(0, 0) }).to.throw('Invalid Information!');
            expect(() => { weddingDay.tableDistribution(-1, -1) }).to.throw('Invalid Information!');
        });

        it('Should return information about table distribution', () => {
            expect(weddingDay.tableDistribution(120, 20)).to.equal('You have 20 tables with 6 guests on table.');
            expect(weddingDay.tableDistribution(50, 10)).to.equal('There is only 5 people on every table, you can join some tables.');
        });
    });
});