/*  2
    @function appendEachObject
    @param a {Object}
    @param b {Number}
    @returns {Object}
    @description:
        - given an object and a number, append number
            to each item in object if that item is a number
        - assume objects are flat (ie, no child objects)
    @example appendEachObject({'a': 1, 'b': true}, 5)
             // returns {'a': 6, 'b': true}
*/
const appendEachObject = (a, b) => {
    const keys = Object.keys(a);
    for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        const currentVal = a[currentKey];

        if (typeof currentVal === "number") {
             a[currentKey] = currentVal + b;
        }

        console.log(currentKey)
        console.log(currentVal)
    }
    return a;
}


const obj = {
    'a': 1,
    'b': true,
};
console.log(appendEachObject(obj, 5)); // {'a': 6, 'b': true}
