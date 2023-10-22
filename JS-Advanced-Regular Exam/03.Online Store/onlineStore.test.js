const onlineStore = require('./onlineStore');
const { expect } = require('chai');

describe("Tests onlineStore", () => {
    describe("Test with isProductAvailable function", () => {

        it("Should throw Error when invalid input is provided", () => {
            expect(() => { onlineStore.isProductAvailable([1, 2, 3], "Name") }).to.throw('Invalid input.');
            expect(() => { onlineStore.isProductAvailable('Name', "Name") }).to.throw('Invalid input.');
            expect(() => { onlineStore.isProductAvailable([1, 2, 3], 10) }).to.throw('Invalid input.');
            expect(() => { onlineStore.isProductAvailable() }).to.throw('Invalid input.');
        });

        it('Should return if the book is in stock', () => {
            expect(onlineStore.isProductAvailable('Some', 0)).to.equal('Sorry, Some is currently out of stock.');
            expect(onlineStore.isProductAvailable('Some', -1)).to.equal('Sorry, Some is currently out of stock.');
            expect(onlineStore.isProductAvailable('Some', 1)).to.equal('Great! Some is available for purchase.');
        })
    });

    describe("Test with canAffordProduct function", () => {

        it("Should throw Error when invalid input is provided", () => {
            expect(() => { onlineStore.canAffordProduct([1, 2, 3], "Name") }).to.throw('Invalid input.');
            expect(() => { onlineStore.canAffordProduct(10, "Name") }).to.throw('Invalid input.');
            expect(() => { onlineStore.canAffordProduct([1, 2, 3], 10) }).to.throw('Invalid input.');
            expect(() => { onlineStore.canAffordProduct() }).to.throw('Invalid input.');
        });

        it('Should return if the funds are enough', () => {
            expect(onlineStore.canAffordProduct(100, 0)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(100, 99)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(100, 100)).to.equal("Product purchased. Your remaining balance is $0.");
            expect(onlineStore.canAffordProduct(100, 101)).to.equal("Product purchased. Your remaining balance is $1.");
        })
    });

    describe("Test with getRecommendedProducts function", () => {

        it("Should throw Error when invalid input is provided", () => {
            expect(() => { onlineStore.getRecommendedProducts(1, 10) }).to.throw('Invalid input.');
            expect(() => { onlineStore.getRecommendedProducts([1, 2, 3], 10) }).to.throw('Invalid input.');
            expect(() => { onlineStore.getRecommendedProducts(10, "Name") }).to.throw('Invalid input.');
            expect(() => { onlineStore.getRecommendedProducts() }).to.throw('Invalid input.');
        });

        it('Should return the product from the chosen category', () => {
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], 'Photography')).to.equal("Recommended products in the Photography category: Camera");
            expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }, { name: "Paint", category: "Art" }], 'Photography')).to.equal("Recommended products in the Photography category: Camera");
            expect(onlineStore.getRecommendedProducts([{ name: "Paint", category: "Art" }], 'Photography')).to.equal("Sorry, we currently have no recommended products in the Photography category.");
            expect(onlineStore.getRecommendedProducts([], 'Photography')).to.equal("Sorry, we currently have no recommended products in the Photography category.");
        })
    });

});