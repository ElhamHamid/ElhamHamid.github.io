"use strict";
/* eslint-disable */

// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"? it will return the updated value of name which is "Pete"


// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
    let name = "Pete";
  
    return function() {
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show? it will display "Pete" becouse the tiny function will takes 
//   the value of name from its own lexacical environment,which is relatively global to it 


// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?
// Both counter and counter2 are independant of each other becouse for every function call 
// there will be different and independat lexical environmennt having its own property and reference.

function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter2 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  
  console.log( counter2() ); // ? will log 0
  console.log( counter2() ); // ? will log 1 

//   Look at the code. What will be the result of the call at the last line?
// the function call can not access functiion sayHi becouse 
// it is only accessable inside the if block(Block scope). the result will be error. 

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

// Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {

    return function (b) {
        return a + b; 
    };

}

console.log(sum(1)(2)); 
console.log(sum(5)(-1)); 