function listProcessor(arr) {

    let listCollection = [];
    
    let commandProcessor = {
        add: (string) => {
            listCollection.push(string);
        },
        remove: (string) => {
            while (listCollection.includes(string)) {

                let indexOfString = listCollection.indexOf(string);
                listCollection.splice(indexOfString, 1);

            }
        },
        print: () => {
            console.log(listCollection.join(','));
        }
    }
    
    arr.forEach(el => {
        let [command, string] = el.split(' ');

        switch (command) {
            case 'add': commandProcessor[command](string); break;
            case 'remove': commandProcessor[command](string); break;
            case 'print': commandProcessor[command](); break;
        }
    });
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);