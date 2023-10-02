function lastKNumbersSequence(length, sumSequence) {

    let arr = [1];
    
    for (let i = 1; i < length; i++){
        let result = arr.slice(-sumSequence)

        result = result.reduce((acumolator, num) => acumolator + num)
        arr.push(result);
    }
    return arr;
}
lastKNumbersSequence(6,3)
lastKNumbersSequence(8,2)