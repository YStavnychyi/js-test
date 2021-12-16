export const hasElements = (array) => {
    return !!array?.length;
}
/*creates a new array populated with the results of calling a provided function
on every element in the calling array.*/
export const mapUsers = (users = []) => {
    return users.map(user => ({name: `${user.firstName} ${user.lastName}`}))
}
/*A new array with the elements that pass the test. If no elements pass the test,
an empty array will be returned.*/
export const filterNumbers = (numbers = []) =>{
    return numbers.filter(number => (number > 5))
}
/*method returns the value of the first element in the provided array that satisfies
the provided testing function.*/
export const findElement = (numbers = []) =>{
    return numbers.find(number => (number > 12))
}
/*method tests whether at least one element in the array passes the test implemented
by the provided function.*/
export const checkAvailability = (elemnts = [], val) =>{
    return elemnts.some(element => (element === val));
}
/*method removes the first element from an array and returns that removed element*/
export const removeFirstElement = (elements = []) =>{
    return elements.shift();
}
/*The reducer walks through the array element-by-element, at each step adding the current
array value to the result from the previous step — until there are no more elements to add.*/
export const sumAllValues = (array = []) =>{
    return array.reduce((previousValue, currentValue ) => previousValue + currentValue,0);
}


