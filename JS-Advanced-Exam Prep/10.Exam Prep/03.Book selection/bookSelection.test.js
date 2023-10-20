const bookSelection = require('./bookSelection');
const { expect } = require('chai');

describe("Tests bookSelection", () => {
    describe("Test isGenreSuitable", () => {

        it("Should return if the book is suitable for kids", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
        });

        it("Should return Those books are suitable", () => {
            expect(bookSelection.isGenreSuitable('Thriller', 15)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
        });
    });

    describe("Test isItAffordable", () => {

        it("Should throw Error when invalid input is provided", () => {
            expect(() => { bookSelection.isItAffordable('Thriller', '10') }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable('Thriller', 10) }).to.throw('Invalid input');
            expect(() => { bookSelection.isItAffordable(10, 'Thriller') }).to.throw('Invalid input');
        });

        it("Should return You don't have enough money", () => {
            expect(bookSelection.isItAffordable(20, 15)).to.equal("You don't have enough money");
            expect(bookSelection.isItAffordable(20, 19)).to.equal("You don't have enough money");
        });

        it("Should return the difference between the pice and the budget", () => {
            expect(bookSelection.isItAffordable(20, 30)).to.equal("Book bought. You have 10$ left");
            expect(bookSelection.isItAffordable(20, 20)).to.equal("Book bought. You have 0$ left");
        });
    });

    describe("Test suitableTitles", () => {

        it("Should throw Error when invalid input is provided", () => {
            expect(() => { bookSelection.suitableTitles({ name: 'Pesho', age: 23 }, 10) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles([1, 2, 3], 10) }).to.throw('Invalid input');
            expect(() => { bookSelection.suitableTitles({ name: 'Pesho', age: 23 }, '10') }).to.throw('Invalid input');
        });

        it("Should return changed array with book titles", () => {
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Thriller')).to.deep.equal(['The Da Vinci Code']);
            expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }], 'Horror')).to.deep.equal([]);
        });
    });
});