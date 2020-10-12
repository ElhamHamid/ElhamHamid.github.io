"use strict";
/*eslint-disable*/

// The difference between calls

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");

// These calls do the same thing or not?

rabbit.sayHi();// Rabbit becouse the method get name properties from the rabbit object
Rabbit.prototype.sayHi();// undefined becouse it is looking the property name inside the prototype which is just 
// constarctor function with a mathed, i.e no name properties inside it.
Object.getPrototypeOf(rabbit).sayHi();// undefined becouse it is looking the property name inside the prototype which is just 
// constarctor function with a mathed, i.e no name properties inside it.
rabbit.__proto__.sayHi();// undefined becouse it is looking the property name inside the prototype which is just 
// constarctor function with a mathed, i.e no name properties inside it.