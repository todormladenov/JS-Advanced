function sumFirstLast(arr) {

    let firstEl = Number(arr[0]);
    let secondEl = Number(arr[arr.length - 1]);

    let result = firstEl + secondEl;

    return result

}
sumFirstLast(['20', '30', '40'])
sumFirstLast(['10', '5'])