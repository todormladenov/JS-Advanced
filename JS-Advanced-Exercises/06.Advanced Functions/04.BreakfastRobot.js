function solution() {

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        },
    }

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let commandParser = {
        restock: function (microelement, quantity) {
            stock[microelement] += quantity;
            return 'Success';
        },
        prepare: function (recipe, quantity) {
            let foundRecipe = Object.entries(recipes).find(r => r[0] === recipe)[1];
            let neededQuantity = {};

            for (let [key, value] of Object.entries(foundRecipe)) {
                neededQuantity[key] = quantity * value;
            }

            for (let key of Object.keys(neededQuantity)) {
                if (neededQuantity[key] > stock[key]) {
                    return `Error: not enough ${key} in stock`;
                }
                stock[key] -= neededQuantity[key];
            }
            return 'Success';
        },
        report: function () {
            let result = [];
            for (let [key, value] of Object.entries(stock)) {
                result.push(`${key}=${value}`);
            }
            return result.join(' ');
        }
    }

    return function manager(input) {

        let tokens = input.split(' ');
        let command = tokens[0];
        let quantity;

        switch (command) {
            case 'restock':
                let microelement = tokens[1];
                quantity = Number(tokens[2]);
                return commandParser[command](microelement, quantity);
            case 'prepare':
                let recipe = tokens[1];
                quantity = Number(tokens[2]);
                return commandParser[command](recipe, quantity);
            case 'report':
                return commandParser[command]();
        }
    }
}
let manager = solution();
console.log(manager('restock carbohydrate 10'))
console.log(manager('restock flavour 10'))
console.log(manager('prepare apple 1'))
console.log(manager('restock fat 10'))
console.log(manager('prepare burger 1'))
console.log(manager('report'))
