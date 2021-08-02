const map = require('./map')

describe('Map', ()=>{

    it('mapping array to cubing', ()=>{
        expect(map([1,2,3,4],num=>Math.pow(num,3))).toEqual([1,8,27,64]);
    });

    it("Empty array returns []", ()=>{
        expect(map([],num=>Math.pow(num,3))).toEqual([]);
    });

    it("return identity of an array", ()=>{
        expect(map([1,2,3,4],num=>num)).toEqual([1,2,3,4]);
    });

});