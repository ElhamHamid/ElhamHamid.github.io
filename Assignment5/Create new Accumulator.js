"use strict";
/* eslint-disable */


let prompt=require("prompt-sync")();

function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(){
       this.value+=+prompt("please enter your number :");
    }
}


let accumulator = new Accumulator(1);

console.log(accumulator.read());

console.log(accumulator);