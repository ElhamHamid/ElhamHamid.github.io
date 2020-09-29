"use strict";
/* eslint-disable */

function camelize(str){
let temparr=str.split("-");
let arr=temparr.map((item,index)=>index==0?item:item[0].toUpperCase()+item.slice(1));
let output=arr.join('');
return output;
}



console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));