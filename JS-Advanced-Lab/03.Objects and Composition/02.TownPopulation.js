function townPopulation(arr){

    let cities = {};

    for (let line of arr) {
        let [town, population] = line.split(' <-> ');
        
        if (!cities.hasOwnProperty(town)) {
            cities[town] = 0;
        }

        cities[town] += Number(population);

    }

    for (let [key, value] of Object.entries(cities)) {
        console.log(`${key} : ${value}`);
    }

}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])
townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])