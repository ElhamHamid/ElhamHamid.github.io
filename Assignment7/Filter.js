"use strict";
/* eslint-disable*/


// this function filters all even number from the given array value

function filterEven(arr){
    return arr.filter(function(item){
        if(item % 2===0){
            return item;
        }
    })
}


// this function filters all even number from the given array of object of value the age

function filterEvenObj(arr){
    return arr.filter(function(item){
        if(item.age % 2===0){
            return item.age;
        }
    })
}
// this function filters all numbers greter thatn 10 from the given array 

function filterNumGreater(arr){
    return arr.filter(function(item){
        if(item >10){
            return item;
        }
    })
}
// this function filters all ages greter thatn 10 from the given array of an object

function filterNumGreaterObj(arr){
    return arr.filter(function(item){
        if(item.age >10){
            return item;
        }
    })
}





const numArray = [5,0, 7, 77, -20, 300, 51, 2]
const peopleArray = [{name: "Sam", age: 15}, {name: "William", age: 6}, {name: "Lucy", age: 13}, {name:
"Barney", age: 80}]


console.log(filterEven(numArray));
console.log(filterEvenObj(peopleArray));
console.log(filterNumGreater(numArray));
console.log(filterNumGreaterObj(peopleArray));
