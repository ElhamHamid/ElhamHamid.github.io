"use strict";
/* eslint-disable */
function copySorted(arr){
    let output=arr.slice();
    return output;
}
let arr1 = ["HTML", "JavaScript", "CSS"];

let sorted=copySorted(arr1);

console.log(sorted.sort());
console.log(arr1);