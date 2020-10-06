"use strict";
/* eslint-disable */

// Using nested setTimeout:

function printNumber(from, to) {
    let start = from;
    setTimeout(function my() {
        console.log(start);
        let timerId = setTimeout(my, 1000);
        if (start === to) {
            clearTimeout(timerId);
        }
        start++;
    }, 1000)
}




printNumber(3, 9);