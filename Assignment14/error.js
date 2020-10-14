"use strict";
/*eslint-disable*/

class Animal {

    constructor(name) {
        this.name = name;
    }

}

/*class Rabbit extends Animal {
    constructor(name) {
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);*/

//  the Error is due to during Overridding the constarctor function of the parent with the child we 
// have to use the key word super to call parent constracter function before we override the it 


class Rabbit extends Animal {
    constructor(name) {
        super(name);
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.name);