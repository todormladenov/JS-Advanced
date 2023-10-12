class InventoryManager {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        if (this.items.length >= this.capacity) {
            throw new Error('The inventory is already full.');
        }

        let found = this.items.find(item => item.hasOwnProperty(itemName))
        if (!found) {
            let item = { [itemName]: Number(quantity) }
            this.items.push(item);
        } else {
            found[itemName] += Number(quantity);
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        let found = this.items.find(item => item.hasOwnProperty(itemName));
        if (!found) {
            throw new Error(`The item ${itemName} is not available in the inventory.`);
        }

        if (found[itemName] < quantity) {
            throw new Error(`Not enough ${itemName}(s) in stock.`);
        }

        found[itemName] = found[itemName] - Number(quantity);

        if (found[itemName] === 0) {
            this.items.splice(this.items.indexOf(found), 1);
            this.outOfStock.push(itemName);
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`;
    }

    restockItem(itemName, quantity) {
        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        }

        let found = this.items.find(item => item.hasOwnProperty(itemName))
        if (!found) {
            let item = { [itemName]: Number(quantity) }
            this.items.push(item);
        } else {
            found[itemName] += Number(quantity);
        }

        if (this.outOfStock.includes(itemName)) {
            this.outOfStock.splice(this.outOfStock.indexOf(itemName), 1);
        }

        return `Restocked ${quantity} ${itemName}(s) in the inventory.`;
    }

    getInventorySummary() {
        let resultItems = [`Current Inventory:`];

        for (let el of this.items) {
            let [itemName, quantity] = Object.entries(el)[0];
            resultItems.push(`${itemName}: ${quantity}`);
        }

        if (this.outOfStock.length) {
            resultItems.push(`Out of Stock: ${this.outOfStock.join(', ')}`)
        }
        return resultItems.join('\n');
    }
}

const manager = new InventoryManager(2);
console.log(manager.addItem("Hammer", 10));
console.log(manager.addItem("Level", 5));;
console.log(manager.sellItem("Hammer", 10));
console.log(manager.restockItem("Chisel", 5));
console.log(manager.getInventorySummary());
