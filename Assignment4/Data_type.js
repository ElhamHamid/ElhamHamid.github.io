"use strict";

/* eslint-disable */



//Create a script that prompts the visitor to enter two numbers and then shows their sum.
let visitor1 = parseInt(prompt("The first number?", ""));
let visitor2 = parseInt(prompt("The second number?", ""));

alert( visitor1 + visitor2 );

// Repeat until the input is a number
function readNumber() {
    let num;  
    do {
      num = prompt("Enter a number: ", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert("Read: " + readNumber());

//infinite loop
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}


function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
  alert( random(1, 5) );
  alert( random(1, 5) );
  alert( random(1, 5) );


  //Uppercase the first character
  function ucFirst(str) {
    if (!str) return str;  
    return str[0].toUpperCase() + str.slice(1);
  }  
  alert( ucFirst("john") ); // John

//check Spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
  }
  
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );
  
  //Truncate the text
  function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
  }


  //Extract the money
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }


  //camelize
  function camelize(str) {
    let arr= str.split('-');       
     let arrL=arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      
      return arrL.join(''); 
  }