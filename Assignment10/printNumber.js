"use strict";
/* eslint-disable */

// Using setInterval:

function printNumber(from, to) {
    let start=from;
    let timerId = setInterval(function my() {
        console.log(start);
        if (start === to) {
            clearInterval(timerId);
        }
        start++;
    }
        , 1000);
}



printNumber(3, 9);