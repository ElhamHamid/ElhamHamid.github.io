"use strict";
/* eslint-disable */

function myMap(arr,func){
    const  newArray = [];
    for(let element of arr){
        newArray.push(func(element));
    }
    return newArray;
}
let Array2 = [1,2,3,4,5];
function double(num){
    return 2*num;
}
console.log(myMap(Array2,double))
