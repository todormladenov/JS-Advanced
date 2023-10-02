function heroicInventory(arr){

    let heroes = [];

    for (let line of arr) {
        let heroe = {}
        let [name, level, items] = line.split(" / ");

        heroe.name = name;
        heroe.level = Number(level)
        heroe.items = [];

        if (items) {
            items = items.split(", ");
            heroe.items = items;
        }
 
        heroes.push(heroe);
    }

    console.log(JSON.stringify(heroes));

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])
heroicInventory(['Jake / 1000'])