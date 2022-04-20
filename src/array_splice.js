let numbers = [1, 2, 3, 4, 5, 6, 7];
const step1=numbers.splice(2) // start deleting from 2nd index till the end
console.log(step1); // [ 3, 4, 5, 6, 7 ] 
console.log(numbers); //original array changed [ 1, 2 ]
numbers.splice(2,5,3,4,5,6,7); //recreate:  from second index, add 5 elements which are 3,4,5,6,7
console.log(numbers); //[ 1, 3, 4, 5, 6, 7 ]
console.log(numbers.splice(-3)); // [ 5, 6, 7 ]
numbers.splice(4,3,5,6,7); //recreate:  from fourth index, add 3 elements which are 5,6,7
console.log(numbers); //[ 1, 2, 3, 4, 5, 6, 7 ]
console.log(numbers.splice(2,3)); //starting from index two delete 3 elements 
console.log(numbers); // [ 1, 2, 6, 7 ]