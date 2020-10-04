"use strict";
/* eslint-disable*/


// this function filters all even number from the given array value
/**
 * 
 * @param {*} arr is the given array
 * @return{obj} returns an array of filtered number with the condition
 */

function filterEven(arr){
    return arr.filter(function(item){
        if(item % 2===0){
            return item;
        }
    })
}


// this function filters all even number from the given array of object of value the age
/**
 * 
 * @param {*} arr is the given array
 * @return{obj} returns an array of object of filtered age with the condition
 */


function filterEvenObj(arr){
    return arr.filter(function(item){
        if(item.age % 2===0){
            return item.age;
        }
    })
}
// this function filters all ages greter than 10 from the given array of an object
/**
 * 
 * @param {*} arr is the given array of object
 * @returns{obj} returns array of object which are filtered with the condition
 */

function filterNumGreaterObj(arr){
    return arr.filter(function(item){
        if(item.age >10){
            return item;
        }
    })
}

/**
 * 
 * @param {*} arr the give array
 * @returns{Number} returns the first element of the array which satsfied the conditon 
 */

function findEven(arr){
    return arr.find(function(item){
        if(item % 2===0){
            return item;
        }
    });
}



const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]


console.log(filterEven(numArray));
console.log(filterEvenObj(peopleArray));
console.log(filterNumGreater(numArray));
console.log(filterNumGreaterObj(peopleArray));
console.log(findEven(numArray));

