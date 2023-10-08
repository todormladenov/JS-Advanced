function sum(numbers, start, end){

    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);

    let calculateRange = numbers.slice(startIndex, endIndex + 1);

    return calculateRange.reduce((a ,b) => a + Number(b), 0);

}
console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sum([], 1, 2));
console.log(sum([10, 'twenty', 30, 40], 0, 2));
console.log(sum('text', 0, 2));