function storeCatalogue(arr) {

    let sortedProducts = arr.sort((a, b) => a.localeCompare(b))
    let nextLetter = '';
        
    for (let i = 0; i < arr.length; i++){
        let [product, price] = sortedProducts[i].split(" : ");

        if (product[0] !== nextLetter) {
            nextLetter = product[0];
            console.log(nextLetter);
        }
        console.log(` ${product}: ${price}`);
    }

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])
