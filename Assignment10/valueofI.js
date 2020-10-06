"use strict";
/* eslint-disable */

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}


// The setTimeout will run only ones after the current code excution is over.
// in our case after the code at line 9 is over the setTimeout will be excuted ones after 100ms,at this time 
// the value of i will be 100000000, thats why it rints out that becouse 
// the function will take the updated value of the variable in its lexical environment