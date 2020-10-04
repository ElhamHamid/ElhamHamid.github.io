"use strict";
/* eslint-disable*/

// this function doubles the given array value

/**
 * 
 * @param {*} arr is the given array 
 * @return{arr} new array whith doubled each elements of the given array
 */

function doublenum(arr){
    return arr.map(item=>item *2);
}

// this function doubles the given object value of the age
/**
 * 
 * @param {*} arr is the give array of an object
 * @return{obj} new array of object which each age of the object is doubled
 */

function doubleObj(arr){
    return arr.map(item=>item.age *2);
}


const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]


console.log(doublenum(numArray));
console.log(doubleObj(peopleArray));


