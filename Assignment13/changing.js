"use strict";
/*eslint-disable*/



function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

let rabbit = new Rabbit();

console.log( rabbit.eats ); // true

Rabbit.prototype = {};
console.log( rabbit.eats ); // ?1 true  becouse the relation ship beetwen the constractor function and 
// the new created object will end as soon as the new object created

Rabbit.prototype.eats = false;
console.log( rabbit.eats ); // ?2 false becouse the the prototype property of eats is changed and the rabbit object has inherrited the eats
//  property from the prototype object and gonne read the updated value of the prototype properties 

delete rabbit.eats;
console.log( rabbit.eats ); // ?3 true becouse the rabbit object cal only read the properties 
// from the prototype object and can't delete it. it only have read only permission on the properties from the prototype object 

delete Rabbit.prototype.eats;
console.log( rabbit.eats ); // ?4 undefined,Since the eats propeties from the prototype object is deleted, 
// the compliler cant find it either inside the rabbit object or the prototype object 