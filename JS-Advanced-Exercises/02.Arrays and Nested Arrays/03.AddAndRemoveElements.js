function addAndRemoveElements(arr){

    let result = [];
    let elToAdd = 1

    for (let command of arr) {
        if (command === "add") {
            result.push(elToAdd);

        } else {
            result.pop()
            
        }

        elToAdd++;
    }

    if (result.length) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }

    
}
addAndRemoveElements(['add', 
'add', 
'add', 
'add'])
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add'])
addAndRemoveElements(['remove', 
'remove', 
'remove'])