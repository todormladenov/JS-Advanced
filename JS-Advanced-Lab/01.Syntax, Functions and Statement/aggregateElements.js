function aggregateElements(arr) {

    let parser = {
        "sum": (arr) => {

            let result = 0;
            for (let i = 0; i < arr.length; i++) {
                result += arr[i];
            }

            return result
        },
        "sumInverseValues": (arr) => {

            let result = 0;
            for (let i = 0; i < arr.length; i++) {
                result += 1 / arr[i];
            }

            return result;
        },
        "concat": (arr) => {

            return arr.join("");
        }
    }

    console.log(parser.sum(arr));
    console.log(parser.sumInverseValues(arr));
    console.log(parser.concat(arr));

}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])