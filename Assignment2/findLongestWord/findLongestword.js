"use strict";
/* eslint-disable */

function findLongestWord(arr){
    let longest=arr[0].length;
    for(let i=1;i<arr.length;i++){
        if(arr[i].length>longest){
            longest=arr[i].length
        }
    }
    return longest;
    
}
