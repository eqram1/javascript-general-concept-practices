//1. how to declare a variable using let and const
const fatherName = 'abul basher';
let season = 'rainy';
season = 'winter';
// 2.conditions
//  6 basic conditions:  > ,< ,===,!==,<=,>=
// multiple conditions=&&,||,
if (fatherName === 'Abul basher' || season === 'rainy') {

}
else if (fatherName === 'abul basher') {

}
else {

}
// 3.array declare
// index
// length,push
const numbers = [32, 54, 87, 54, 34];
// numbers set
numbers[0] = 56
// 4.for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}
// 5. function
function multiply(num1, num2) {
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);
// 6.Object
// 3 ways to access property by name 
const student = {
    name: 'sakib khan',
    age: 43,
    movies: ['king khan', 'dhakar mastan']

}
const myVariable = 'age';

console.log(student.age);//direct by property

console.log(student['age']);  //access via property name string 

console.log(student[myVariable]); //access via property name in a variable