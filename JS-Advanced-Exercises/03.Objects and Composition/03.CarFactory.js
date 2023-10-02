function carFactory(myCar){

    let orderedCar = {};

    orderedCar.model = myCar.model;

    if (myCar.power <= 90) {
        orderedCar.engine = { power: 90, volume: 1800 };
    } else if (myCar.power <= 120) {
        orderedCar.engine = { power: 120, volume: 2400 };
    } else {
        orderedCar.engine = { power: 200, volume: 3500 };
    }

    orderedCar.carriage = { type: myCar.carriage, color: myCar.color};
    orderedCar.wheels = [];

    if (myCar.wheelsize % 2 === 0) {
        myCar.wheelsize--
    }

    for (let i = 1; i <= 4; i++){
        orderedCar.wheels.push(myCar.wheelsize)
    }

    return orderedCar

}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 })
carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })