function greatestCommonDivisor(numA, numB) {

    let maxNum = Math.max(numA, numB);
    let result = [];

    for (let i = 1; i <= maxNum; i++) {

        if (numA % i === 0 && numB % i === 0) {
            result.push(i)
        }
    }

    console.log(Math.max(...result));


}
greatestCommonDivisor(15, 5)
greatestCommonDivisor(2154, 458)