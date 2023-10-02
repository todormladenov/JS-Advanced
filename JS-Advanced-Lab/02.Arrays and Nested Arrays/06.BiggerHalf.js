function biggerHalf(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let halfOfTheArr = Math.floor(sortedArr.length / 2);
    let secondHalf = sortedArr.slice(halfOfTheArr)

    return secondHalf
}
biggerHalf([4, 7, 2, 5])
biggerHalf([3, 19, 14, 7, 2, 19, 6])