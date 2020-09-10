"use strict";
/* global findLongestWord assert */


describe("findLongestWord",function() {
    it("it return the array with the longest length",function() {
        assert.equal(findLongestWord(["apple","ball","cat"]),5);
    });   
    it("it return the array with the longest length",function() {
        assert.equal(findLongestWord(["dog","elephant","frog"]),8);
    });   
    it("it return the array with the longest length",function() {
        assert.equal(findLongestWord(["grass","hall","iron"]),5);
    });   
});