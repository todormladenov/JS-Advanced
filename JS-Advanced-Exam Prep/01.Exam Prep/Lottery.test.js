const lottery = require('./Lottery');
const { expect } = require('chai');

describe("Tests lottery", () => {
    describe("Tests buyLotteryTicket function with invalid parameters", () => {
        it("Should throw Error when non valid parameters are provided", () => {
            expect(() => { lottery.buyLotteryTicket('10', [1, 2, 3], { name: 'Pesho', age: 23 }) }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket(10, [1, 2, 3], { name: 'Pesho', age: 23 }) }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket(10, 10, { name: 'Pesho', age: 23 }) }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket('10', '10', true) }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket(0, 0, true) }).to.throw('Invalid input!');
            expect(() => { lottery.buyLotteryTicket(-1, -1, true) }).to.throw('Invalid input!');
        });
    });

    describe("Tests buyLotteryTicket function with valid parameters", () => {
        it("Should throw Error when false is provided for buy", () => {
            expect(() => { lottery.buyLotteryTicket(10, 10, false) }).to.throw('Unable to buy lottery ticket!');
        });

        it("Should return the total price", () => {
            expect(lottery.buyLotteryTicket(10, 10, true)).to.equal('You bought 10 tickets for 100$.');
            expect(lottery.buyLotteryTicket(10, 1, true)).to.equal('You bought 1 tickets for 10$.');
        });
    });

    describe('Test checkTicket function with invalid parameters', () => {
        it('Should throw Error when invalid parameters are provided', () => {
            expect(() => { lottery.checkTicket(-1, -1) }).to.throw('Invalid input!');
            expect(() => { lottery.checkTicket([], []) }).to.throw('Invalid input!');
            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]) }).to.throw('Invalid input!');
            expect(() => { lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]) }).to.throw('Invalid input!');

        });
    });

    describe('Test checkTicket function with valid parameters', () => {
        it('Should return Congratulations you win, check your reward!', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 9, 8, 0])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 8, 0])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 0])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
        });

        it('Should return You win the JACKPOT!!!', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
        });
    });

    describe('Test secondChance function with invalid parameters', () => {
        it('Should throw Error when invalid parameters are provided', () => {
            expect(() => { lottery.secondChance([1,3,3], 10) }).to.throw('Invalid input!');
            expect(() => { lottery.secondChance(10, '10') }).to.throw('Invalid input!');
            expect(() => { lottery.secondChance('10', [10,2,3]) }).to.throw('Invalid input!');
        });
    });

    describe('Test secondChance function with valid parameters', () => {
        it('Should return You win our second chance prize! if the ticket ID is included in the array', () => {
            expect(lottery.secondChance(1,[1,6,7])).to.equal('You win our second chance prize!');
        });

        it("Should return Sorry, your ticket didn't win! if the ticked ID is NOT included in the array", () => {
            expect(lottery.secondChance(1,[2,6,7])).to.equal("Sorry, your ticket didn't win!");
        });
    });

});