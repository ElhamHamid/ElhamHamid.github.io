"use strict";
/* eslint-disable*/

// This function return the sum of the elements of an array

function sumNumber(arr){
    return arr.reduce((item,acc)=>acc + item,0);
}

// This function return the sum of all the ages of a given array of an object

function sumNumberObj(arr){
    return arr.reduce((acc,item)=> acc + item.age,0)
}

// This function return the average of all the elements of the given array

function averageNumber(arr){
   let total= arr.reduce((item,acc)=>acc + item,0);
   return total/arr.length;
}

// This function return the average of all the ages of the given array of an object
function averageNumberObj(arr){
    let total=arr.reduce((acc,item)=> acc + item.age,0);
    return total/arr.length;
}

// This function returns the maximum of a given elements of an array

function returnMax(arr){
    return Math.max(...arr);
}

// This function returns the maximum age of a given array of objects





const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]

console.log(sumNumber(numArray));
console.log(sumNumberObj(peopleArray));
console.log(averageNumber(numArray));
console.log(averageNumberObj(peopleArray));
console.log(returnMax(numArray));
