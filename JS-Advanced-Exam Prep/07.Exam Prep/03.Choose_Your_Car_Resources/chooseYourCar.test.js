const chooseYourCar = require('./chooseYourCar');
const { expect } = require('chai');

    describe("Tests chooseYourCar", function () {
        describe("Test choosingType", () => {
            it("Should throw Error when incorrect input is provided", () => {
                expect(() => { chooseYourCar.choosingType('Sedan', 'black', 1800) }).to.throw('Invalid Year!');
                expect(() => { chooseYourCar.choosingType('Sedan', 'black', 3000) }).to.throw('Invalid Year!');
                expect(() => { chooseYourCar.choosingType('Combi', 'black', 2000) }).to.throw('This type of car is not what you are looking for.');
            });

            it('Should return info about the requirement', () => {
                expect(chooseYourCar.choosingType('Sedan', 'black', 2015)).to.equal('This black Sedan meets the requirements, that you have.');
                expect(chooseYourCar.choosingType('Sedan', 'black', 2010)).to.equal('This black Sedan meets the requirements, that you have.');
                expect(chooseYourCar.choosingType('Sedan', 'black', 2009)).to.equal('This Sedan is too old for you, especially with that black color.');
            });
        });

        describe("Test brandName", () => {
            it("Should throw Error when incorrect input is provided", () => {
                expect(() => { chooseYourCar.brandName('Sedan', 'black') }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.brandName([1, 2, 3], 3.14) }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.brandName('Combi', 3) }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.brandName([1, 2, 3, 4], -1) }).to.throw('Invalid Information!');
            });

            it('Should return info about the requirement', () => {
                expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal('Toyota, Peugeot');
                expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 1)).to.equal('BMW, Peugeot');
                expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2)).to.equal('BMW, Toyota');
            });
        });

        describe("Test carFuelConsumption", () => {
            it("Should throw Error when incorrect input is provided", () => {
                expect(() => { chooseYourCar.carFuelConsumption('Sedan', 'black') }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.carFuelConsumption('Sedan', 10) }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.carFuelConsumption(10, 'black') }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.carFuelConsumption(0, 0) }).to.throw('Invalid Information!');
                expect(() => { chooseYourCar.carFuelConsumption(-1, -1) }).to.throw('Invalid Information!');
            });

            it('Should return info about the requirement', () => {
                expect(chooseYourCar.carFuelConsumption(10, 1)).to.equal('The car burns too much fuel - 10.00 liters!');
                expect(chooseYourCar.carFuelConsumption(70, 3)).to.equal('The car is efficient enough, it burns 4.29 liters/100 km.');
                expect(chooseYourCar.carFuelConsumption(70, 4.9)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
            });
        });


    });