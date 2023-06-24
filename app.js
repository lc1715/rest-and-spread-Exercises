
// rest and spread Exercises:
// Given this function, Refactor it to use the rest operator & an arrow function:****
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function (num) {
//         return num % 2 === 0
//     });
// }


// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(...nums);
//     return nums.filter(num => num % 2 === 0);
// }



const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)




// ## **findMin**

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

function findMin(...nums) {
    return Math.min(...nums)
}

findMin(1, 4, 12, -3) // -3
findMin(1, -1) // -1
findMin(3, 1) // 1




// ## **mergeObjects**
// Write a function called ***mergeObjects*** that accepts two objects 
// and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2) {

    const oneObj = { ...obj1, ...obj2 }
    return oneObj
}

mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })
// {a:1, b:2, c:3, d:4}



// ## **mergeObjects**
// Write a function called ***doubleAndReturnArgs*** which accepts an array and a variable number of arguments. 
//The function should return a new array with the original array values and all of additional arguments doubled.

function doubleAndReturnArgs(arr, ...nums) {
    return [...arr, ...nums.map(el => el + el)]
}





// Slice and Dice:
// For this section, write the following functions using rest, spread and refactor these functions to be 
// arrow functions!

// Make sure that you are always returning a new array or object and not modifying the existing inputs.


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {

    let randomNum = Math.floor((Math.random() * items.length))

    items.splice(randomNum, 1)

    return items;
}


/** Return a new array with every item in array1 and array2. */



const extend = (array1, array2) => {

    const newArr = [...array1, ...array2]
    return newArr;
}

const animals = ['cat', 'dog', 'bird']

const farmAnimals = ['cow', 'pig', 'goat']



/** Return a new object with all the keys and values
from obj and a new key/value pair */

const grades = {
    math: 'A',
    english: 'A',
    science: 'A'
}

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val
    return newObj
}


/** Return a new object with a key removed. */

const ratings = {
    lily: 1,
    rose: 2,
    carnation: 3
}

const removeKey = (obj, key) => {

    const newObj = { ...obj }

    delete newObj[key];

    return newObj;
}

removeKey(ratings, 'carnation')




/** Combine two objects and return a new object. */

const weather1 = {
    week1: 'cloudy',
    week2: 'sunny',
    week3: 'rainy'
}
const weather2 = {
    week4: 'snowy',
    week5: 'misty',
    week6: 'breezy'
}

const combine = (obj1, obj2) => {

    const obj3 = { ...obj1, ...obj2 }
    return obj3;
}



/** Return a new object with a modified key and value. */


const usernames = {
    username1: 'katty',
    username2: 'doggy',
    username3: 'ratty'
}


const update = (obj, key, val) => {

    const newObj = { ...obj }

    newObj[key] = val;

    return newObj;
}

