import {
    checkAvailability,
    filterNumbers,
    findElement,
    hasElements,
    mapUsers,
    removeFirstElement,
    sumAllValues
} from './arrays';

describe('arrays', () => {

    describe('hasElements', () => {
        it('should return false on empty array', () => {
            const result = hasElements([]);
            expect(result).toBe(false);
        });

        it('should return true on filled array', () => {
            const result = hasElements([1, 2]);
            expect(result).toBeTruthy();
        });

        it('should return false on no argument', () => {
            const result = hasElements();
            expect(result).toBe(false);
        });

        it('should return true when array is filled with undefined and null', () => {
            const result = hasElements([null, undefined, ]);
            expect(result).toBe(true);
        });
    });

    describe('getUser', () => {
        it('should return empty array when no argument', () => {
            const result = mapUsers()
            expect(result).toEqual([]);
        });

        it('should return filled array', () =>{
           const data = [
            {firstName: 'Yevhenii', lastName: 'Stavnychyi'},
            {firstName: 'Olha', lastName: 'Melnyk'},
           ];

           const expected = [
                {
                    "name": "Yevhenii Stavnychyi"
                },
                {
                    "name": "Olha Melnyk"
                }
            ];

           expect(mapUsers(data)).toEqual(expected);
        });

        it('should return new array when array is filled with undefined and null', () =>{
            const data = [
                {firstName: null, lastName: undefined},
                {firstName: undefined, lastName: null},
            ];

            const expected = [
                {
                    "name": "null undefined"
                },
                {
                    "name": "undefined null"
                }
            ];

            expect(mapUsers(data)).toEqual(expected);
        });
    });

    describe('getNumber', ()=>{
        it('should return array with numbers > 5', () => {
            const data = [2,10,5,3,6,17,20];

            const expected = [
                10,
                6,
                17,
                20
            ];

            expect(filterNumbers(data)).toEqual(expected);
        });

        it('should return empty array when no argument', ()=>{
           const result = filterNumbers();

            expect(result).toEqual([]);
        });

        it('should return empty array when array is filled with undefined and null', () => {
            const data = [null, undefined, null];

            expect(filterNumbers(data)).toEqual([]);
        });
    });

    describe('getElement', ()=>{
        it('should return number > 12', () => {
            const data = [2,10,5,3,6,17,20]

            const expected = 17

            expect(findElement(data)).toEqual(expected);
        });

        it('should return undefined when no values satisfy the function', ()=>{
            const result = findElement([2,10,5,3,6,1,4])

            expect(result).toBeUndefined();
        });

        it('should return undefined when no argument', ()=>{
            const result = findElement()

            expect(result).toBeUndefined();
        });

        it('should return undefined when array is filled with undefined and null', () => {
            const data = [null, undefined, null];

            expect(findElement(data)).toBeUndefined();
        });
    });

    describe('checkAvailability', ()=>{
        it('should return true when the element exists in the array', ()=>{
           const data = [
               'hello',
               'wello',
               'rello',
           ];

           const expected = 'wello';

           expect(checkAvailability(data,expected)).toBeTruthy();
        });

        it('should return false when the element not exists in the array', ()=>{
            const data = [
                'hello',
                'wello',
                'rello',
            ];

            const expected = 'dello';

            expect(checkAvailability(data,expected)).toBeFalsy();
        });

        it('should return false when the array is empty', ()=>{
            const data = [];

            const expected = '';

            expect(checkAvailability(data,expected)).toBeFalsy();
        });

        it('should return false when no argument', ()=>{
            const result = checkAvailability();

            expect(result).toBeFalsy();
        });

        it('should return true when array is filled with undefined and null', ()=>{
            const data = [null,undefined,null];

            const expected = undefined;

            expect(checkAvailability(data,expected)).toBeTruthy();
        });
    });

    describe('removeFirstElement', () =>{
        it('should return element that was removed from array', () => {
            const data = [
                'hello',
                'wello',
                'rello',
            ]

            const expected = 'hello'

            expect(removeFirstElement(data)).toEqual(expected);
        });

        it('should return undefined when the array is empty', () => {
            expect(removeFirstElement([])).toBeUndefined();
        });
    });

    describe('sumAllValues', () =>{
        it('should return sum of all elements array', () => {
            const data = [2,5,4,12]
            const expected = 23
            expect(sumAllValues(data)).toEqual(expected);
        });
    });
});
