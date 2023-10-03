function argumentInfo(...data){

    let counter = {};

    for (let el of data) {
        let type = typeof(el);
        console.log(`${type}: ${el}`);

        if (!counter.hasOwnProperty(type)) {
            counter[type] = 0;
        }

        counter[type] += 1;
    }

    let sortedCounter = Object.entries(counter).sort((a,b) => b[1] - a[1]);

    for (let [key, value] of sortedCounter) {
        console.log(`${key} = ${value}`);
    }

}
argumentInfo('cat', 42, function () { console.log('Hello world!');})
console.log('-------------------------');
argumentInfo({ name: 'bob'}, 3.333, 9.999)