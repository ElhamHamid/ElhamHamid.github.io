"use strict";
/* eslint-disable */

function Calculator() {

    this.read = function () {
        this.num1 = +prompt('Enter your first number?', 0);
        this.num2 = +prompt('Enter your second number?', 0);
    };

    this.sum = function () {
        return this.num1 + this.num2;
    };

    this.mul = function () {
        return this.num1 * this.num2;
    };
}

let calculator = new Calculator();
