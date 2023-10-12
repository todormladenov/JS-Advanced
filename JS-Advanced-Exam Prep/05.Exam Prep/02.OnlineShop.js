class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (this.warehouseSpace < spaceRequired) {
            throw new Error ('Not enough space in the warehouse.');
        }

        this.warehouseSpace -= Number(spaceRequired);
        this.products.push({ product, quantity });

        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        let foundProduct = this.products.find(el => el.product === product);
        if (!foundProduct) {
            throw new Error (`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error ('The quantity cannot be zero or negative.');
        }

        if (minimalQuantity <= foundProduct.quantity) {
            return `You have enough from product ${product}.`;
        }

        let difference = Number(minimalQuantity) - foundProduct.quantity;
        foundProduct.quantity = Number(minimalQuantity);

        return `You added ${difference} more from the ${product} products.`;
    }

    sellProduct(product) {
        let foundProduct = this.products.find(el => el.product === product);
        if (!foundProduct) {
            throw new Error (`There is no ${product} in the warehouse.`);
        }

        foundProduct.quantity--;

        let foundProductInSales = this.sales.find(el => el.product === product);
        if (!foundProductInSales) {
            this.sales.push({ product, quantity: 1});
        } else {
            foundProduct.quantity++;
        }

        return `The ${product} has been successfully sold.`

    }

    revision() {
        let result = ``
        if (!this.sales.length) {
            throw new Error ('There are no sales today!');
        } else {
            result+= `You sold ${this.sales.length} products today!\n`;
        }

        result += `Products in the warehouse:\n`

        result += this.products.map(({product, quantity}) => `${product}-${quantity} more left`).join('\n');

        return result;
    }
}
const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());