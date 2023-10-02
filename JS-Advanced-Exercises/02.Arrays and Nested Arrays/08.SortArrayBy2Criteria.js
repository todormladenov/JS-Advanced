function sortArrayBy2Criteria(arr){

    let sortedArr = arr.sort((a, b) => {
        if (a.length - b.length) {
            return a.length - b.length
        }
        return a.localeCompare(b)
    })

    console.log(sortedArr.join('\n'));

}
sortArrayBy2Criteria(['alpha','beta','gamma']);
sortArrayBy2Criteria(['Isacc','Theodor','Jack','Harrison','George']);
sortArrayBy2Criteria(['test','Deny','omen','Default']);