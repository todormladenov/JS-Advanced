class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error('Not enough space in the garden.');
        }

        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let flower = this.plants.find(p => p.plantName === plantName);

        if (!flower) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (flower.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity < 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        flower.ripe = true;
        flower.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        }

        return `${quantity} ${plantName}s have successfully ripened.`;
    }

    harvestPlant(plantName) {
        let flower = this.plants.find(p => p.plantName === plantName);

        if (!flower) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (!flower.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }

        let plantIndex = this.plants.indexOf(flower);
        this.plants.splice(plantIndex, 1);

        let quantity = flower.quantity;
        this.storage.push({ plantName, quantity });

        this.spaceAvailable += flower.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let gardenResult = `The garden has ${this.spaceAvailable} free space left.\nPlants in the garden: `;

        gardenResult += this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName))
            .map(({ plantName }) => `${plantName}`)
            .join(', ');

        let storageResult = ``;

        if (!this.storage.length) {
            storageResult += `Plants in storage: The storage is empty.`
        } else {
            storageResult += `Plants in storage: `;
            storageResult += this.storage.map(({plantName, quantity}) => `${plantName} (${quantity})`).join(', ');
        }

        return gardenResult + '\n' + storageResult;
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('cucumber', -5));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport()); 

