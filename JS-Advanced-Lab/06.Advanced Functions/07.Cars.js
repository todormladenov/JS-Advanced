function cars(arr){

    let result = {};

    let commandParser = {
        create: (name) => {
            result[name] = {};
        },
        inherit: (name, parentName) => {

            result[name] = {}
            result[name].inherit = result[parentName];
        },
        set: (name, key, value) => {
            result[name][key] = value;
        },
        print: (name) => {
            let carToPrint = result[name];
            let printResult = [];

            function printProperties(carToPrint) {
                for (let [key, value] of Object.entries(carToPrint)) {

                    if (key === 'inherit') {
                        continue;
                    }

                    printResult.push(`${key}:${value}`)
                }
            }

            printProperties(carToPrint);

            if (result[name].hasOwnProperty('inherit')) {
                let parentName = result[name].inherit;
                printProperties(parentName);
            }

            console.log(printResult.join(','));
        }
    }

    arr.forEach(line => {
        let tokens = line.split(' ');

        let command = tokens[0];

        if (tokens.includes('inherit')) {
            command = tokens[2];
        }
        
        let name = tokens[1];

        switch (command) {
            case 'create': 

            commandParser[command](name);
            break;

            case 'set': 

            let key = tokens[2];
            let value = tokens[3];
            commandParser[command](name, key, value);
            break;

            case 'inherit': 

            let parentName = tokens[3];
            commandParser[command](name, parentName)

            break;

            case 'print': 
                commandParser[command](name)
            break;
        }
    });

}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2'])
cars(['create pesho',
'create gosho inherit pesho',
'create stamat inherit gosho',
'set pesho rank number1',
'set gosho nick goshko',
'print stamat'])