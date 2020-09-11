"use strict";
/* eslint-disable*/

function sumObject(obj){
    let sum = 0;
for (let key in salaries) {
    sum+=salaries[key];
}
return sum;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
