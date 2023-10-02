function smallestTwoNumbers(arr){

    let sortedArr = arr.sort((a, b) => a - b);
    let result = sortedArr.slice(0,2)
    
    return result.join(" ");
}
smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])