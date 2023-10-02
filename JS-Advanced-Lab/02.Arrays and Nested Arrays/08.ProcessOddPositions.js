function processOddPositions(arr){

    let oddPositionEl = arr.filter((el, i) => i % 2 !== 0);
    let doubledEl = oddPositionEl.map(el => el * 2);
    
    let reversedEl = doubledEl.reverse().join(' ')
    return reversedEl;

}
processOddPositions([10, 15, 20, 25])
processOddPositions([3, 0, 10, 4, 7, 3])