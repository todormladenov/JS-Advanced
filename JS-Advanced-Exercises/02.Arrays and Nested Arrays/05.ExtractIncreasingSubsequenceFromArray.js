function extractIncreasingSubsequenceFromArray(arr){

    let currBiggestnum = arr.shift();
    let restul = [];
    restul.push(currBiggestnum);

    for (let num of arr) {
        if (num >= currBiggestnum) {
            restul.push(num);
            currBiggestnum = num;
        }
    }

    return restul;

}
extractIncreasingSubsequenceFromArray([1,3,8,4,10,12,3,2,24])
extractIncreasingSubsequenceFromArray([1,2,3,4])
extractIncreasingSubsequenceFromArray([20,3,2,15,6,1])