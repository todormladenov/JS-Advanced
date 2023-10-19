const carService = require('./03.CarService');
const { expect } = require('chai');

describe("Tests carService", () => {
    describe("Test isItExpensive function", () => {

        it("Should if it will be expensive", () => {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });

        it("Should if it will be cheaper", () => {
            expect(carService.isItExpensive('Braking Systems')).to.equal('The overall price will be a bit cheaper');
            expect(carService.isItExpensive('Windshield Wipers')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe("Test discount function", () => {

        it("Should thro error when non numbers are provided", () => {
            expect(() => { carService.discount('Name', '10') }).to.throw('Invalid input');
            expect(() => { carService.discount('Name', 10) }).to.throw('Invalid input');
            expect(() => { carService.discount(10, 'Name') }).to.throw('Invalid input');
        });

        it("Should return the applied discount", () => {
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
            expect(carService.discount(10, 100)).to.equal('Discount applied! You saved 30$');
        });

        it("Should return You cannot apply a discount", () => {
            expect(carService.discount(2, 100)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 100)).to.equal('You cannot apply a discount');
            expect(carService.discount(0, 100)).to.equal('You cannot apply a discount');
        });
    });

    describe("Test partsToBuy function", () => {

        it("Should thro error when non arrays are provided", () => {
            expect(() => { carService.partsToBuy('Name', '10') }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy('Name', [1,2,3]) }).to.throw('Invalid input');
            expect(() => { carService.partsToBuy([1,2,3], 'Name') }).to.throw('Invalid input');
        });

        it("Should return the total sum", () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });

    });

});