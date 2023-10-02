function sortingNumbers(arr){

    let sortedInDescending = arr.sort((a, b) => a - b);
    let sortedInAscending = arr.sort((a, b) => b - a);
    let restult = [];

    while (arr.length) {
        let fisrtNum = sortedInDescending.pop();
        let secondNum = sortedInAscending.shift();

        restult.push(fisrtNum);
        restult.push(secondNum);
    }

    return restult;

}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
