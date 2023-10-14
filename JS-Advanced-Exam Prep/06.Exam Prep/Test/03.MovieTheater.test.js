const {movieTheater} = require('./03.MovieTheater');
const {expect} = require('chai');

describe("Tests movieTheater", () => {
    describe("Tests ageRestrictions function", () => {

        it("Tests with correct parameters", () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
            expect(movieTheater.ageRestrictions('RPG')).to.equal('There are no age restrictions for this movie');
        });
    });

    describe("Tests moneySpent function", () => {

        it("Tests with non correct parameters", () => {
            expect(() => {movieTheater.moneySpent('G' , {}, 10)}).to.throw('Invalid input');
            expect(() => {movieTheater.moneySpent(10 , {}, 10)}).to.throw('Invalid input');
            expect(() => {movieTheater.moneySpent(10 , [], 10)}).to.throw('Invalid input');
            expect(() => {movieTheater.moneySpent(10 , {}, [12,21])}).to.throw('Invalid input');
            expect(() => {movieTheater.moneySpent([] , [12,12], [12,21])}).to.throw('Invalid input');
        });

        it("Tests with correct parameters", () => {
            expect(movieTheater.moneySpent(0, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase is 14.50');
            expect(movieTheater.moneySpent(10, ['Nachos', 'Popcorn'], ['Soda', 'Water'])).to.equal('The total cost for the purchase with applied discount is 131.60');
            expect(movieTheater.moneySpent(0, [], [])).to.equal('The total cost for the purchase is 0.00');
            expect(movieTheater.moneySpent(2, ['Chocolate', 'Chips'], ['Fanta', 'Juice'])).to.equal('The total cost for the purchase is 30.00');
            expect(movieTheater.moneySpent(3, [], ['Soda', 'Soda'])).to.equal('The total cost for the purchase is 50.00');
        });
    });

    describe("Tests reservation function", () => {

        it("Tests with none correct parameters", () => {
            expect(() => {movieTheater.reservation({}, 'Pesho')}).to.throw('Invalid input');
            expect(() => {movieTheater.reservation([], 'Pesho')}).to.throw('Invalid input');
            expect(() => {movieTheater.reservation({}, 10)}).to.throw('Invalid input');
        });

        it("Tests with correct parameters", () => {
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }], 4)).to.equal(2);
        });
    });
    
});