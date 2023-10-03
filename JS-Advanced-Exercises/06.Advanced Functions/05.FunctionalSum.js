function add(value) {
    let result = value;

    function sum(nextValue) {
        result += nextValue; 
        return sum;
    }

    sum.toString = function () {
        return result.toString();
    };

    return sum;
} 
console.log(add(1)(6)(-3).toString());
