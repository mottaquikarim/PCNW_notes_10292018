/*  1 ---
    @function addObjects
    @param a {Object}
    @param b {Object}
    @returns {Object}
    @description:
        - take two object literals and add them, return NEW object
        - if both objects have same key, use key of 
            second object
    @example addObjects({'a': 1}, {'b': 2})
             // returns {'a': 1, 'b': 2}
*/
const addObjects = (a,b, mutate=false) => {
    if (mutate) {
        return Object.assign(a,b)
    }
    return Object.assign({}, a, b)
}


const o1 = {'a': 1}
const o2 = {'b': 2}
console.log(addObjects(o1, o2, true));
console.log(o1);
// {'a': 1, 'b': 2}

/*
    TEST case
    given:
    const o1 = {'a': 1}
    const o2 = {'b': 2}

    addObjects(o1, o2) => {'a': 1, 'b': 1}
*/

// test
