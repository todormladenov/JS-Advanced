function createSortedList() {

    let result = [];

    return {
        add: function (el) {
            result.push(el);
            this.size = result.length
            result = result.sort((a, b) => a - b);
        },
        remove: function (index) {
            if (index >= 0 && index < result.length) {
                result.splice(index, 1);
                this.size = result.length
            }
        },
        get: function (index) {
            if (index >= 0 && index < result.length) {
                return result[index]
            }
        },
        size: 0
    }

}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);