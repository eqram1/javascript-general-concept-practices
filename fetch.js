//1.JSON=> stringify ,parse
const student = {
    name: 'sakib khan',
    age: 43,
    movies: ['king khan', 'dhakar mastan']

}
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

//2.fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data));

// keys,values
const keys = Object.keys(student);
const values = Object.values(student);

//for
const numbers = [43, 54, 23, 87, 98];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2)

//for of on array like object
//for in using loop on an object
// add or remove from an array
const products = [
    { name: 'laptop', price: 32000, brand: 'len', color: 'silver' },
    { name: 'phone', price: 42000, brand: 'htc', color: 'golden' },
    { name: 'watch', price: 12000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 2000, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 22000, brand: 'canon', color: 'gray' }
];
const newProduct = { name: 'webcan', price: 700, color: 'lal' };
//copy products array and then add new product
const newProducts = [...products, newProduct];
//create a new array without one specific items
//remove phone means create a new array without the phone.
const remaining = products.filter(p => p.name !== 'phone');
