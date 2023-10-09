const recipeSelection = require('./recipeSelection');
const expect = require('chai').expect;

describe('Test recipeSelection', () => {
    describe('Test function isTypeSuitable', () => {
        it('Should trow Error when non string parameters are provided', () => {
            expect(() => {recipeSelection.isTypeSuitable(10, 0)}).to.throw('Invalid input');
            expect(() => {recipeSelection.isTypeSuitable(10, "Pesho")}).to.throw('Invalid input');
            expect(() => {recipeSelection.isTypeSuitable("Gosho", 10)}).to.throw('Invalid input');
        });

        it('Should return info if the recipe is NOT suitable', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('Should return info if the recipe is suitable', () => {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Vegetable', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');
            expect(recipeSelection.isTypeSuitable('Beans', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');
        });

    });

    describe('Test function isItAffordable', () => {
        it('Should trow Error when non numbers parameters are provided', () => {
            expect(() => {recipeSelection.isItAffordable('10', 'Pesho')}).to.throw('Invalid input');
            expect(() => {recipeSelection.isItAffordable(10, "Pesho")}).to.throw('Invalid input');
            expect(() => {recipeSelection.isItAffordable("Gosho", 10)}).to.throw('Invalid input');
        });

        it('Should return info if the recipe is affordable', () => {
            expect(recipeSelection.isItAffordable(0, 0)).to.equal('Recipe ingredients bought. You have 0$ left');
            expect(recipeSelection.isItAffordable(500, 1000)).to.equal('Recipe ingredients bought. You have 500$ left');
            expect(recipeSelection.isItAffordable(-500, 1000)).to.equal("Recipe ingredients bought. You have 1500$ left");
            expect(recipeSelection.isItAffordable(10.5, 10.5)).to.equal("Recipe ingredients bought. You have 0$ left");          
        });

        it('Should return info if the recipe NOT is affordable', () => {
            expect(recipeSelection.isItAffordable(1000, 500)).to.equal("You don't have enough budget to afford this recipe");
            expect(recipeSelection.isItAffordable(500, -1000)).to.equal("You don't have enough budget to afford this recipe");
            expect(recipeSelection.isItAffordable(-500, -1000)).to.equal("You don't have enough budget to afford this recipe");
            expect(recipeSelection.isItAffordable(10.5, 9.5)).to.equal("You don't have enough budget to afford this recipe");            
        });
        
    });

    describe('Test function getRecipesByCategory', () => {
        it('Should trow Error when non array for first parameters is provided and non string for second parameter is provided', () => {
            expect(() => {recipeSelection.getRecipesByCategory('10', 'Pesho')}).to.throw('Invalid input');
            expect(() => {recipeSelection.getRecipesByCategory([10], {name: 'Pesho'})}).to.throw('Invalid input');
            expect(() => {recipeSelection.getRecipesByCategory({name: 'Pesho'}, [10])}).to.throw('Invalid input');
        });

        it('Should return filtered array by the provided string', () => {
            expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }, { title: "Sarmi", category:"Bulgaria"}], 'Bulgaria')).to.deep.equal(['Sarmi']);
        });
    });
});