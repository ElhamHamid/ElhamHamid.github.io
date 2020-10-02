"use strict";
/* eslint-disable */

// Illustration of spread Operator in Copy an array

let arr=[1,2,3,4,5];

let copiedArray=[...arr];

console.log(copiedArray);

// Illustration of spread Operator in Concatenate arrays into a new array

let arr1=[1,2,3];
let arr2=[4,5,6];

let concatenetd=[...arr1,...arr2];
console.log(concatenetd);

//  Illustration of spread Operator in Concatenate an array and a new array element

let arr3=[1,2,3];
let arr4=[4,5,6];


let concatenetdArr=[...arr1,9,...arr2,7,8];
console.log(concatenetdArr);
//Illustration of spread Operator in Use an array as arguments in a function expecting multiple arguments

function findMax(arr){
    return Math.max(...arr);
}

let num=[1,2,3,4,5,6];

console.log(findMax(num));


