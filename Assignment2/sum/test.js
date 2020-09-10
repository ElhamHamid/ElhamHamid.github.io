"use strict";
/* global sum assert */


describe("sum",function() {
    it("it return the sum of elements of a given array",function() {
        assert.equal(sum([2,1,5]),8);
    });   
    it("it return the sum of elements of a given array",function() {
        assert.equal(sum([7,5,9]),21);
    });   
    it("it return the sum of elements of a given array",function() {
        assert.equal(sum([6,2,11]),19);
    });   
});