"use strict";
/* eslint-disable*/

function my(list){
    if(list.children==null){
        console.log(list.name);
    }else{
        for(let sub of list.children){
            console.log(my(sub));
        }
       
    }
}

let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
};
let node4 = {
    name: "label",
    value: "Name",
    children: null
};
let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
};
let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
};
let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
};

console.log(my(node2));