"use strict";
/* eslint-disable */

class TreeNode {
    constructor(value) {
    this.value = value;
    this.descendents = [];
    }
   }
   // create nodes with values
   const abe = new TreeNode('Abe');
   const homer = new TreeNode('Homer');
   const bart = new TreeNode('Bart');
   const lisa = new TreeNode('Lisa');
   const maggie = new TreeNode('Maggie');
   // associate root with is descendents
   abe.descendents.push(homer);
   homer.descendents.push(bart, lisa, maggie);
   

/**
 *  This function log all the names of each node in the tree 
 * @param {*} node is the node in the tree
 * @return{string} the name of all the nodes in the tree
 */

function printOut(node) {
    console.log(node.value);
    if (node.descendents === null) {
        return;
    } else {
        for (let child of node.descendents) {
            printOut(child);
        }
    }
}

printOut(abe);


/**
 * This function returns true if the target value is found as a name in one of the given tree node.
 * @param {*} node  the node in the tree
 * @param {*} target name of the node in the tree
 * @return{boolean} return true or false based on the comparision beetwen the target and the node
 */

function contains(node, target) {
    if (node.descendents === null) {
        if (node.value === target) {
            return true;
        } else {
            return false;
        }
    } else { 
        let childResult = false;
        if (node.value === target){
            return true;
        } 
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === true) {
                return true;
            }
        }
        return false;
    }
}


console.log(contains(abe, "Abe"));
console.log(contains(abe, "Lisa"));


function returnSubTree(node, target) {
    if (node.descendents === null) {
        if (node.value === target) {
            return node;
        } else {
            return null;
        }
    } else { 
        let childResult = null;
        if (node.value === target){
            return node;
        } 
        for (let child of node.descendents) {
            childResult = contains(child, target);
            if (childResult === child) {
                return child;
            }
        }
        return null;
    }
}


console.log(returnSubTree(abe, "Abe"));
console.log(returnSubTree(abe, "Lisa"));



