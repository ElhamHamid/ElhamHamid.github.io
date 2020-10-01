"use strict";
/* eslint-disable*/

function FibonacciNumbers(n){
    if(n==1 || n==2){
        return 1;
    }else{
        return FibonacciNumbers(n-1) + FibonacciNumbers(n-2);
    }
}


console.log(FibonacciNumbers(7));