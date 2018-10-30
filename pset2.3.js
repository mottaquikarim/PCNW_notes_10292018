/*  3
    @function mapObject
    @param a {Object}
    @param b {Function}
    @returns {Object}
    @description:
        - given an object and a callback, update each item
            in object with output from the callback
        - assume objects are flat (ie, no child objects)
    @example mapObject({'a': 1,}, (key, value) => {
        console.log(key) // a
        console.log(value) // 1
        
        return value+2;
    })
             // returns {'a': 3,}
*/
const mapObject = (obj, cb) => {
    const newObj = {};
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        const currentKey = keys[i];
        const currentVal = obj[currentKey];
        //console.log(currentVal);

        const transformedEl = cb(currentKey, currentVal);
        newObj[currentKey] = transformedEl;
    }

    return newObj;
}

const grades = {
    'personA': 85,
    'personB': 98,
    'personC': 54,
}

const curved = mapObject(grades, (key, value) => {
    console.log('key is: ', key);
    console.log('value is: ', value);
    return value + 11;
})

console.log(curved);
console.log('expected: ', {
    'personA': 96,
    'personB': 109,
    'personC': 65,
});
