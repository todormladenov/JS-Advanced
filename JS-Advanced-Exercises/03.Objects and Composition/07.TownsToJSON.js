function townsToJSON(arr){

    let result = [];
    let firstLine = arr.shift();
    let keys = firstLine.split('|');

    for (let el of arr) {
        let values = el.split('|');
        values[1] = values[1].trim()
        values[2] = Number(values[2].trim())
        values[3] = Number(values[3].trim())

        result.push({ 'Town': values[1], 'Latitude': Number(values[2].toFixed(2)), 'Longitude': Number(values[3].toFixed(2))});
    }

    console.log(JSON.stringify(result));   

}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
townsToJSON(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |'])