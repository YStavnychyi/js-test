import {
    findUniqueChar,
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
        const expeccted = 'l'
        expect(inputString).toEqual(expeccted)
    });

    it('should return a unique character if one exists', () => {
        const inputString = findUniqueChar('aabbbcdde')
        const expeccted = 'c'
        expect(inputString).toEqual(expeccted)
    });

    it('should return a sign if all characters were repeating.', () => {
        const inputString = findUniqueChar('eelloo')
        const expeccted = '-'
        expect(inputString).toEqual(expeccted)
    });
})