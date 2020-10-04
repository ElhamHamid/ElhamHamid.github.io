"use strict";
/* eslint-disable */

let maggie = {
    value: "Maggie",
    next: null
};
let lisa = {
    value: "Lisa",
    next: null
};
let bart = {
    value: "Bart",
    next: null
};
let homer = {
    value: "Homer",
    next: [bart, lisa, maggie]
};
let abe = {
    value: "Abe",
    next: [homer],
};


function findListNode(list, target) {
    if (list.next === null) {
        if (list.value === target) {
            return list
        } else {
            return null;
        }
    } else {
        if (list.value === target) {
            return list;
        }
        for(let child of list.next){
            
        }
        }
}


console.log(findListNode(abe, "Bart"));