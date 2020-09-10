"use strict";
/* global filterLongWords assert */


describe("filterLongWords",function() {
    it("it returns words that have longest lengeth compered to the the given number",function() {
        assert.equal(filterLongWords (["hamid","said","mohammed"],5),"mohammed");
    });   
    it("it returns words that have longest lengeth compered to the the given number",function() {
        assert.equal(filterLongWords (["aman","sol","mia"],3),"aman");
    });   
});