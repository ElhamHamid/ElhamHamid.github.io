"use strict";
/* eslint-disable */


function myReduce(arr,fun,int){
    let accumulator=int;
    for(const element of arr){
        accumulator= fun(accumulator,element);
    }
    return accumulator;
}
const Array1=[1,2,3,4,5]
function sumFn(acc,curre){
    return acc + curre;
}
let result = myReduce(Array1,sumFn,0);
console.log(result);