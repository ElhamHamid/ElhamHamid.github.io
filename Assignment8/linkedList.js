"use strict";
/* eslint-disable */

let node5 = {
    name: "Maggte",
    children:null
};
let node4 = {
    name: "Lisa",
    children: null
};
let node3 = {
    name: "Bart",
    children: null
};
let node2 = {
    name: "Homer",
    children: [node3, node4,node5]
};
let node1 = {
    name: "Abe",
    children: [node2],
};

// This function log all the names of each node 

function printOut(node){
    console.log(node.name);
    if(node.children===null){
        return;
    }else{
        for(let child of node.children){
            printOut(child);
        }
    }
}

printOut(node1);
printOut(node5);


// This function returns true if the target value is found as a name for the given node.

function contains(node,target){
    if(node.name==target){
        return true;
    }else{
        false;
    }
}




console.log(contains(node1,"Abe"));