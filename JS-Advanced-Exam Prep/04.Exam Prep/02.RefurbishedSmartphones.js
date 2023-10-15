class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model === '' || storage < 0 || !Number.isInteger(storage) || price < 0 || condition === '') {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model, storage, price, condition });

        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model, desiredStorage) {
        let foundModel = this.availableSmartphones.find(p => p.model === model);

        if (!foundModel) {
            throw new Error(`${model} was not found!`)
        }

        let soldPrice = 0;

        if (foundModel.storage >= desiredStorage) {
            soldPrice = foundModel.price;
        } else {
            let storageDifference = desiredStorage - foundModel.storage;
            if (storageDifference <= 128) {
                soldPrice = foundModel.price * 0.9;
            } else {
                soldPrice = foundModel.price * 0.8;
            }
        }

        let storage = foundModel.storage;

        this.soldSmartphones.push({ model, storage, soldPrice });
        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    upgradePhones() {
        if (!this.availableSmartphones.length) {
            throw new Error('There are no available smartphones!');
        }

        let result = ['Upgraded Smartphones:']
        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;
            result.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        });

        return result.join('\n');
    }

    salesJournal(criteria) {
        let sorter = {
            storage: () => this.soldSmartphones.sort((a, b) => b.storage - a.storage),
            model: () => this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model)),
        }

        switch (criteria) {
            case 'storage':
                sorter.storage();
                break;
            case 'model':
                sorter.model();
                break
            default:
                throw new Error('Invalid criteria!');
        }

        let result = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`;
        result += `${this.soldSmartphones.length} smartphones sold:\n`

        result += this.soldSmartphones.map(({ model, storage, soldPrice }) => `${model} / ${storage} GB / ${soldPrice.toFixed(2)}$`).join('\n');

        return result;  
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));