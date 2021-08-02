const filt = require('./filter');

describe('Filter an array', () => {

    it('Empty array returns []', () => {
        expect(filt([], num=>true)).toEqual([]);
    });

    it('[1,2,3] array on condition true returns [1,2,3]', () => {
        expect(filt([1,2,3], num=>true)).toEqual([1,2,3]);
    }); 

    it('[1,2,3] array on condition false returns []', () => {
        expect(filt([1,2,3], num=>false)).toEqual([]);
    });

    it('[1,2,3] array on condition greater than 1 ,returns [2,3]', () => {
        expect(filt([1,2,3], num=>num>1)).toEqual([2,3]);
    });

    it("['a','B','c','D'] array returns [1,2,3]", () => {
        expect(filt(['a','B','c','D'], char=>char==char.toUpperCase())).toEqual(['B','D']);
    });

});