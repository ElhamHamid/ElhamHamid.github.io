"use strict";
/* eslint-disable */

// Is it possible to create functions A and B such as new A()==new B()?
// yes it is possible, as we know constracter function has no return value but if they have, we have two rules:
// 1,if return is called with object, the object is returned insted of this.
// 2,if return is called with primitives,it will be ignered.

// If the two functions are returning the same externaly created object we can cretet the function as follows;


let object={};

function A(){
    return object;
}

function B(){
    return object;
}


console.log(new A()===new B());