"use strict";
/* eslint-disable */

// We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// becouse they are inheriting both the method and the property from prototype, 
// when they update the properties value, it means they are updating the properties value of the prototype
// (i.e, this always refer to the object before the dot and 
// when they call the method eat and it looking for stomach inside the objects but cant find it in the desendents 
// so it gonna look into the prototype and push it there)

// so we can modify it by assigning the eat method to create new properties inside each object as follows



let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach=[food];
    }
  };
  
  let speedy = {
    __proto__: hamster
  };
  
  let lazy = {
    __proto__: hamster
  };
  
  speedy.eat("apple");
  console.log( speedy.stomach );

  console.log( hamster.stomach );
  
  console.log( lazy.stomach );