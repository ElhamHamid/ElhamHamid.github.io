"use strict";
/* eslint-disable */

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  
  rabbit.eat();

//   If we call rabbit.eat(), which object receives the full property: animal or rabbit?

//  rabbit object becouse descendent objects can run its methods and will modify their own state.