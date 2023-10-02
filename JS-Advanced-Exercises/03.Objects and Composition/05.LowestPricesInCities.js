function lowestPricesInCities(arr) {

    let result = [];

    for (let line of arr) {
        let [town, product, price] = line.split(" | ");
        price = Number(price)

        let found = result.find(el => el.product === product);

        if (found) {
            if (found.price > price) {
                let indexOfTown = result.indexOf(found);
                result.splice(indexOfTown, 1, { town, product, price });    
            }
        } else {
            result.push({ town, product, price })
        }
    }

   for (let obj of result) {
    let {town, product, price} = obj;
    console.log(`${product} -> ${price} (${town})`);
   }

}
lowestPricesInCities(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000'])