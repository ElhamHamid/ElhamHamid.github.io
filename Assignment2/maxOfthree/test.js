"use strict";
/* global maxOfThree assert */


describe("maxOfThree",function() {
    it("it return the maximum of a given numbers",function() {
        assert.equal(maxOfThree(2,1,5),5);
    });   
    it("it return the maximum of a given numbers",function() {
        assert.equal(maxOfThree(7,5,9),9);
    });   
    it("it return the maximum of a given numbers",function() {
        assert.equal(maxOfThree(6,2,11),11);
    });   
});