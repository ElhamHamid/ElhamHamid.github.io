"use strict";
/* eslint-disable */

function filterLongWords(arr,n){
    let temp_arr=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i].length>n){
            temp_arr.push(arr[i]);
        }
    }
    return temp_arr;
}

