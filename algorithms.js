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
        //console.log(inputString.indexOf(letter), i, inputString.indexOf(letter,i+1))
    }
    return '-'
}
// //console.log(findUniqueChar('silevis'))

// 3. Dana jest tablica unikalnych, nieujemnych, całkowitych liczb. Wykonaj funkcję, która zwraca ilość elementów, które po posortowaniu tablicy powinny się dodać, aby nie było przerw między kolejnymi liczbami.
//     Przykład:
// fn( [5,2,9,7]) = 4; // [2, 3, 4, 5, 6, 7, 8, 9];
// fn( [1, 2, 3]) = 0; // [1, 2, 3];
// fn( [4, 9]) = 4; // [4, 5, 6, 7, 8, 9];
// fn( [1]) = 0; // [1].
export const numAddElem = (array) =>{
    let newArray = []
    if(!array){
        return 'Array not created!'
    }else {
        array.sort((a,b) =>{
            return a - b
        })
    }
    //console.log(array[array.length-1])
    for(let i = array[0]; i <= array[array.length - 1]; i++){
        newArray.push([i])
    }
    // console.log(newArray)
    return newArray.length - array.length
}
//console.log(numAddElem([5,2,9,7]))

// 4. Mapowanie z płaskiej struktury drzewiastej na zagnieżdżoną.
// const flatTree = [
//     { id: 1, parentId: null },
//     { id: 2, parentId: 1 },
//     { id: 3, parentId: 1 },
//     { id: 4, parentId: 3 } ];
export const flatTreeToNestedTree = (items, id=null, link = 'parentId') =>{
    return items
        .filter(item => item[link] === id)
        .map(item => ({ ...item, children: flatTreeToNestedTree(items, item.id) }));
}

// 5. Mapowanie z zagnieżdżonej struktury drzewiastej na płaską.
// const expectedData = [
//     {
//         "id": 1,
//         "parentId": null,
//         "children": [
//             {
//                 "children": [],
//                 "id": 2,
//                 "parentId": 1
//             },
//             {
//                 "id": 3,
//                 "parentId": 1,
//                 "children": [
//                     {
//                         "children": [],
//                         "id": 4,
//                         "parentId": 3
//                     }
//                 ]
//             }
//         ]
//     }
// ]
export const nestedTreeToFlatTree = obj => {
    const array = Array.isArray(obj) ? obj : [obj]
    return array.reduce((acc,value)=>{
        acc.push(value)
        if(value.children){
            acc = acc.concat(nestedTreeToFlatTree(value.children));
            delete value.children
        }
        return acc
    },[])
}
// //console.log(nestedTreeToFlatTree(expectedData))