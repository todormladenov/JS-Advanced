function cookingByNumbers(num, op1, op2, op3, op4, op5) {
    
    num = Number(num);
    let arr = [];

    arr.push(op1);
    arr.push(op2);
    arr.push(op3);
    arr.push(op4);
    arr.push(op5);

    let parser = {
        'chop': num => {
            num = num / 2;
            return num;
        },
        'dice': num => {
            num = Math.sqrt(num);
            return num;
        },
        'spice': num => {
            num += 1;
            return num;
        },
        'bake': num => {
            num *= 3;
            return num;
        },
        'fillet': num => {
            num *= 0.8;
            return num
        }
    }

    for (let operation of arr) {
        num = parser[operation](num);
        console.log(num);
    }
    
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');