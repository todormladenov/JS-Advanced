class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length === this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let foundWine = this.wines.find(w => w.wineName === wineName);

        if (!foundWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (foundWine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        foundWine.paid = true;
        this.bill += Number(foundWine.price);

        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        let foundWine = this.wines.find(w => w.wineName === wineName);

        if (!foundWine) {
            throw new Error("The wine, you're looking for, is not found.");
        }

        if (!foundWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        }

        this.wines.splice(this.wines.indexOf(foundWine), 1);
        return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {

        if (!wineType) {
            let result = `You have space for ${this.space - this.wines.length} bottles more.\nYou paid ${this.bill}$ for the wine.\n`;

            result += this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName))
                .map(({ wineName, wineType, price, paid }) => {
                    let paidOrNot = paid ? 'Has Paid' : 'Not Paid';
                    return `${wineName} > ${wineType} - ${paidOrNot}.`;
                })
                .join('\n');

            return result;
        }

        let foundWine = this.wines.find(w => w.wineType === wineType);

        if (!foundWine) {
            throw new Error(`There is no ${wineType} in the cellar.`)
        }
        let paidOrNot = foundWine.paid ? 'Has Paid' : 'Not Paid';
        return `${foundWine.wineName} > ${foundWine.wineType} - ${paidOrNot}.`
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());


