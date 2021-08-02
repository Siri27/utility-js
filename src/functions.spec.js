const func = require('./functions');

describe('Functions', () => {

    //Head Function
    it('Head of arrray[] is undefined', () => {
        expect(func.head([])).toEqual(undefined);
    });

    it('Head of array[1,2,3] is [1]', () => {
        expect(func.head([1,2,3])).toEqual(1);
    }); 

    //Tail Function
    it('Tail of array[1,2,3] is [2,3] ', () => {
        expect(func.tail([1,2,3])).toEqual([2,3]);
    });

    it('Tail of array[] is[]', () => {
        expect(func.tail([])).toEqual([]);
    });

    //Max Function
    it("Max value in array [1,2,3,4] is 6", () => {
        expect(func.max([1,2,3,4])).toBe(4);
    });

    //Min Function
    it("Min value in array [1,2,3,4] is 1", () => {
        expect(func.min([1,2,3,4])).toBe(1);
    });

}); 