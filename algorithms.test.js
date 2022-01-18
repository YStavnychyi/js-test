import {
    findUniqueChar, flatTreeToNestedTree, nestedTreeToFlatTree, numAddElem,
    palindrome


} from './algorithms';

describe('algorithms', () =>{
    it('should return true if the sentence only consists of words that are palindromes.', () => {
        const inputString = palindrome('Natan łatał kajak');
        expect(inputString).toBe(true);
    });

    it('should return true if the sentence only consists of words that are palindromes.', () => {
        const inputString = palindrome('zakaz');
        expect(inputString).toBe(true);
    });

    it('should return false if the sentence has at least one word that is not a palindrome. ', () => {
        const inputString = palindrome('Anna czyta potop');
        expect(inputString).toBe(false);
    });

    it('should return false if the sentence has at least one word that is not a palindrome. ', () => {
        const inputString = palindrome('Devil lived');
        expect(inputString).toBe(false);
    });

    it('should return a unique character if one exists', () => {
        const inputString = findUniqueChar('silevis')
        const expected = 'l'
        expect(inputString).toEqual(expected)
    });

    it('should return a unique character if one exists', () => {
        const inputString = findUniqueChar('aabbbcdde')
        const expected = 'c'
        expect(inputString).toEqual(expected)
    });

    it('should return a sign if all characters were repeating.', () => {
        const inputString = findUniqueChar('eelloo')
        const expected = '-'
        expect(inputString).toEqual(expected)
    });

    it('should return the number of elements was added to the sorted array so that there are no gaps between the numbers', () => {
        const inputArray = numAddElem([5,2,9,7])
        const expected = 4
        expect(inputArray).toEqual(expected)
    });

    it('should return an error message if the function arguments are not specified', () => {
        const inputArray = numAddElem()
        expect(inputArray).toBe('Array not created!')
    });

    it('should return the nested tree structure', () => {
        const data = [
            { id: 1, parentId: null },
            { id: 2, parentId: 1 },
            { id: 3, parentId: 1 },
            { id: 4, parentId: 3 } ];

        const expectedData = [
            {
                "id": 1,
                "parentId": null,
                "children": [
                    {
                        "children": [],
                        "id": 2,
                        "parentId": 1
                    },
                    {
                        "id": 3,
                        "parentId": 1,
                        "children": [
                            {
                                "children": [],
                                "id": 4,
                                "parentId": 3
                            }
                        ]
                    }
                ]
            }
        ]
        expect(flatTreeToNestedTree(data)).toEqual(expectedData)
    });

    it('should ', () => {
        const data = [
            {
                "id": 1,
                "parentId": null,
                "children": [
                    {
                        "children": [],
                        "id": 2,
                        "parentId": 1
                    },
                    {
                        "id": 3,
                        "parentId": 1,
                        "children": [
                            {
                                "children": [],
                                "id": 4,
                                "parentId": 3
                            }
                        ]
                    }
                ]
            }
        ];

        const expectedData = [
            {
                "id": 1,
                "parentId": null
            },
            {
                "id": 2,
                "parentId": 1
            },
            {
                "id": 3,
                "parentId": 1
            },
            {
                "id": 4,
                "parentId": 3
            }
        ]
        expect(nestedTreeToFlatTree(data)).toEqual(expectedData)
    });
})