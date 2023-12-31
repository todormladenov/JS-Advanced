function solution(){

    let result = '';

    return {
        append: (input) => {
            return result += input;
        },
        removeStart: (n) => {
            return result = result.substring(n);
        },
        removeEnd: (n) => {
            return result = result.substring(0, result.length - n);
        },
        print: () => {
            console.log(result);
        },
    }

}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();