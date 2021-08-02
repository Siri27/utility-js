const reduce= require('./reduce');
describe('Reduce',()=>{
    it('Empty array returns undefined', () => {
        expect(reduce([], (x,y)=>x+y)).toEqual(undefined);
    });

    it('Empty array with parameter 10 returns 10', () => { 
        expect(reduce([], (x,y)=>x+y, 10)).toEqual(10);
    });

    it("['a','b','c'] returns abc", () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y)).toEqual('abc');
    });

    it("['a','b','c'] with parameter 'z' returns zabc", () => {
        expect(reduce(['a','b','c'], (x,y)=>x+y, 'z')).toEqual('zabc');
    });


});