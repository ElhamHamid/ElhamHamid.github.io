"use strict";
/* global reverse assert */


describe("reverse ",function() {
    it("it reverse string and returned reversed one ",function() {
        assert.equal(reverse ("jag testar"),"ratset gaj");
    });   
    it("it reverse string and returned reversed one ",function() {
        assert.equal(reverse ("car"),"rac");
    });   
    it("it reverse string and returned reversed one ",function() {
        assert.equal(reverse ("racecar"),"racecar");
    });   
});