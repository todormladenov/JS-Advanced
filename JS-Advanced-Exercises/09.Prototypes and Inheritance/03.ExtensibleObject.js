function extensibleObject() {
    let parentObj = {};
    let childObj = Object.create(parentObj);

    childObj.extend = function (obj) {
        for (let [key, value] of Object.entries(obj)) {
            if (typeof (value) === 'function') {
                parentObj[key] = value;
            } else {
                childObj[key] = value
            }
        }
    }
    return childObj;
}
const myObj = extensibleObject();
const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
}
myObj.extend(template);