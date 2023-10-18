const flowerShop = require('./flowerShop');
const { expect } = require('chai');

describe("Tests flowerShop", () => {
    describe("Test calcPriceOfFlowers function", () => {
        it("Should throw Error when incorrect parameters are provided", () => {
            expect(() => { flowerShop.calcPriceOfFlowers(10, '10', 'Name') }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers('rose', '10', 'Name') }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(10, 10, 'Name') }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(10, '10', 10) }).to.throw('Invalid input!');
            expect(() => { flowerShop.calcPriceOfFlowers(10, 2.3, 1.40) }).to.throw('Invalid input!');
        });

        it('Should return the total price of the purchase', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 10, 1)).to.equal('You need $10.00 to buy Rose!');
            expect(flowerShop.calcPriceOfFlowers('Rose', 0, 0)).to.equal('You need $0.00 to buy Rose!');
        });
    });

    describe('Test with checkFlowersAvailable function', () => {
        it('Should return if the flowers are available', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lotus', 'Tulip'])).to.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('Rose', ['Lotus', 'Tulip', 'Rose'])).to.equal('The Rose are available!');
            expect(flowerShop.checkFlowersAvailable('Rose', ['Lotus', 'Rose', 'Tulip'])).to.equal('The Rose are available!');
        });

        it('Should return if the flowers are NOT available', () => {
            expect(flowerShop.checkFlowersAvailable('Daisy', ['Rose', 'Lotus', 'Tulip'])).to.equal('The Daisy are sold! You need to purchase more!');
        });
    });

    describe("Test sellFlowers function", () => {
        it("Should throw Error when incorrect parameters are provided", () => {
            expect(() => { flowerShop.sellFlowers({name: 'Pesho', age: 23}, '10') }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers('Name', 10) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers([1,2,3,4], -1) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers([1,2,3,4], 1.2) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers([1,2], 2) }).to.throw('Invalid input!');
            expect(() => { flowerShop.sellFlowers([1,2], 5) }).to.throw('Invalid input!');
        });

        it('Should return  the changed array of flowers as a string, joined by / ', () => {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal('Rose / Lily');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 1)).to.equal('Rose / Orchid');
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal('Lily / Orchid');
        });
    });
});