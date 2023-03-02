const numbers = [32, 54, 87, 54, 34];
const student = {
    name: 'sakib khan',
    age: 43,
    movies: ['king khan', 'dhakar mastan']

};
// 1.template string 
const about = `my name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);
// 2.arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}
// spread operator 
const newNumbers = numbers;

numbers.push(99);
console.log(newNumbers);
const newNumbers = [numbers];//for two dimentionals
console.log(newNumbers)
const newNumbers = [...numbers];
console.log(newNumbers)
//create a new arrayfrom an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers);