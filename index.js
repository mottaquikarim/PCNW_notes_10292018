const myObj = {}; //

myObj['foobar'] = 'string';

const dynKey = 'test';
myObj[dynKey] = 1;

myObj.someProperty = true;

// the names of the properties taht are a part of myObj
// at this point 
// foobar
// test

console.log(Object.keys(myObj)); // [ 'foobar', 'test', 'someProperty' ]

/*

    {
        'foobar': 'string',
        'test': 1,
        'someProperty': true,
    }

*/

// Object.keys => array of ALL properties belonging to object
// for loop through the keys
// for EACH key, store in variable => use that variable to access the value at the obj

const myKeys = Object.keys(myObj); // store the array returned by myObj into variable
for (let i = 0; i < myKeys.length; i++) {
    console.log(myKeys[i]); //
    const currentKey = myKeys[i];
    console.log(myObj[currentKey])
}


const obj1 = {
    'a': 1,
    'b': 2,
}

const obj2 = {
    'c': 3,
    'd': 4,
    'a': 0,
}

/*
    create new obj
    for loop through obj1 keys
        transfer them to new obj
    for loop through obj2 keys
        transer them to new obj
        
*/
const sumObj = Object.assign({}, obj1, obj2);
// the first argument, {} is the object that will ALWAYS be mutated
// the subsequent objects will be ADDED to the first argument

const sumObj2 = Object.assign(obj1, obj2);
// obj1 is now MUTATED and therefore will contain all keys of obj1 and obj2

