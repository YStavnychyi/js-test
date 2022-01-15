// 1. Palindrom - chcemy sprawdzić czy zdanie składa się wyłącznie ze słów będących palindromami.
// fn(“Natan łatał kajak.“) = true
// fn(“Anna czyta potop“) = false;
// fn(“Devil lived”) = false;
// fn(“zakaz”) = true.
export const palindrome = (inputString) =>{
    let newArray = []
    const arrayStr = inputString.toLowerCase().split(' ')
    for (let i = 0; i < arrayStr.length; i++){
        let tmp = arrayStr[i].split('').reverse().join('')
        newArray.push(tmp)
    }
    return (arrayStr.join(' ') === newArray.join(' ')) ? true : false
}

// 2. Znajdź pierwszy niepowtarzalny znak w łańcuchu. Jeśli wszystkie znaki się powtarzają zwróć ‘-’.
// Przykład:
// fn(‘silevis’) = ‘l’;
// fn(‘aabbbcdde’ ) = ’c’;
// fn(‘eelloo’ ) = ’_’

export const findUniqueChar = (inputString) =>{
    for (let i = 0; i < inputString.length; i++){
        let letter = inputString.charAt(i)
        if(inputString.indexOf(letter) == i && inputString.indexOf(letter, i+1) == -1){
            return letter
        }
        // console.log(inputString.indexOf(letter), i, inputString.indexOf(letter,i+1))
    }
    return '-'
}


