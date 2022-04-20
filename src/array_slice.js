let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.slice(2)); // from 2nd index till the end [ 3, 4, 5, 6, 7 ]
console.log(numbers.slice(-2)); // last two elements [ 6, 7 ]
console.log(numbers.slice(-4)); //last four elements [ 4, 5, 6, 7 ]
console.log(numbers.slice(2,4)); // start with second index till (4-1), exclude end index [ 3, 4 ]
console.log(numbers.slice(-1,4)); //not possible []
console.log(numbers.slice(-1,-4)); //not possible []
console.log(numbers.slice(1,-4)); // start with index 1 upto last 4 elements excluded [ 2, 3 ]
console.log(numbers.slice(1,-2)); // start with index 1 upto last 2 elements excluded [ 2, 3, 4, 5 ]
console.log(numbers.slice(2,-4)); // start with index 2 upto last 4 elements excluded [ 3 ]

//shallow copy concept

let mixArray= [1, {name:"Harshi", marks:80},"student"];
let newArray=mixArray.slice(1);
console.log(newArray); // [ { name: 'Harshi', marks: 80 }, 'student' ]
newArray[0].name="Dummy";
newArray[1]="teacher";
console.log(newArray); // [ { name: 'Dummy', marks: 80 }, 'teacher' ]
console.log(mixArray); // [ 1, { name: 'Dummy', marks: 80 }, 'student' ]
