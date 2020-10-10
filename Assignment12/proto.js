"use strict";
/* eslint-disable */


// Which values are shown in the process?

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // will log true becouse the proporty jumps inside the rabbit object will 
// shadow the one inhereted from the animal object

delete rabbit.jumps; 

console.log(rabbit.jumps); // this will log null becouse we deleted the property jump from the rabbit at line 18 and
// it gonna use the jump properties we inhereted from the prototype.

delete animal.jumps;

console.log(rabbit.jumps); // this will log undefined becouse there is no property name called jumps in the rabbit object and in the prototype