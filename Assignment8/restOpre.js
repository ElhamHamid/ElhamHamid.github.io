"use strict";
/* eslint-disable */

// Illustration of Rest Operator in Copy an array In a destructurng assignment




// Illustration of Rest Operator in Copy an array In a function call


function findMax(...arr){
    let max=arr[0];

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}


console.log(findMax(1,2,3,4,5,6));
